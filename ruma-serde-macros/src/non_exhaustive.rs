use proc_macro2::TokenStream;
use quote::quote;
use syn::{parse_quote, Data, DeriveInput, Field, Fields};

pub fn expand_non_exhaustive_with_opt_out(mut input: DeriveInput) -> syn::Result<TokenStream> {
    Ok(match &mut input.data {
        Data::Enum(e) => {
            e.variants.push(parse_quote! {
                #[cfg(not(feature = "unstable-exhaustive-types"))]
                _TestExhaustive,
            });

            quote! { #input }
        }
        Data::Struct(s) => match &mut s.fields {
            Fields::Named(n) => {
                n.named.push(Field {
                    attrs: vec![
                        parse_quote! { #[cfg(not(feature = "unstable-exhaustive-types"))] },
                    ],
                    vis: parse_quote! { pub },
                    ident: Some(parse_quote! { _test_exhaustive }),
                    colon_token: Some(Default::default()),
                    ty: parse_quote! { () },
                });

                quote! { #input }
            }
            Fields::Unnamed(_) => panic!("tuple structs are not supported for this attribute"),
            Fields::Unit => {
                let mut alt_struct = s.clone();
                alt_struct.fields = Fields::Named(parse_quote! {
                    { _test_exhaustive: () }
                });

                let alt_input = DeriveInput { data: Data::Struct(alt_struct), ..input.clone() };

                quote! {
                    #[cfg(not(feature = "unstable-exhaustive-types"))]
                    #input

                    #[cfg(feature = "unstable-exhaustive-types")]
                    #alt_input
                }
            }
        },
        Data::Union(_) => panic!("unions are not supported for this attribute"),
    })
}

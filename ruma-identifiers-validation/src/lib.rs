pub mod device_key_id;
pub mod error;
pub mod event_id;
pub mod key_id;
pub mod room_alias_id;
pub mod room_id;
pub mod room_id_or_alias_id;
pub mod room_version_id;
pub mod server_name;
pub mod user_id;

pub use error::Error;

/// All identifiers must be 255 bytes or less.
const MAX_BYTES: usize = 255;

/// Checks if an identifier is valid.
fn validate_id(id: &str, valid_sigils: &[char]) -> Result<(), Error> {
    if id.len() > MAX_BYTES {
        return Err(Error::MaximumLengthExceeded);
    }

    if !id.starts_with(valid_sigils) {
        return Err(Error::MissingLeadingSigil);
    }

    Ok(())
}

/// Checks an identifier that contains a localpart and hostname for validity.
fn validate_delimited_id(id: &str, valid_sigils: &[char]) -> Result<(), Error> {
    validate_id(id, valid_sigils)?;
    let colon_idx = id.find(':').ok_or(Error::MissingDelimiter)?;
    server_name::validate(&id[colon_idx + 1..])?;
    Ok(())
}

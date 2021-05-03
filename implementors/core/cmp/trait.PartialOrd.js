(function() {var implementors = {};
implementors["ruma_client_api"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"enum\" href=\"ruma_client_api/r0/push/enum.RuleKind.html\" title=\"enum ruma_client_api::r0::push::RuleKind\">RuleKind</a>&gt; for <a class=\"enum\" href=\"ruma_client_api/r0/push/enum.RuleKind.html\" title=\"enum ruma_client_api::r0::push::RuleKind\">RuleKind</a>","synthetic":false,"types":["ruma_client_api::r0::push::RuleKind"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"enum\" href=\"ruma_client_api/r0/search/search_events/enum.GroupingKey.html\" title=\"enum ruma_client_api::r0::search::search_events::GroupingKey\">GroupingKey</a>&gt; for <a class=\"enum\" href=\"ruma_client_api/r0/search/search_events/enum.GroupingKey.html\" title=\"enum ruma_client_api::r0::search::search_events::GroupingKey\">GroupingKey</a>","synthetic":false,"types":["ruma_client_api::r0::search::search_events::GroupingKey"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"enum\" href=\"ruma_client_api/r0/search/search_events/enum.RoomIdOrUserId.html\" title=\"enum ruma_client_api::r0::search::search_events::RoomIdOrUserId\">RoomIdOrUserId</a>&gt; for <a class=\"enum\" href=\"ruma_client_api/r0/search/search_events/enum.RoomIdOrUserId.html\" title=\"enum ruma_client_api::r0::search::search_events::RoomIdOrUserId\">RoomIdOrUserId</a>","synthetic":false,"types":["ruma_client_api::r0::search::search_events::RoomIdOrUserId"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"enum\" href=\"ruma_client_api/r0/to_device/enum.DeviceIdOrAllDevices.html\" title=\"enum ruma_client_api::r0::to_device::DeviceIdOrAllDevices\">DeviceIdOrAllDevices</a>&gt; for <a class=\"enum\" href=\"ruma_client_api/r0/to_device/enum.DeviceIdOrAllDevices.html\" title=\"enum ruma_client_api::r0::to_device::DeviceIdOrAllDevices\">DeviceIdOrAllDevices</a>","synthetic":false,"types":["ruma_client_api::r0::to_device::DeviceIdOrAllDevices"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"struct\" href=\"ruma_client_api/unversioned/discover_homeserver/struct.HomeserverInfo.html\" title=\"struct ruma_client_api::unversioned::discover_homeserver::HomeserverInfo\">HomeserverInfo</a>&gt; for <a class=\"struct\" href=\"ruma_client_api/unversioned/discover_homeserver/struct.HomeserverInfo.html\" title=\"struct ruma_client_api::unversioned::discover_homeserver::HomeserverInfo\">HomeserverInfo</a>","synthetic":false,"types":["ruma_client_api::unversioned::discover_homeserver::HomeserverInfo"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"struct\" href=\"ruma_client_api/unversioned/discover_homeserver/struct.IdentityServerInfo.html\" title=\"struct ruma_client_api::unversioned::discover_homeserver::IdentityServerInfo\">IdentityServerInfo</a>&gt; for <a class=\"struct\" href=\"ruma_client_api/unversioned/discover_homeserver/struct.IdentityServerInfo.html\" title=\"struct ruma_client_api::unversioned::discover_homeserver::IdentityServerInfo\">IdentityServerInfo</a>","synthetic":false,"types":["ruma_client_api::unversioned::discover_homeserver::IdentityServerInfo"]}];
implementors["ruma_events"] = [{"text":"impl&lt;C:&nbsp;<a class=\"trait\" href=\"ruma_events/trait.MessageEventContent.html\" title=\"trait ruma_events::MessageEventContent\">MessageEventContent</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"struct\" href=\"ruma_events/struct.MessageEvent.html\" title=\"struct ruma_events::MessageEvent\">MessageEvent</a>&lt;C&gt;&gt; for <a class=\"struct\" href=\"ruma_events/struct.MessageEvent.html\" title=\"struct ruma_events::MessageEvent\">MessageEvent</a>&lt;C&gt;","synthetic":false,"types":["ruma_events::event_kinds::MessageEvent"]},{"text":"impl&lt;C:&nbsp;<a class=\"trait\" href=\"ruma_events/trait.MessageEventContent.html\" title=\"trait ruma_events::MessageEventContent\">MessageEventContent</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"struct\" href=\"ruma_events/struct.SyncMessageEvent.html\" title=\"struct ruma_events::SyncMessageEvent\">SyncMessageEvent</a>&lt;C&gt;&gt; for <a class=\"struct\" href=\"ruma_events/struct.SyncMessageEvent.html\" title=\"struct ruma_events::SyncMessageEvent\">SyncMessageEvent</a>&lt;C&gt;","synthetic":false,"types":["ruma_events::event_kinds::SyncMessageEvent"]},{"text":"impl&lt;C:&nbsp;<a class=\"trait\" href=\"ruma_events/trait.RedactedMessageEventContent.html\" title=\"trait ruma_events::RedactedMessageEventContent\">RedactedMessageEventContent</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"struct\" href=\"ruma_events/struct.RedactedMessageEvent.html\" title=\"struct ruma_events::RedactedMessageEvent\">RedactedMessageEvent</a>&lt;C&gt;&gt; for <a class=\"struct\" href=\"ruma_events/struct.RedactedMessageEvent.html\" title=\"struct ruma_events::RedactedMessageEvent\">RedactedMessageEvent</a>&lt;C&gt;","synthetic":false,"types":["ruma_events::event_kinds::RedactedMessageEvent"]},{"text":"impl&lt;C:&nbsp;<a class=\"trait\" href=\"ruma_events/trait.RedactedMessageEventContent.html\" title=\"trait ruma_events::RedactedMessageEventContent\">RedactedMessageEventContent</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"struct\" href=\"ruma_events/struct.RedactedSyncMessageEvent.html\" title=\"struct ruma_events::RedactedSyncMessageEvent\">RedactedSyncMessageEvent</a>&lt;C&gt;&gt; for <a class=\"struct\" href=\"ruma_events/struct.RedactedSyncMessageEvent.html\" title=\"struct ruma_events::RedactedSyncMessageEvent\">RedactedSyncMessageEvent</a>&lt;C&gt;","synthetic":false,"types":["ruma_events::event_kinds::RedactedSyncMessageEvent"]},{"text":"impl&lt;C:&nbsp;<a class=\"trait\" href=\"ruma_events/trait.StateEventContent.html\" title=\"trait ruma_events::StateEventContent\">StateEventContent</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"struct\" href=\"ruma_events/struct.StateEvent.html\" title=\"struct ruma_events::StateEvent\">StateEvent</a>&lt;C&gt;&gt; for <a class=\"struct\" href=\"ruma_events/struct.StateEvent.html\" title=\"struct ruma_events::StateEvent\">StateEvent</a>&lt;C&gt;","synthetic":false,"types":["ruma_events::event_kinds::StateEvent"]},{"text":"impl&lt;C:&nbsp;<a class=\"trait\" href=\"ruma_events/trait.StateEventContent.html\" title=\"trait ruma_events::StateEventContent\">StateEventContent</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"struct\" href=\"ruma_events/struct.SyncStateEvent.html\" title=\"struct ruma_events::SyncStateEvent\">SyncStateEvent</a>&lt;C&gt;&gt; for <a class=\"struct\" href=\"ruma_events/struct.SyncStateEvent.html\" title=\"struct ruma_events::SyncStateEvent\">SyncStateEvent</a>&lt;C&gt;","synthetic":false,"types":["ruma_events::event_kinds::SyncStateEvent"]},{"text":"impl&lt;C:&nbsp;<a class=\"trait\" href=\"ruma_events/trait.RedactedStateEventContent.html\" title=\"trait ruma_events::RedactedStateEventContent\">RedactedStateEventContent</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"struct\" href=\"ruma_events/struct.RedactedStateEvent.html\" title=\"struct ruma_events::RedactedStateEvent\">RedactedStateEvent</a>&lt;C&gt;&gt; for <a class=\"struct\" href=\"ruma_events/struct.RedactedStateEvent.html\" title=\"struct ruma_events::RedactedStateEvent\">RedactedStateEvent</a>&lt;C&gt;","synthetic":false,"types":["ruma_events::event_kinds::RedactedStateEvent"]},{"text":"impl&lt;C:&nbsp;<a class=\"trait\" href=\"ruma_events/trait.RedactedStateEventContent.html\" title=\"trait ruma_events::RedactedStateEventContent\">RedactedStateEventContent</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"struct\" href=\"ruma_events/struct.RedactedSyncStateEvent.html\" title=\"struct ruma_events::RedactedSyncStateEvent\">RedactedSyncStateEvent</a>&lt;C&gt;&gt; for <a class=\"struct\" href=\"ruma_events/struct.RedactedSyncStateEvent.html\" title=\"struct ruma_events::RedactedSyncStateEvent\">RedactedSyncStateEvent</a>&lt;C&gt;","synthetic":false,"types":["ruma_events::event_kinds::RedactedSyncStateEvent"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"enum\" href=\"ruma_events/enum.EventType.html\" title=\"enum ruma_events::EventType\">EventType</a>&gt; for <a class=\"enum\" href=\"ruma_events/enum.EventType.html\" title=\"enum ruma_events::EventType\">EventType</a>","synthetic":false,"types":["ruma_events::event_type::EventType"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"struct\" href=\"ruma_events/room/redaction/struct.RedactionEvent.html\" title=\"struct ruma_events::room::redaction::RedactionEvent\">RedactionEvent</a>&gt; for <a class=\"struct\" href=\"ruma_events/room/redaction/struct.RedactionEvent.html\" title=\"struct ruma_events::room::redaction::RedactionEvent\">RedactionEvent</a>","synthetic":false,"types":["ruma_events::room::redaction::RedactionEvent"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"struct\" href=\"ruma_events/room/redaction/struct.SyncRedactionEvent.html\" title=\"struct ruma_events::room::redaction::SyncRedactionEvent\">SyncRedactionEvent</a>&gt; for <a class=\"struct\" href=\"ruma_events/room/redaction/struct.SyncRedactionEvent.html\" title=\"struct ruma_events::room::redaction::SyncRedactionEvent\">SyncRedactionEvent</a>","synthetic":false,"types":["ruma_events::room::redaction::SyncRedactionEvent"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"enum\" href=\"ruma_events/tag/enum.TagName.html\" title=\"enum ruma_events::tag::TagName\">TagName</a>&gt; for <a class=\"enum\" href=\"ruma_events/tag/enum.TagName.html\" title=\"enum ruma_events::tag::TagName\">TagName</a>","synthetic":false,"types":["ruma_events::tag::TagName"]}];
implementors["ruma_identifiers"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"struct\" href=\"ruma_identifiers/struct.UserId.html\" title=\"struct ruma_identifiers::UserId\">UserId</a>&gt; for <a class=\"struct\" href=\"ruma_identifiers/struct.UserId.html\" title=\"struct ruma_identifiers::UserId\">UserId</a>","synthetic":false,"types":["ruma_identifiers::user_id::UserId"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"enum\" href=\"ruma_identifiers/enum.DeviceKeyAlgorithm.html\" title=\"enum ruma_identifiers::DeviceKeyAlgorithm\">DeviceKeyAlgorithm</a>&gt; for <a class=\"enum\" href=\"ruma_identifiers/enum.DeviceKeyAlgorithm.html\" title=\"enum ruma_identifiers::DeviceKeyAlgorithm\">DeviceKeyAlgorithm</a>","synthetic":false,"types":["ruma_identifiers::crypto_algorithms::DeviceKeyAlgorithm"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"enum\" href=\"ruma_identifiers/enum.SigningKeyAlgorithm.html\" title=\"enum ruma_identifiers::SigningKeyAlgorithm\">SigningKeyAlgorithm</a>&gt; for <a class=\"enum\" href=\"ruma_identifiers/enum.SigningKeyAlgorithm.html\" title=\"enum ruma_identifiers::SigningKeyAlgorithm\">SigningKeyAlgorithm</a>","synthetic":false,"types":["ruma_identifiers::crypto_algorithms::SigningKeyAlgorithm"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"enum\" href=\"ruma_identifiers/enum.EventEncryptionAlgorithm.html\" title=\"enum ruma_identifiers::EventEncryptionAlgorithm\">EventEncryptionAlgorithm</a>&gt; for <a class=\"enum\" href=\"ruma_identifiers/enum.EventEncryptionAlgorithm.html\" title=\"enum ruma_identifiers::EventEncryptionAlgorithm\">EventEncryptionAlgorithm</a>","synthetic":false,"types":["ruma_identifiers::crypto_algorithms::EventEncryptionAlgorithm"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"struct\" href=\"ruma_identifiers/struct.DeviceKeyId.html\" title=\"struct ruma_identifiers::DeviceKeyId\">DeviceKeyId</a>&gt; for <a class=\"struct\" href=\"ruma_identifiers/struct.DeviceKeyId.html\" title=\"struct ruma_identifiers::DeviceKeyId\">DeviceKeyId</a>","synthetic":false,"types":["ruma_identifiers::device_key_id::DeviceKeyId"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"struct\" href=\"ruma_identifiers/struct.EventId.html\" title=\"struct ruma_identifiers::EventId\">EventId</a>&gt; for <a class=\"struct\" href=\"ruma_identifiers/struct.EventId.html\" title=\"struct ruma_identifiers::EventId\">EventId</a>","synthetic":false,"types":["ruma_identifiers::event_id::EventId"]},{"text":"impl&lt;A, K:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"struct\" href=\"ruma_identifiers/struct.KeyId.html\" title=\"struct ruma_identifiers::KeyId\">KeyId</a>&lt;A, K&gt;&gt; for <a class=\"struct\" href=\"ruma_identifiers/struct.KeyId.html\" title=\"struct ruma_identifiers::KeyId\">KeyId</a>&lt;A, K&gt;","synthetic":false,"types":["ruma_identifiers::key_id::KeyId"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"struct\" href=\"ruma_identifiers/struct.MxcUri.html\" title=\"struct ruma_identifiers::MxcUri\">MxcUri</a>&gt; for <a class=\"struct\" href=\"ruma_identifiers/struct.MxcUri.html\" title=\"struct ruma_identifiers::MxcUri\">MxcUri</a>","synthetic":false,"types":["ruma_identifiers::mxc_uri::MxcUri"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"struct\" href=\"ruma_identifiers/struct.DeviceId.html\" title=\"struct ruma_identifiers::DeviceId\">DeviceId</a>&gt; for <a class=\"struct\" href=\"ruma_identifiers/struct.DeviceId.html\" title=\"struct ruma_identifiers::DeviceId\">DeviceId</a>","synthetic":false,"types":["ruma_identifiers::opaque_ids::DeviceId"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"struct\" href=\"ruma_identifiers/struct.KeyName.html\" title=\"struct ruma_identifiers::KeyName\">KeyName</a>&gt; for <a class=\"struct\" href=\"ruma_identifiers/struct.KeyName.html\" title=\"struct ruma_identifiers::KeyName\">KeyName</a>","synthetic":false,"types":["ruma_identifiers::opaque_ids::KeyName"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"struct\" href=\"ruma_identifiers/struct.RoomAliasId.html\" title=\"struct ruma_identifiers::RoomAliasId\">RoomAliasId</a>&gt; for <a class=\"struct\" href=\"ruma_identifiers/struct.RoomAliasId.html\" title=\"struct ruma_identifiers::RoomAliasId\">RoomAliasId</a>","synthetic":false,"types":["ruma_identifiers::room_alias_id::RoomAliasId"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"struct\" href=\"ruma_identifiers/struct.RoomId.html\" title=\"struct ruma_identifiers::RoomId\">RoomId</a>&gt; for <a class=\"struct\" href=\"ruma_identifiers/struct.RoomId.html\" title=\"struct ruma_identifiers::RoomId\">RoomId</a>","synthetic":false,"types":["ruma_identifiers::room_id::RoomId"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"struct\" href=\"ruma_identifiers/struct.RoomIdOrAliasId.html\" title=\"struct ruma_identifiers::RoomIdOrAliasId\">RoomIdOrAliasId</a>&gt; for <a class=\"struct\" href=\"ruma_identifiers/struct.RoomIdOrAliasId.html\" title=\"struct ruma_identifiers::RoomIdOrAliasId\">RoomIdOrAliasId</a>","synthetic":false,"types":["ruma_identifiers::room_id_or_room_alias_id::RoomIdOrAliasId"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"enum\" href=\"ruma_identifiers/enum.RoomVersionId.html\" title=\"enum ruma_identifiers::RoomVersionId\">RoomVersionId</a>&gt; for <a class=\"enum\" href=\"ruma_identifiers/enum.RoomVersionId.html\" title=\"enum ruma_identifiers::RoomVersionId\">RoomVersionId</a>","synthetic":false,"types":["ruma_identifiers::room_version_id::RoomVersionId"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"struct\" href=\"ruma_identifiers/struct.ServerName.html\" title=\"struct ruma_identifiers::ServerName\">ServerName</a>&gt; for <a class=\"struct\" href=\"ruma_identifiers/struct.ServerName.html\" title=\"struct ruma_identifiers::ServerName\">ServerName</a>","synthetic":false,"types":["ruma_identifiers::server_name::ServerName"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()
Rails.application.config.session_store :cookie_store,
    key: "_onevel_session",
    expire_after: 24.hours,
    httponly: true,
    secure: Rails.env.production?,
    same_site: :lax
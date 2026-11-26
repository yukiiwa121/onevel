class ApplicationController < ActionController::Base
  # Only allow modern browsers supporting webp images, web push, badges, import maps, CSS nesting, and CSS :has.
  allow_browser versions: :modern

  protect_from_forgery with: :exception

  rescue_from ActionController::InvalidAuthenticityToken do
    render json: { error: "CSRFトークンが無効です" },
           status: :unprocessable_entity
  end
end

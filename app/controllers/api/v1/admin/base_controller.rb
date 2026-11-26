module Api
    module V1
        module Admin
            class BaseController < ApplicationController
                before_action :require_login
                before_action :authorize_admin

                private

                def require_login
                    return if current_user

                    render json: {
                        error: "ログインが必要です"},
                        status: :unauthorized
                end

                def authorize_admin
                    authorize :admin, :access?
                end
            end
        end
    end
end

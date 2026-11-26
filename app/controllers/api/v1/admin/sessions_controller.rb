module Api
    module V1
        module Admin
            class SessionsController < ApplicationController
                def create
                    response.headers["Cache-Control"] = "no-store"

                    user = User.find_by(email: params[:email])

                    if user&.authenticate(params[:password]) && user.role_admin?
                        reset_session
                        session[:user_id] = user.id

                        render json: {
                            message: "ログインしました",
                            user: {
                                id: user.id,
                                name: user.name,
                                email: user.email,
                                role: user.role}
                            }, status: :ok
                    else
                        render json: {
                            error: "メールアドレスまたはパスワードが正しくありません"},
                            status: :unauthorized
                    end
                end
            end
        end
    end
end
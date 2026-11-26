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

                def show
                    response.headers["Cache-Control"] = "no-store"

                    user = current_user

                    unless user
                        return render json: {
                            error: "ログインが必要です"}, 
                            status: :unauthorized
                    end

                    unless user.role_admin?
                        return render json: {
                            error: "管理者権限が必要です"},
                            status: :forbidden
                    end

                    render json: {
                        user: {
                            id: user.id,
                            name: user.name,
                            email: user.email,
                            role: user.role}
                        }, status: :ok
                end

                def destroy
                    response.headers["Cache-Control"] = "no-store"

                    reset_session

                    render json: {
                        message: "ログアウトしました"},
                        status: :ok
                end
            end
        end
    end
end
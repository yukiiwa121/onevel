module Api
    module V1
        module Admin
            class DashboardController < BaseController
                def show
                    response.headers["Cche-Control"] = "no-store"

                    render json: {
                        message: "管理者ダッシュボードへのアクセスが許可されました"},
                        status: :ok
                end
            end
        end
    end
end

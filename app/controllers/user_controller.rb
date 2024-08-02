class UserController < ApplicationController
    def index
        name = params[:name]
        @users = User.where("username LIKE ?", "%#{name}%").select("username", "id").limit(10)

        return render json: {
            :users => @users
        }
    end

    def index_by_id
        @user = User.find(params[:id]).select("id", "username")

        if @user.present?
            return render json: {
                :user => @user
            }, status: :ok
        else 
            return render json: {
                :user => { id: -1, username: "" }
            }, status: 404
        end
    end
end

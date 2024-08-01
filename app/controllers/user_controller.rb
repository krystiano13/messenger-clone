class UserController < ApplicationController
    def index
        name = params[:name]
        @users = User.where("username LIKE ?", "%#{name}%").select("username", "id").limit(10)

        return render json: {
            :users => @users
        }
    end
end

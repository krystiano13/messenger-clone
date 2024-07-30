class UsernameController < ApplicationController
    def index
        @user = User.find(params[:id])

        return render json: {
            :username => @user.username
        }, status: :ok
    end
end

class UsernameController < ApplicationController
    def index
        @user = User.find_by(email: params[:email])

        if @user.present?
            return render json: {
                :username => @user.username
            }, status: :ok
        else
           return render json: {
                :username => ""
            }, status: :ok 
        end
    end
end

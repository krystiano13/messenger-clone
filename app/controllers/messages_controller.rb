class MessagesController < ApplicationController
    def index
        @user = User.find_by(username: params[:username])

        unless @user.present?
            return render json: {
                :error => "user not found"
            }, status: 404
        end

        @messages = Message.where(from: @user).or(Message.where(to: @user))

        if @messages.present?
            return render json: {
                :messages => @messages
            }, status: :ok
        else
            return render json: {
                :messages => []
            }, status: :ok
        end
    end
end

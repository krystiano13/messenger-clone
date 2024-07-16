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

    def get_one
        @from = User.find_by(username: params[:from])
        @to = User.find_by(username: params[:to])

        unless @from.present? or @to.present?
            return render json: {
                :error => "Conversation not found"
            }, status: 404
        end

        @messages = Message.where(from: @user).and(Message.where(to: @user))

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

    def create
        message = Message.new(message_params)

        begin
            message.save!
            return render json: {
                :status => "Message Created",
                :message => message
            }, status: :ok
        rescue
            return render json: {
                :status => "Message could not be created",
                :errors => message.errors
            }, status: :unprocessable_entity
        end
    end

    private
    def message_params
        return params.require(:message).permit(:from, :to, :content)
    end
end

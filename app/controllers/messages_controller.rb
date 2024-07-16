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

    def update
        @message = Message.find(params[:id])

        if @message.present?
            begin
                @message.update!(message_update_params)
                return render json: {
                    :status => "Message Updated",
                    :message => @message
                }
            rescue
                return render json: {
                    :status => "Server Error"
                }, status: 500
            end
        else
            return render json: {
                :error => "Message Not Found"
            }, status: 404
        end
    end

    def destroy
        @message = Message.find(params[:id])
        
        if @message.present?
            @message.destroy
        end

        return render json: {}, status: 201
    end

    private
    def message_params
        return params.require(:message).permit(:from, :to, :content)
    end

    private
    def message_update_params
        return params.require(:message).permit(:content)
    end
end

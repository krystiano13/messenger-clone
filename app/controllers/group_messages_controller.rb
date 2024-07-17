class GroupMessagesController < ApplicationController
    def index
        @messages = GroupMessage.where(group_id: params[:group_id])

        return render json: {
            :messages => @messages
        }, status: :ok
    end

    def create
        gm = GroupMessage.new(message_params)

        if gm.save!
            return render json: {
                :info => "Message sent !",
                :message => gm
            }, status: :ok
        else
            return render json: {
                :errors => gm.errors
            }, status: :unprocessable_entity
        end
    end

    def update
        @message = GroupMessage.find_by(id: params[:id])

        if @message.present?
            begin
                @message.update!(message_params)
            rescue
                return render json: {
                    :error => "Server Error"
                }, status: 500
            end
        else
            return render json: {
                :error => "Message not found"
            }, status: 404
        end
    end

    def destroy

    end

    private
    def message_params
        return params.permit(:user_id, :group_id, :username, :content)
    end
end

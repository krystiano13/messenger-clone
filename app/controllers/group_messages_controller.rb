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

    private
    def message_params
        return params.permit(:user_id, :group_id, :username, :content)
    end
end

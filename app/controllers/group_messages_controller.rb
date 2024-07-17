class GroupMessagesController < ApplicationController
    def index
        @messages = GroupMessage.where(group_id: params[:group_id])

        return render json: {
            :messages => @messages
        }, status: :ok
    end
end

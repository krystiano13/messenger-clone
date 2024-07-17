class GroupMembersController < ApplicationController
    def index
        @members = GroupMember.where(group_id: params[:group_id])
        
        return render json: {
            :members => @members
        }, status: :ok
    end
end

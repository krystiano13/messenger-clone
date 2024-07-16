class GroupsController < ApplicationController
    def create
        group = Group.new(group_params)
        @user = User.find(group_member_params)

        unless group.save! or @user.present?
            return render json: {
                :status => "Could not create group",
                :errors_group => group.errors,
                :errors_user => @user.errors
            }, status: :unprocessable_entity
        end

        group_admin = GroupMember.new(role: "admin", user_id: group_member_params, group_id: group.id)
        
        if group_admin.save!
            return render json: {
                :info => "Group Created",
                :group => group,
                :members => group.group_member
            }
        else
            group.destroy!
            return render json: {
                :info => "Server Error"
            }, status: 500
        end

    end

    private
    def group_params
        return params.require(:group).permit(:name)
    end

    private
    def group_member_params
        return params.permit(:user_id)
    end
end

class GroupsController < ApplicationController
    def index
        name = params[:name]
        @groups = Group.where("name LIKE ?", "%#{name}%")

        if @groups.present?
            return render json: {
                :groups => @groups
            }, status: :ok
        else
            return render json: {
                :groups => Array.new
            }, status: :ok
        end
    end

    def get_one
        @group = Group.find(params[:id])

        if @group.present?
            return render json: {
                :group => @group,
                :members => @group.group_member
            }, status: :ok
        else
            return render json: {
                :error => "Group not found"
            }, status: 404
        end
    end

    def create
        group = Group.new(group_params)
        @user = User.find_by(id: params[:user_id])

        unless group.save! or @user.present?
            return render json: {
                :status => "Could not create group",
                :errors_group => group.errors,
                :errors_user => @user.errors
            }, status: :unprocessable_entity
        end

        group_admin = GroupMember.new(role: "admin", user_id: params[:user_id], group_id: group.id)
        
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

    def update
        @group = Group.find(params[:id])

        if @group.present?
            begin
                @group.update!(group_params)
                return render json: {
                    :info => "Group renamed",
                    :group => @group
                }, status: :ok
            rescue
                return render json: {
                    :info => "Server Error"
                }, status: 500
            end
        else
            return render json: {
                :info => "Group not found"
            }, status: 404
        end
    end

    def destroy
        @group = Group.find(params[:id])

        if @group.present?
            begin
                @group.destroy!
                return render json: {
                    :info => "Group Destroyed",
                }, status: :ok
            rescue
                return render json: {
                    :info => "Server Error"
                }, status: 500
            end
        else
            return render json: {
                :info => "Group not found"
            }, status: 404
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

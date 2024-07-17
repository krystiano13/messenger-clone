class GroupMembersController < ApplicationController
    def index
        @members = GroupMember.where(group_id: params[:group_id])
        
        return render json: {
            :members => @members
        }, status: :ok
    end

    def create
        @gm = GroupMember.new(member_params)
        
        if @gm.save!
            return render json: {
                :info => "Group Member Created"
            }, status: :ok
        else
            return render json: {
                :errors => @gm.errors
            }, status: :unprocessable_entity
        end
    end

    def destroy
        @member = GroupMember.where(group_id: params[:group_id]).and(GroupMember.where(id: params[:id]))
        
        if @member.present?
            begin
                @member.each do |mem|
                    mem.destroy
                end
                
                return render json: {
                    :info => "Members removed"
                }, status: :ok
            rescue
                return render json: {
                    :error => "Server Error"
                }, status: 500
            end
        else
            return render json: {
                :error => "Member not found"
            }, status: 404
        end
    end

    private
    def member_params
        return params.permit(:role, :group_id, :user_id)
    end
end

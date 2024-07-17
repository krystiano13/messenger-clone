class GroupInvitesController < ApplicationController
    def index
        @invites = GroupInvite.where(user_id: params[:user_id])

        return render json: {
            :invites => @invites
        }, status: :ok
    end

    def get_by_group
        @invites = GroupInvite.where(group_id: params[:group_id])

        invite_with_info = Array.new

        @invites.each do |invite|
            invite_with_info.unshift({
                :invite => invite,
                :user => User.find_by(id: invite.user_id)
            })
        end

        return render json: {
            :invites => invite_with_info
        }, status: :ok
    end

    def create
        invite = GroupInvite.new(group_invite_params)

        begin
            invite.save!
            return render json: {
                :info => "Invite sent !",
                :user => User.find_by(id: params[:user_id]),
                :group => Group.find_by(id: params[:group_id])
            }, status: :ok
        rescue
            return render json: {
                :errors => invite.errors
            }, status: :unprocessable_entity
        end
    end

    def destroy
        @invite = Invite.find_by(id: params[:id])

        begin 
            @invite.destroy

            return render json: {
                :info => "Invite canceled"
            }, status: :ok
        rescue
            return render json: {
                :error => "Server Error"
            }, stautus: 500
        end
    end

    private 
    def group_invite_params
        return params.permit(:group_id, :user_id)
    end
end

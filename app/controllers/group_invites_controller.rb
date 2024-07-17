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
end

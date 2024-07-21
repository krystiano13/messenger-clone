class FriendInvitesController < ApplicationController
    def index
        @invites = FriendInvite.where(user_id: params[:user_id])

        return render json: {
            :invites => @invites
        }, status: :ok
    end

    def create
        new_invite = FriendInvite.new(invite_params)

        if new_invite.save!
            return render json: {
                :info => "Invite sent",
                :invite => new_invite
            }, status: :ok
        else
            return render json: {
                :errors => new_invite.errors
            }, status: :unprocessable_entity
        end
    end

    def destroy
        @invite = FriendInvite.find(params[:id])

        if @invite.present?
            @invite.destroy
        end

        return render json: {
            :status => "deleted"
        }, status: :ok
    end

    private
    def invite_params
        return params.permit(:user_id, :inviter_id)
    end
end

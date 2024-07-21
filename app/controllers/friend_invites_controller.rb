class FriendInvitesController < ApplicationController
    def index
        @invites = FriendInvite.where(user_id: params[:user_id])

        return render json: {
            :invites => @invites
        }, status: :ok
    end

    def create

    end

    def destroy

    end
end

class FriendController < ApplicationController
    def index
        @friends = Friend.where(user_id: params[:user_id])

        return render json: {
            :friends => @friends
        }, status: :ok
    end

    def create

    end

    def destroy

    end
end

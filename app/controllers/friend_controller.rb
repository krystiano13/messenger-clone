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
        @friend = Friend.find(:params[:id])

        if @friend.present?
            @friend.destroy!
        end

        return render json: {
            :info => "Friend record destroyed"
        }, status: :ok
    end
end

class FriendController < ApplicationController
    def index
        @friends = Friend.where(user_id: params[:user_id])

        return render json: {
            :friends => @friends
        }, status: :ok
    end

    def index_with_last_message
        @friends = Friend.where(user_id: params[:user_id])
        @friends_with_last_message = []

        @friends.each do |friend|
            last_message = Message.where(from: friend.friend_id).or(Message.where(to: friend.friend_id))
            msg = ""

            if last_message[0]
                msg = last_message[0].content
            end

            @friends_with_last_message.push({ friend: friend, last_message: msg })
        end

        return render json: {
            :friends => @friends_with_last_message
        }, status: :ok
    end

    def create
        new_friend = Friend.new(friend_params)

        if new_friend.save!
            return render json: {
                :info => "Friend added !",
                :friend => new_friend
            }, status: :ok
        else
            return render json: {
                :errors => new_friend.errors
            }, status: :unprocessable_entity
        end
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

    private 
    def friend_params
        return params.permit(:user_id, :friend_id, :friend_name)
    end
end

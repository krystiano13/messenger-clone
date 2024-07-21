class FriendInvite < ApplicationRecord
    validates :user_id, presence: true
    validates :inviter_id, presence: true

    belongs_to :user
end

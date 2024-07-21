class Friend < ApplicationRecord
    validates :user_id, presence: true
    validates :friend_id, presence: true
    validates :friend_name, presence: true

    belongs_to :user
end

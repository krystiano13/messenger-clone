class GroupMessage < ApplicationRecord
    validates :user_id, presence: true
    validates :group_id, presence: true
    validates :content, presence: true
    validates :username, presence: true

    belongs_to :user
    belongs_to :group
end

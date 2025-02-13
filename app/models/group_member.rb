class GroupMember < ApplicationRecord
    validates :role, presence: true
    validates :group_id, presence: true
    validates :user_id, presence: true

    belongs_to :user
    belongs_to :group
end

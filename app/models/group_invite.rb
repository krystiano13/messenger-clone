class GroupInvite < ApplicationRecord
    validates :group_id, presence: true
    validates :user_id, presence: true

    belongs_to :group
    belongs_to :user
end

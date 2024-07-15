class Message < ApplicationRecord
    validates :content, presence: true
    validates :from, presence: true
    validates :to, presence: true
end

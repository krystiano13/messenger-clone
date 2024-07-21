class CreateFriendInvites < ActiveRecord::Migration[7.1]
  def change
    create_table :friend_invites do |t|
      t.integer :user_id
      t.integer :inviter_id

      t.timestamps
    end
  end
end

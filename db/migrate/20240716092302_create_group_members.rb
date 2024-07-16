class CreateGroupMembers < ActiveRecord::Migration[7.1]
  def change
    create_table :group_members do |t|
      t.string :role
      t.integer :group_id
      t.integer :user_id

      t.timestamps
    end
  end
end

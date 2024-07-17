class CreateGroupMessages < ActiveRecord::Migration[7.1]
  def change
    create_table :group_messages do |t|
      t.string :content
      t.integer :group_id
      t.integer :user_id

      t.timestamps
    end
  end
end

class AddUsernameToGroupMessagesTable < ActiveRecord::Migration[7.1]
  def change
    add_column :group_messages, :username, :string
  end
end

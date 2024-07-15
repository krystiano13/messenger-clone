class CreateMessages < ActiveRecord::Migration[7.1]
  def change
    create_table :messages do |t|
      t.string :content
      t.string :from
      t.string :to

      t.timestamps
    end
  end
end

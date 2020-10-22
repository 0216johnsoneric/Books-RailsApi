class CreateBooks < ActiveRecord::Migration[6.0]
  def change
    create_table :books do |t|
      t.references :users, null: false, foreign_key: true
      t.string :title
      t.string :author
      t.text :summary
      t.integer :user_id
      
      t.timestamps
    end
  end
end

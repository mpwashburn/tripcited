class CreateContents < ActiveRecord::Migration
  def change
    create_table :contents do |t|
      t.string :title
      t.string :image_link
      t.text :source
      t.text :body
      t.integer :upvotes
      t.integer :downvotes

      t.timestamps null: false
    end
  end
end

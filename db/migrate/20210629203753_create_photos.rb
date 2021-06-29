class CreatePhotos < ActiveRecord::Migration[6.1]
  def change
    create_table :photos do |t|
      t.string :url
      t.string :caption
      t.integer :itinerary_id

      t.timestamps
    end
  end
end

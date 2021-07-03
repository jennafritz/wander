class CreateItineraries < ActiveRecord::Migration[6.1]
  def change
    create_table :itineraries do |t|
      t.string :name
      t.string :description
      t.string :destination
      t.string :season
      t.integer :length
      t.string :locale
      t.string :classification
      t.integer :budget
      t.integer :creator_id

      t.timestamps
    end
  end
end

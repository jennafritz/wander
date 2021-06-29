class CreateItineraries < ActiveRecord::Migration[6.1]
  def change
    create_table :itineraries do |t|
      t.string :name
      t.string :season
      t.string :length
      t.string :locale
      t.string :type
      t.integer :budget

      t.timestamps
    end
  end
end

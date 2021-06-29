class CreateDays < ActiveRecord::Migration[6.1]
  def change
    create_table :days do |t|
      t.string :name
      t.integer :number
      t.integer :itinerary_id

      t.timestamps
    end
  end
end

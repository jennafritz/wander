class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password_digest
      t.string :picture
      t.decimal :latitude
      t.decimal :longitude
      t.string :travel_season
      t.integer :travel_length
      t.string :travel_locale
      t.string :travel_classification
      t.integer :budget
      t.integer :credits
      t.boolean :premium

      t.timestamps
    end
  end
end

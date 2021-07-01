class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password_digest
      t.string :picture
      t.string :travel_season
      t.string :travel_length
      t.string :travel_locale
      t.string :travel_classification
      t.integer :budget
      t.integer :credits

      t.timestamps
    end
  end
end

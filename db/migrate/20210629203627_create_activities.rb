class CreateActivities < ActiveRecord::Migration[6.1]
  def change
    create_table :activities do |t|
      t.string :name
      t.string :info_url
      t.integer :day_id

      t.timestamps
    end
  end
end

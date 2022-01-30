class CreateTasks < ActiveRecord::Migration[6.1]
  def change
    create_table :tasks do |t|
      t.string :name
      t.text :description
      t.datetime :completed_at
      t.boolean :complete

      t.timestamps
    end
  end
end

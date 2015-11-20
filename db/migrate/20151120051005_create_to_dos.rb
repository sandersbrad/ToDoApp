class CreateToDos < ActiveRecord::Migration
  def change
    create_table :to_dos do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.date :date


      t.timestamps null: false
    end
  end
end

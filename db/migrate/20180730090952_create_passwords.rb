class CreatePasswords < ActiveRecord::Migration[5.1]
  def change
    create_table :passwords do |t|
      t.integer :userID
      t.string :password

      t.timestamps
    end
  end
end

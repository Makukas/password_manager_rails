class AddNameToPasswords < ActiveRecord::Migration[5.1]
  def change
    add_column :passwords, :name, :string
  end
end

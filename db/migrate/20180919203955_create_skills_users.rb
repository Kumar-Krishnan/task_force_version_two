class CreateSkillsUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :skills_users, id: false do |t|
      t.references :user, foreign_key: true
      t.references :skill, foreign_key: true
    end
  end
end

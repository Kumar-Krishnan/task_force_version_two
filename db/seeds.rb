# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all

bob_loblaw = User.create!(
    email: 'bob_loblaw@lawblog.com',
    password: 'blahblah',
    password_confirmation: 'blahblah'
)

george_michael = User.create!(
    email: 'george.michael@bluth.com',
    password: 'blahblah',
    password_confirmation: 'blahblah'
)

# 3.times do
#   bob_loblaw.posts.create!(
#       title: FFaker::Book.title,
#       content: FFaker::Book.description
#   )
# end

# 3.times do
#   george_michael.posts.create!(
#       title: FFaker::Book.title,
#       content: FFaker::Book.description
#   )
# end

public_speaking = Skill.create!(
    name: 'Public Speaking'
)

conflict_resolution = Skill.create!(
    name: 'Conflict Resolution'
)

group_leadership = Skill.create!(
    name: 'Group Leadership'
)
project_management = Skill.create!(
    name: 'Project Management'
)

javascript = Skill.create!(
    name: 'Javascript'
)
react = Skill.create!(
    name: 'React'
)
java = Skill.create!(
    name: 'Java'
)
my_sql = Skill.create!(
    name: 'MySQL'
)
database_management = Skill.create!(
    name: 'Database Management'
)

bob_loblaw.skills << public_speaking

bob_loblaw.skills << conflict_resolution

bob_loblaw.skills << project_management

bob_loblaw.skills << java

bob_loblaw.skills << my_sql

bob_loblaw.skills << database_management

george_michael.skills << public_speaking

george_michael.skills << conflict_resolution

george_michael.skills << project_management

george_michael.skills << javascript

george_michael.skills << react



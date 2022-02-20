# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
u = User.create({login_id: "casey", password:"I just wanna fly!"})
Task.create([
  {
    name: "Casey's Task",
    description: "A task for Casey to play with",
    complete: false,
    user_id: u.id
  },
  {
    name: 'A Completed Task',
    description: 'This task is completed',
    complete: true,
    user_id: u.id
  }
])

User.create({login_id:"brock",password:"password123"})
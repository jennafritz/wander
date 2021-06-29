# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Destroying seeds..."
Activity.destroy_all
Day.destroy_all
Itinerary.destroy_all
Photo.destroy_all
UserItinerary.destroy_all
User.destroy_all

puts "Seeding Users..."
jenna = User.create(name: "jenna", password: "admin", picture: "https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png", travel_season: "Fall", travel_length: "1 week", travel_locale: "City", travel_type: "Culture", budget: 3)

erika = User.create(name: "erika", password: "admin", picture: "https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png", travel_season: "Spring", travel_length: "2 weeks", travel_locale: "Country", travel_type: "Culture", budget: 2)
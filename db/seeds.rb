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
jenna = User.create(username: "jenna", password: "admin", picture: "https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png", travel_season: "Fall", travel_length: "1 week", travel_locale: "City", travel_classification: "Culture", budget: 3, credits: 5)

erika = User.create(username: "erika", password: "admin", picture: "https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png", travel_season: "Spring", travel_length: "2 weeks", travel_locale: "Country", travel_classification: "Culture", budget: 2, credits: 5)

puts "Seeding itineraries..."
spring_in_vegas = Itinerary.create(name: "Spring in Las Vegas, Bachelorette-Style", destination: "Las Vegas", season: "Spring", length: "4 Days", locale: "City", classification: "Adventure", budget: 3)

puts "Seeding Days..."
spring_in_vegas_day_1 = Day.create(name: "Spring in Vegas Day 1", number: 1, itinerary_id: spring_in_vegas.id)
spring_in_vegas_day_2 = Day.create(name: "Spring in Vegas Day 2", number: 2, itinerary_id: spring_in_vegas.id)
spring_in_vegas_day_3 = Day.create(name: "Spring in Vegas Day 3", number: 3, itinerary_id: spring_in_vegas.id)
spring_in_vegas_day_4 = Day.create(name: "Spring in Vegas Day 4", number: 4, itinerary_id: spring_in_vegas.id)

puts "Seeding Activities..."
Activity.create(name: "Arrive & Check In", day_id: spring_in_vegas_day_1.id)
Activity.create(name: "Lunch at Tacos n Ritas", day_id: spring_in_vegas_day_1.id)
Activity.create(name: "Dinner at Wolfgang Puck Bar & Grill", day_id: spring_in_vegas_day_1.id)
Activity.create(name: "Party at TAO Nightclub, The Venetian", day_id: spring_in_vegas_day_1.id)

Activity.create(name: "Poolside Cabana & Daybed at Bamboo Pool, Cosmopolitan Las Vegas", day_id: spring_in_vegas_day_2.id)
Activity.create(name: "Dinner at In n Out Burger", day_id: spring_in_vegas_day_2.id)
Activity.create(name: "LIGHT Vegas Nightclub, Mandalay Bay", day_id: spring_in_vegas_day_2.id)

Activity.create(name: "Brunch at Border Grill", day_id: spring_in_vegas_day_3.id)
Activity.create(name: "Pole Dancing Clas", day_id: spring_in_vegas_day_3.id)
Activity.create(name: "Dinner at Sushi Roku", day_id: spring_in_vegas_day_3.id)
Activity.create(name: "Show at Zumanity", day_id: spring_in_vegas_day_3.id)

Activity.create(name: "Room Service", day_id: spring_in_vegas_day_4.id)
Activity.create(name: "Check Out", day_id: spring_in_vegas_day_4.id)

puts "Seeding Photos..."
Photo.create(url: "https://cdn.getyourguide.com/img/location/5ffeb496e3e09.jpeg/88.jpg", caption: "Welcome to Las Vegas", itinerary_id: spring_in_vegas.id)
Photo.create(url: "https://www.fodors.com/wp-content/uploads/2019/10/ThingstoKnowLasVegas__HERO_shutterstock_708501844.jpg", caption: "The Vegas Strip", itinerary_id: spring_in_vegas.id)
Photo.create(url: "https://media-cdn.tripadvisor.com/media/photo-s/0e/26/7e/d6/bamboo-pool-at-the-cosmopolita.jpg", caption: "Poolside Cabanas at the Cosmopolitan", itinerary_id: spring_in_vegas.id)
Photo.create(url: "https://mandalaybay.mgmresorts.com/content/dam/MGM/mandalay-bay/nightlife/light/lifestyle/mandalay-bay-nightlife-light-nightclub-dance-floor.tif", caption: "Light Nightclub", itinerary_id: spring_in_vegas.id)
Photo.create(url: "https://cdn2.civitatis.com/estados-unidos/las-vegas/galeria/zumanity.jpg", caption: "Zumanity", itinerary_id: spring_in_vegas.id)

puts "Seeding UserItineraries..."
UserItinerary.create(user_id: erika.id, itinerary_id: spring_in_vegas.id)

puts "Done Seeding!"
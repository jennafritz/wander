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
fall_in_romania = Itinerary.create(name: "Fall in Romania", destination: "Romania", season: "Fall", length: "7 Days", locale: "Country", classification: "Adventure", budget: 2)

puts "Seeding Days..."
spring_in_vegas_day_1 = Day.create(name: "Spring in Vegas Day 1", number: 1, itinerary_id: spring_in_vegas.id)
spring_in_vegas_day_2 = Day.create(name: "Spring in Vegas Day 2", number: 2, itinerary_id: spring_in_vegas.id)
spring_in_vegas_day_3 = Day.create(name: "Spring in Vegas Day 3", number: 3, itinerary_id: spring_in_vegas.id)
spring_in_vegas_day_4 = Day.create(name: "Spring in Vegas Day 4", number: 4, itinerary_id: spring_in_vegas.id)

fall_in_romania_day_1 = Day.create(name: "Fall in Romania Day 1", number: 1, itinerary_id: fall_in_romania.id)
fall_in_romania_day_2 = Day.create(name: "Fall in Romania Day 2", number: 2, itinerary_id: fall_in_romania.id)
fall_in_romania_day_3 = Day.create(name: "Fall in Romania Day 3", number: 3, itinerary_id: fall_in_romania.id)
fall_in_romania_day_4 = Day.create(name: "Fall in Romania Day 4", number: 4, itinerary_id: fall_in_romania.id)
fall_in_romania_day_5 = Day.create(name: "Fall in Romania Day 5", number: 5, itinerary_id: fall_in_romania.id)
fall_in_romania_day_6 = Day.create(name: "Fall in Romania Day 6", number: 6, itinerary_id: fall_in_romania.id)
fall_in_romania_day_7 = Day.create(name: "Fall in Romania Day 7", number: 7, itinerary_id: fall_in_romania.id)
fall_in_romania_day_8 = Day.create(name: "Fall in Romania Day 8", number: 8, itinerary_id: fall_in_romania.id)


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

Activity.create(name: "Arrive in Bucharest, grab rental car and check into your AirBnB", day_id: fall_in_romania_day_1.id)
Activity.create(name: "Dinner at Caru' cu bere", day_id: fall_in_romania_day_1.id)

Activity.create(name: "Grab food for breakfast & lunch from grocery, drive towards Brasov", day_id: fall_in_romania_day_2.id)
Activity.create(name: "Drive and park at Ialomicioara Monastery and Cave, take cave tour, have lunch outside next to the stream", day_id: fall_in_romania_day_2.id)
Activity.create(name: "Travel to Busteni Cable Car, take up into Bucegi Natural Park and hike to see the Sphinx (natural rock formation)", day_id: fall_in_romania_day_2.id)
Activity.create(name: "Stop at Peles Castle in Sinaia for photo ops, shopping at local stalls and a tour (if open)", day_id: fall_in_romania_day_2.id)
Activity.create(name: "Finish drive to Brasov, check into your AirBnB", day_id: fall_in_romania_day_2.id)
Activity.create(name: "Take an evening walk around the square and small town", day_id: fall_in_romania_day_2.id)
Activity.create(name: "Dinner & drinks at Terroirs Wine Bar", day_id: fall_in_romania_day_2.id)

Activity.create(name: "Grab a quick breakfast, drive to Bran Castle. Park, grab a mulled wine, and tour the castle", day_id: fall_in_romania_day_3.id)
Activity.create(name: "Drive to Poenari Fortress, Dracula’s castle on top of the cliffs (it’s a steep hike, so wear good shoes. Also may be closed for bears)", day_id: fall_in_romania_day_3.id)
Activity.create(name: "Travel the Transfaragan Road, stopping at Balea Lake for photos (best if you arrive there right before sunset)", day_id: fall_in_romania_day_3.id)
Activity.create(name: "[Optional] On your way to Sighisoara, you’ll be traveling on very rough/rural roads. When it’s fully night, stop the car, turn off the lights and look up :)", day_id: fall_in_romania_day_3.id)
Activity.create(name: "Check into your AirBnB", day_id: fall_in_romania_day_3.id)
Activity.create(name: "Dinner at Gasthaus Altepost Restaurant Traditional", day_id: fall_in_romania_day_3.id)

Activity.create(name: "Drive to the painted monasteries, starting with Voronet Monastery, then Humor, Sucevita, and finally Moldovita", day_id: fall_in_romania_day_4.id)
Activity.create(name: "Grab lunch near one of the monasteries, and if you have time, add a couple more monasteries to your tour (there are 8 total)", day_id: fall_in_romania_day_4.id)
Activity.create(name: "Drive to and check into your AirBnB", day_id: fall_in_romania_day_4.id)
Activity.create(name: "Dinner at Pensiunea Plai cu Peri", day_id: fall_in_romania_day_4.id)

Activity.create(name: "Drive to the Merry Cemetery (pro tip: download a picture-translator so you can understand what the signs mean, or take a tour)", day_id: fall_in_romania_day_5.id)
Activity.create(name: "Drive to Cluj-Napoca", day_id: fall_in_romania_day_5.id)
Activity.create(name: "Grab a late lunch at Roata", day_id: fall_in_romania_day_5.id)
Activity.create(name: "Check into AirBnB", day_id: fall_in_romania_day_5.id)
Activity.create(name: "Take a dusk walk around the city", day_id: fall_in_romania_day_5.id)
Activity.create(name: "Book A Night Tour of Hoia Baciu Haunted Forest with Alex", day_id: fall_in_romania_day_5.id)

Activity.create(name: "Head to Corvin Castle, take an optional tour", day_id: fall_in_romania_day_6.id)
Activity.create(name: "Drive to Bigar Waterfall, stop for lunch at one of the roadside cafes. Hike up to the trails past the waterfall for some amazing photo ops!", day_id: fall_in_romania_day_6.id)
Activity.create(name: "Drive to the rock sculpture of Decebalus", day_id: fall_in_romania_day_6.id)
Activity.create(name: "Drive to Craiova", day_id: fall_in_romania_day_6.id)
Activity.create(name: "Check into AirBnb", day_id: fall_in_romania_day_6.id)
Activity.create(name: "Dinner at Iberico", day_id: fall_in_romania_day_6.id)

Activity.create(name: "Walk around Craiova, shop at the street markets", day_id: fall_in_romania_day_7.id)
Activity.create(name: "Drive towards Bucharest", day_id: fall_in_romania_day_7.id)
Activity.create(name: "Head to Snagov Monastery", day_id: fall_in_romania_day_7.id)
Activity.create(name: "Drive up to the Boldu Forest outside of Bucharest, park and walk along the path until you reach Balta Vrajitoarelor, the Witches Pond", day_id: fall_in_romania_day_7.id)
Activity.create(name: "Check into AirBnB", day_id: fall_in_romania_day_7.id)
Activity.create(name: "Dinner", day_id: fall_in_romania_day_7.id)

Activity.create(name: "Drive to the airport and head home!", day_id: fall_in_romania_day_8.id)


puts "Seeding Photos..."
Photo.create(url: "https://cdn.getyourguide.com/img/location/5ffeb496e3e09.jpeg/88.jpg", caption: "Welcome to Las Vegas", itinerary_id: spring_in_vegas.id)
Photo.create(url: "https://www.fodors.com/wp-content/uploads/2019/10/ThingstoKnowLasVegas__HERO_shutterstock_708501844.jpg", caption: "The Vegas Strip", itinerary_id: spring_in_vegas.id)
Photo.create(url: "https://media-cdn.tripadvisor.com/media/photo-s/0e/26/7e/d6/bamboo-pool-at-the-cosmopolita.jpg", caption: "Poolside Cabanas at the Cosmopolitan", itinerary_id: spring_in_vegas.id)
Photo.create(url: "https://mandalaybay.mgmresorts.com/content/dam/MGM/mandalay-bay/nightlife/light/lifestyle/mandalay-bay-nightlife-light-nightclub-dance-floor.tif", caption: "Light Nightclub", itinerary_id: spring_in_vegas.id)
Photo.create(url: "https://cdn2.civitatis.com/estados-unidos/las-vegas/galeria/zumanity.jpg", caption: "Zumanity", itinerary_id: spring_in_vegas.id)

puts "Seeding UserItineraries..."
UserItinerary.create(user_id: erika.id, itinerary_id: spring_in_vegas.id)
UserItinerary.create(user_id: erika.id, itinerary_id: fall_in_romania.id)

puts "Done Seeding!"
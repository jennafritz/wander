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

# USERS
puts "Seeding Users..."
jenna = User.create(username: "jenna", password: "admin", picture: "https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png", travel_season: "Fall", travel_length: 7, travel_locale: "City", travel_classification: "Culture", budget: 3, credits: 5)

erika = User.create(username: "erika", password: "admin", picture: "https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png", travel_season: "Spring", travel_length: 14, travel_locale: "Country", travel_classification: "Culture", budget: 2, credits: 5)



# ITINERARIES
puts "Seeding itineraries..."
spring_in_vegas = Itinerary.create(name: "Spring in Las Vegas, Bachelorette-Style", destination: "Las Vegas", season: "Spring", length: 4, locale: "City", classification: "Adventure", budget: 3, creator_id: erika.id)

fall_in_romania = Itinerary.create(name: "Fall in Romania", destination: "Romania", season: "Fall", length: 7, locale: "Country", classification: "Adventure", budget: 2, creator_id: erika.id)

winter_in_north_fork = Itinerary.create(name: "Winter in the North Fork, Winery Tour", destination: "Long Island, NY", season: "Winter", length: 3, locale: "Country", classification: "Culture", budget: 3, creator_id: erika.id)

summer_in_rome = Itinerary.create(name: "Summer in Rome", destination: "Rome", season: "Summer", length: 5, locale: "City", classification: "Culture", budget: 3, creator_id: jenna.id)



#DAYS
puts "Seeding Days..."
# Spring in Vegas Days
spring_in_vegas_day_1 = Day.create(name: "Spring in Vegas Day 1", number: 1, itinerary_id: spring_in_vegas.id)
spring_in_vegas_day_2 = Day.create(name: "Spring in Vegas Day 2", number: 2, itinerary_id: spring_in_vegas.id)
spring_in_vegas_day_3 = Day.create(name: "Spring in Vegas Day 3", number: 3, itinerary_id: spring_in_vegas.id)
spring_in_vegas_day_4 = Day.create(name: "Spring in Vegas Day 4", number: 4, itinerary_id: spring_in_vegas.id)

# Fall in Romania Days
fall_in_romania_day_1 = Day.create(name: "Fall in Romania Day 1", number: 1, itinerary_id: fall_in_romania.id)
fall_in_romania_day_2 = Day.create(name: "Fall in Romania Day 2", number: 2, itinerary_id: fall_in_romania.id)
fall_in_romania_day_3 = Day.create(name: "Fall in Romania Day 3", number: 3, itinerary_id: fall_in_romania.id)
fall_in_romania_day_4 = Day.create(name: "Fall in Romania Day 4", number: 4, itinerary_id: fall_in_romania.id)
fall_in_romania_day_5 = Day.create(name: "Fall in Romania Day 5", number: 5, itinerary_id: fall_in_romania.id)
fall_in_romania_day_6 = Day.create(name: "Fall in Romania Day 6", number: 6, itinerary_id: fall_in_romania.id)
fall_in_romania_day_7 = Day.create(name: "Fall in Romania Day 7", number: 7, itinerary_id: fall_in_romania.id)
fall_in_romania_day_8 = Day.create(name: "Fall in Romania Day 8", number: 8, itinerary_id: fall_in_romania.id)

# Winter in North Fork Days
winter_in_north_fork_day_1 = Day.create(name: "Winter in North Fork Day 1", number: 1, itinerary_id: winter_in_north_fork.id)
winter_in_north_fork_day_2 = Day.create(name: "Winter in North Fork Day 2", number: 2, itinerary_id: winter_in_north_fork.id)
winter_in_north_fork_day_3 = Day.create(name: "Winter in North Fork Day 3", number: 3, itinerary_id: winter_in_north_fork.id)

# Summer in Rome Days
summer_in_rome_day_1 = Day.create(name: "Summer in Rome Day 1", number: 1, itinerary_id: summer_in_rome.id)
summer_in_rome_day_2 = Day.create(name: "Summer in Rome Day 2", number: 2, itinerary_id: summer_in_rome.id)
summer_in_rome_day_3 = Day.create(name: "Summer in Rome Day 3", number: 3, itinerary_id: summer_in_rome.id)
summer_in_rome_day_4 = Day.create(name: "Summer in Rome Day 4", number: 4, itinerary_id: summer_in_rome.id)
summer_in_rome_day_5 = Day.create(name: "Summer in Rome Day 5", number: 5, itinerary_id: summer_in_rome.id)



# ACTIVITIES
puts "Seeding Activities..."
# Spring in Vegas Activities
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


# Fall in Romania Activities
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
Activity.create(name: "Dinner at La Bibliotecă Herăstrău", day_id: fall_in_romania_day_7.id)

Activity.create(name: "Drive to the airport and head home!", day_id: fall_in_romania_day_8.id)


# Winter in North Fork Activities
Activity.create(name: "Arrive & Check-In at the Preston House & Hotel (Riverhead, NY)", day_id: winter_in_north_fork_day_1.id)
Activity.create(name: "Dinner at the Hotel Restaurant with Live Music", day_id: winter_in_north_fork_day_1.id)
Activity.create(name: "Bowl at The All Star Bowling Alley", day_id: winter_in_north_fork_day_1.id)
Activity.create(name: "Drinks at Jerry & the Mermaid", day_id: winter_in_north_fork_day_1.id)

Activity.create(name: "Quick hotel breakfast", day_id: winter_in_north_fork_day_2.id)
Activity.create(name: "Head to Paumanok Vineyard", day_id: winter_in_north_fork_day_2.id)
Activity.create(name: "Go to Macari Vineyard (pro tip: get the charcuterie board along with your wine tasting)", day_id: winter_in_north_fork_day_2.id)
Activity.create(name: "Next, travel to Jamestown Vineyards for the last tasting of the day", day_id: winter_in_north_fork_day_2.id)
Activity.create(name: "Afternoon nap & recovery at the hotel", day_id: winter_in_north_fork_day_2.id)
Activity.create(name: "Dinner at Il Giardino", day_id: winter_in_north_fork_day_2.id)

Activity.create(name: "Hotel Check-Out", day_id: winter_in_north_fork_day_3.id)
Activity.create(name: "Drive to Greenport, NY", day_id: winter_in_north_fork_day_3.id)
Activity.create(name: "Lunch at Crabby Jerry’s", day_id: winter_in_north_fork_day_3.id)
Activity.create(name: "Walk around town (visit Village Blacksmith, walk along the water, do some shopping)", day_id: winter_in_north_fork_day_3.id)
Activity.create(name: "Drive home", day_id: winter_in_north_fork_day_3.id)

# Summer in Rome Activities
Activity.create(name: "Check into AirBnB (evening)", day_id: summer_in_rome_day_1.id)
Activity.create(name: "Walk to the water and have dinner at Baja, a boat restaurant on the Tiber River", day_id: summer_in_rome_day_1.id)

Activity.create(name: "Head to the Le Domus Romane di Palazzo Valentini for an AM tour", day_id: summer_in_rome_day_2.id)
Activity.create(name: "Walk to the Piazza del Campidoglio and Capitoline Museum", day_id: summer_in_rome_day_2.id)
Activity.create(name: "Walk around the Roman Forum, Palatine Hill, Arch of Constantine and the Colosseum", day_id: summer_in_rome_day_2.id)
Activity.create(name: "Walk to the Pantheon, then Trevi Fountain", day_id: summer_in_rome_day_2.id)
Activity.create(name: "Grab dinner near the Forum of Augustus", day_id: summer_in_rome_day_2.id)

Activity.create(name: "Leave the apartment and walk to Piazza Navona to people watch and grab a quick coffee/pastry", day_id: summer_in_rome_day_3.id)
Activity.create(name: "Walk to the Campo Dei Fiori Market", day_id: summer_in_rome_day_3.id)
Activity.create(name: "Head to St. Peter’s Square/Basilica, Vatican City for a tour of the Basilica and Sistine Chapel", day_id: summer_in_rome_day_3.id)
Activity.create(name: "Walk to and tour Castel Sant’Angelo", day_id: summer_in_rome_day_3.id)
Activity.create(name: "Walk to and tour the Museum dell’Ara Pacis", day_id: summer_in_rome_day_3.id)
Activity.create(name: "Walk to the Piazza del Popolo to take a break and people watch!", day_id: summer_in_rome_day_3.id)
Activity.create(name: "Walk through the Giardini di Villa Borghese and tour Villa Borghese", day_id: summer_in_rome_day_3.id)
Activity.create(name: "Walk to the Spanish Steps", day_id: summer_in_rome_day_3.id)
Activity.create(name: "Head back to the Colosseum for a “Moonlight Tour of the Colosseum and Ancient Rome”", day_id: summer_in_rome_day_3.id)

Activity.create(name: "Take a biking tour of the Via Appia, stopping at the various Catacombs along the way (pro tip: bring a picnic lunch!)", day_id: summer_in_rome_day_4.id)
Activity.create(name: "Head to the Baths of Caracalla, then the Circus Maximus", day_id: summer_in_rome_day_4.id)
Activity.create(name: "Book a tour of the Domus Aurea, Emperor Nero’s palace (now underground)", day_id: summer_in_rome_day_4.id)
Activity.create(name: "Walk to and tour the Palazzo Massimo alle Terme Museum, and the Baths of Diocletian", day_id: summer_in_rome_day_4.id)
Activity.create(name: "Book a tour of the Palazzo Altemps Museum", day_id: summer_in_rome_day_4.id)
Activity.create(name: "Grab dinner (and a spritz!) at Saltimbocca", day_id: summer_in_rome_day_4.id)
Activity.create(name: "Watch the nighttime “Journeys Through Ancient Rome” Light Show at the Forum of Augustus, then take a free tour of the area", day_id: summer_in_rome_day_4.id)
Activity.create(name: "Grab a gelato on your way home!", day_id: summer_in_rome_day_4.id)

Activity.create(name: "Book an early train to Pompeii, spend the day exploring the city (pro tip: book an official tour with a guide who can tell you all about the story of Pompeii, Mt. Vesuvius, etc.)", day_id: summer_in_rome_day_5.id)
Activity.create(name: "Head to Naples to tour the National Archaeological Museum", day_id: summer_in_rome_day_5.id)
Activity.create(name: "Head back to Rome for your last night", day_id: summer_in_rome_day_5.id)




# PHOTOS
puts "Seeding Photos..."
# Spring in Vegas Photos
Photo.create(url: "https://cdn.getyourguide.com/img/location/5ffeb496e3e09.jpeg/88.jpg", caption: "Welcome to Las Vegas", itinerary_id: spring_in_vegas.id)
Photo.create(url: "https://www.fodors.com/wp-content/uploads/2019/10/ThingstoKnowLasVegas__HERO_shutterstock_708501844.jpg", caption: "The Vegas Strip", itinerary_id: spring_in_vegas.id)
Photo.create(url: "https://media-cdn.tripadvisor.com/media/photo-s/0e/26/7e/d6/bamboo-pool-at-the-cosmopolita.jpg", caption: "Poolside Cabanas at the Cosmopolitan", itinerary_id: spring_in_vegas.id)
Photo.create(url: "https://mandalaybay.mgmresorts.com/content/dam/MGM/mandalay-bay/nightlife/light/lifestyle/mandalay-bay-nightlife-light-nightclub-dance-floor.tif", caption: "Light Nightclub", itinerary_id: spring_in_vegas.id)
Photo.create(url: "https://cdn2.civitatis.com/estados-unidos/las-vegas/galeria/zumanity.jpg", caption: "Zumanity", itinerary_id: spring_in_vegas.id)

# Fall in Romania Photos
Photo.create(url: "https://drive.google.com/file/d/1YJJ6wl_MYEHItgX31f1W-SdW245NU69B/view?usp=sharing", caption: "Bucharest", itinerary_id: fall_in_romania)
Photo.create(url: "https://drive.google.com/file/d/1dDWvziPmio07LOh5GCi9G0mwbp5dbzw5/view?usp=sharing", caption: "Caru cu Bere (restaurant in Bucharest)", itinerary_id: fall_in_romania)
Photo.create(url: "https://drive.google.com/file/d/1pZ1NivE0LKXc8GTzuRKrZcLprKF0bbgo/view?usp=sharing", caption: "Ialomitei Monastery and Cave", itinerary_id: fall_in_romania)
Photo.create(url: "https://drive.google.com/file/d/1-PMVNUpvv1PMBULzRbQiexsbpJZRB2ir/view?usp=sharing", caption: "Peles Castle", itinerary_id: fall_in_romania)
Photo.create(url: "https://drive.google.com/file/d/1glYToC-tVuPwYfTP-hqs-x9Babxw1daH/view?usp=sharing", caption: "Brasov", itinerary_id: fall_in_romania)
Photo.create(url: "https://drive.google.com/file/d/1TjHojwogI-_faMorxao8MM0lxzUYDSNk/view?usp=sharing", caption: "Wildlife on the Transfaragasan", itinerary_id: fall_in_romania)
Photo.create(url: "https://drive.google.com/file/d/1bj3FCfEo0p_AQcY7s4XXEm0Nk1ASOfP1/view?usp=sharing", caption: "Transfaragasan Road", itinerary_id: fall_in_romania)
Photo.create(url: "https://drive.google.com/file/d/1Swlvc9KNLvgje9PomOPfK6xbEGSTlI3h/view?usp=sharing", caption: "Painted Monastery", itinerary_id: fall_in_romania)
Photo.create(url: "https://drive.google.com/file/d/1qUbsxcISW7NTY6IV-5YExbFgzcBBMqGc/view?usp=sharing", caption: "Merry Cemetery", itinerary_id: fall_in_romania)

# Winter in North Fork Photos
Photo.create(url: "https://www.winetraveler.com/wp-content/uploads/2019/11/Paumanok-Vineyards-Visitor-Information-Winetraveler.jpg", caption: "Paumanok Vineyard", itinerary_id: winter_in_north_fork.id)
Photo.create(url: "https://jamesportwines.com/wp-content/uploads/2018/02/C57A9556.jpg", caption: "Jamestown Vineyard", itinerary_id: winter_in_north_fork.id)
Photo.create(url: "https://macariwines.com/wp-content/uploads/2016/04/Macari_Sunset-1920x1279.jpg", caption: "Macari Vineyard", itinerary_id: winter_in_north_fork.id)
Photo.create(url: "https://images.trvl-media.com/hotels/22000000/21830000/21825900/21825843/1f765cec_z.jpg", caption: "Preston House & Hotel", itinerary_id: winter_in_north_fork.id)
Photo.create(url: "https://cdn.newsday.com/polopoly_fs/1.4357897.1529942246!/httpImage/image.JPG_gen/derivatives/display_960/image.JPG", caption: "All Star Bowling", itinerary_id: winter_in_north_fork.id)
Photo.create(url: "https://i.pinimg.com/originals/ae/9b/8b/ae9b8bee97a092b5bf9a027815c784f5.png", caption: "Greenport, NY", itinerary_id: winter_in_north_fork.id)



# USER ITINERARIES
puts "Seeding UserItineraries..."
UserItinerary.create(user_id: erika.id, itinerary_id: spring_in_vegas.id)
UserItinerary.create(user_id: erika.id, itinerary_id: fall_in_romania.id)



puts "Done Seeding!"
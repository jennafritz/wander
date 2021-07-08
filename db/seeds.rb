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
jenna = User.create(username: "jenna", password: "admin", picture: "https://image.freepik.com/free-photo/scenic-view-sunrise-mountains-carpathian-ukraine_146671-19541.jpg", latitude: 40.24546575735813, longitude: -74.84552948589332, travel_season: "Fall", travel_length: 7, travel_locale: "City", travel_classification: "Culture", budget: 3, credits: 5, premium: false)

erika = User.create(username: "erika", password: "admin", picture: "https://image.freepik.com/free-photo/scenic-view-sunrise-mountains-carpathian-ukraine_146671-19541.jpg", latitude: 40.784464408532635, longitude: -73.97770002620597, travel_season: "Spring", travel_length: 14, travel_locale: "Country", travel_classification: "Culture", budget: 2, credits: 5, premium: true)



# ITINERARIES
puts "Seeding itineraries..."
spring_in_vegas = Itinerary.create(name: "Spring in Las Vegas, Bachelorette-Style", description: "Grab your girls and head to Sin City for a bride-to-be’s last “single” hurrah before the big day!", destination: "Las Vegas, NV", latitude: 36.17925305657712, longitude: -115.21620882843669, season: "Spring", length: 4, locale: "City", classification: "Adventure", budget: 3, creator_id: erika.id)

fall_in_romania = Itinerary.create(name: "Fall in Romania", description: "Take a roadtrip through scenic, wild Romania, discovering the natural beauty, wildlife, picturesque towns, delicious food, and more.", destination: "Romania", latitude: 45.835819690528425, longitude: 24.886283519854103, season: "Fall", length: 7, locale: "Country", classification: "Adventure", budget: 2, creator_id: erika.id)

winter_in_north_fork = Itinerary.create(name: "Winter in the North Fork, Winery Tour", description: "Pack your weekender bag and head to the North Fork for a few days filled with good food, great wine, and even better company!", destination: "Long Island, NY", latitude: 40.84244279187335, longitude: -73.12775341714618, season: "Winter", length: 3, locale: "Country", classification: "Culture", budget: 3, creator_id: erika.id)

summer_in_rome = Itinerary.create(name: "Summer in Rome", description: "Wear comfortable shoes and pack snacks and a water bottle, because you’re about to take a whirlwind tour through the beautiful, historic city of Rome! Pro tip: Pick up a Roma Pass to book some free and/or discounted activities", destination: "Rome, Italy", latitude: 41.90272717712334, longitude: 12.495686573695641, season: "Summer", length: 5, locale: "City", classification: "Culture", budget: 3, creator_id: jenna.id)

summer_in_boston = Itinerary.create(name: "Summer in Boston", description: "Take a trip to Boston, one of the oldest cities in America, for an activity-filled weekend with something for everyone!", destination: "Boston, MA", latitude: 42.35944883944112, longitude: -71.06079053334052, season: "Summer", length: 4, locale: "City", classification: "Culture", budget: 2, creator_id: erika.id)

summer_in_london = Itinerary.create(name: "Summer in London", description: "London’s calling! Take a tour through the capital of England, taking in the sights on a double decker bus, experiencing Shakespeare, checking in on the royal family, and more.", destination: "London, England", latitude: 51.50743439959798, longitude: -0.1273042971987896, season: "Summer", length: 5, locale: "City", classification: "Culture", budget: 3, creator_id: jenna.id)

winter_in_newport = Itinerary.create(name: "Winter in Newport", description: "Take an off-season long weekend trip to Newport, Rhode Island, taking advantage of lower prices (and fewer tourists!) while still enjoying the stunning mansions, amazing views, and incredible food.", destination: "Newport, RI", latitude: 41.489962510550725, longitude: -71.31296438562647, season: "Winter", length: 4, locale: "City", classification: "Culture", budget: 2, creator_id: erika.id)

spring_in_philadelphia = Itinerary.create(name: "Spring in Philadelphia", description: "Experience the rich history of the Founding Fathers, the best Philly Cheesesteak, outdoor beauty, and more with a quick weekend trip to Philadelphia!", destination: "Philadelphia, PA", latitude: 39.950773743154755, longitude: -75.16916244215179, season: "Spring", length: 3, locale: "City", classification: "Culture", budget: 2, creator_id: erika.id)

winter_in_brooklyn = Itinerary.create(name: "Winter in Brooklyn", description: "Spend a couple days in Williamsburg, enjoying a hotel with a rooftop (amazing views of Manhattan), ice skating, great food, and some late-night fun.", destination: "Brooklyn, NY", latitude: 40.67758753448411, longitude: -73.948028468185, season: "Winter", length: 3, locale: "City", classification: "Culture", budget: 3, creator_id: erika.id)



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

# Summer in Boston Days
summer_in_boston_day_1 = Day.create(name: "Summer in Boston Day 1", number: 1, itinerary_id: summer_in_boston.id)
summer_in_boston_day_2 = Day.create(name: "Summer in Boston Day 2", number: 2, itinerary_id: summer_in_boston.id)
summer_in_boston_day_3 = Day.create(name: "Summer in Boston Day 3", number: 3, itinerary_id: summer_in_boston.id)
summer_in_boston_day_4 = Day.create(name: "Summer in Boston Day 4", number: 4, itinerary_id: summer_in_boston.id)

# Summer in London Days
summer_in_london_day_1 = Day.create(name: "Summer in London Day 1", number: 1, itinerary_id: summer_in_london.id)
summer_in_london_day_2 = Day.create(name: "Summer in London Day 2", number: 2, itinerary_id: summer_in_london.id)
summer_in_london_day_3 = Day.create(name: "Summer in London Day 3", number: 3, itinerary_id: summer_in_london.id)
summer_in_london_day_4 = Day.create(name: "Summer in London Day 4", number: 4, itinerary_id: summer_in_london.id)
summer_in_london_day_5 = Day.create(name: "Summer in London Day 5", number: 5, itinerary_id: summer_in_london.id)

# Winter in Newport
winter_in_newport_day_1 = Day.create(name: "Winter in Newport Day 1", number: 1, itinerary_id: winter_in_newport.id)
winter_in_newport_day_2 = Day.create(name: "Winter in Newport Day 2", number: 2, itinerary_id: winter_in_newport.id)
winter_in_newport_day_3 = Day.create(name: "Winter in Newport Day 3", number: 3, itinerary_id: winter_in_newport.id)
winter_in_newport_day_4 = Day.create(name: "Winter in Newport Day 4", number: 4, itinerary_id: winter_in_newport.id)

#Spring in Philadelphia Days
spring_in_philadelphia_day_1 = Day.create(name: "Spring in Philadelphia Day 1", number: 1, itinerary_id: spring_in_philadelphia.id)
spring_in_philadelphia_day_2 = Day.create(name: "Spring in Philadelphia Day 2", number: 2, itinerary_id: spring_in_philadelphia.id)
spring_in_philadelphia_day_3 = Day.create(name: "Spring in Philadelphia Day 3", number: 3, itinerary_id: spring_in_philadelphia.id)

#Winter in Brooklyn Days
winter_in_brooklyn_day_1 = Day.create(name: "Winter in Brooklyn Day 1", number: 1, itinerary_id: winter_in_brooklyn.id)
winter_in_brooklyn_day_2 = Day.create(name: "Winter in Brooklyn Day 2", number: 2, itinerary_id: winter_in_brooklyn.id)
winter_in_brooklyn_day_3 = Day.create(name: "Winter in Brooklyn Day 3", number: 3, itinerary_id: winter_in_brooklyn.id)



# ACTIVITIES
puts "Seeding Activities..."
# Spring in Vegas Activities
Activity.create(name: "Arrive & Check In", number: 1, info_url: "", day_id: spring_in_vegas_day_1.id)
Activity.create(name: "Lunch at Tacos n Ritas", number: 2, info_url: "https://www.tripadvisor.com/Restaurant_Review-g45963-d6509670-Reviews-Tacos_N_Ritas-Las_Vegas_Nevada.html", day_id: spring_in_vegas_day_1.id)
Activity.create(name: "Dinner at Wolfgang Puck Bar & Grill", number: 3, info_url: "https://wolfgangpuck.com/dining/wolfgang-puck-bar-and-grill-las-vegas/", day_id: spring_in_vegas_day_1.id)
Activity.create(name: "Party at TAO Nightclub, The Venetian", number: 4, info_url: "https://www.venetian.com/nightlife/tao.html", day_id: spring_in_vegas_day_1.id)

Activity.create(name: "Poolside Cabana & Daybed at Bamboo Pool, Cosmopolitan Las Vegas", number: 1, info_url: "https://www.cosmopolitanlasvegas.com/resort/pools", day_id: spring_in_vegas_day_2.id)
Activity.create(name: "Dinner at In n Out Burger", number: 2, info_url: "", day_id: spring_in_vegas_day_2.id)
Activity.create(name: "LIGHT Vegas Nightclub, Mandalay Bay", number: 3, info_url: "https://thelightvegas.com/", day_id: spring_in_vegas_day_2.id)

Activity.create(name: "Brunch at Border Grill", number: 1, info_url: "https://www.bordergrill.com/location/border-grill-mandalay-bay/", day_id: spring_in_vegas_day_3.id)
Activity.create(name: "Pole Dancing Clas", number: 2, info_url: "https://www.polefitnessstudio.com/", day_id: spring_in_vegas_day_3.id)
Activity.create(name: "Dinner at Sushi Roku", number: 3, info_url: "https://www.sushiroku.com/locations/las-vegas", day_id: spring_in_vegas_day_3.id)
Activity.create(name: "Show at Mystère", number: 4, info_url: "https://treasureisland.com/shows/2/mystere-by-cirque-du-soleil", day_id: spring_in_vegas_day_3.id)

Activity.create(name: "Room Service", number: 1, info_url: "", day_id: spring_in_vegas_day_4.id)
Activity.create(name: "Check Out", number: 2, info_url: "", day_id: spring_in_vegas_day_4.id)


# Fall in Romania Activities
Activity.create(name: "Arrive in Bucharest, grab rental car and check into your AirBnB", number: 1, info_url: "https://en.wikipedia.org/wiki/Bucharest", day_id: fall_in_romania_day_1.id)
Activity.create(name: "Dinner at Caru' cu bere", number: 2, info_url: "https://www.carucubere.ro/en/", day_id: fall_in_romania_day_1.id)

Activity.create(name: "Grab food for breakfast & lunch from grocery, drive towards Brasov", number: 1, info_url: "https://en.wikipedia.org/wiki/Bra%C8%99ov", day_id: fall_in_romania_day_2.id)
Activity.create(name: "Drive and park at Ialomicioara Monastery and Cave, take cave tour, have lunch outside next to the stream", number: 2, info_url: "http://www.uvisitromania.com/tourist-attractions/prahova/ialomitei-cave-id84", day_id: fall_in_romania_day_2.id)
Activity.create(name: "[Optional] Travel to Busteni Cable Car, take up into Bucegi Natural Park and hike to see the Sphinx (natural rock formation)", number: 3, info_url: "https://en.wikipedia.org/wiki/Sphinx_(Romania)", day_id: fall_in_romania_day_2.id)
Activity.create(name: "Stop at Peles Castle in Sinaia for photo ops, shopping at local stalls and a tour (if open)", number: 4, info_url: "https://en.wikipedia.org/wiki/Pele%C8%99_Castle", day_id: fall_in_romania_day_2.id)
Activity.create(name: "Finish drive to Brasov, check into your AirBnB", number: 5, info_url: "", day_id: fall_in_romania_day_2.id)
Activity.create(name: "Take an evening walk around the square and small town", number: 6, info_url: "", day_id: fall_in_romania_day_2.id)
Activity.create(name: "Dinner & drinks at Terroirs Boutique du Vin", number: 7, info_url: "https://www.tripadvisor.com/Restaurant_Review-g295394-d4818409-Reviews-Terroirs_Boutique_du_Vin-Brasov_Brasov_County_Central_Romania_Transylvania.html", day_id: fall_in_romania_day_2.id)

Activity.create(name: "Grab a quick breakfast, drive to Bran Castle. Park, grab a mulled wine, and tour the castle", number: 1, info_url: "http://www.bran-castle.com/", day_id: fall_in_romania_day_3.id)
Activity.create(name: "Drive to Poenari Fortress, Dracula’s castle on top of the cliffs (it’s a steep hike, so wear good shoes; also may be closed for bears)", number: 2, info_url: "https://en.wikipedia.org/wiki/Poenari_Castle", day_id: fall_in_romania_day_3.id)
Activity.create(name: "Travel the Transfaragan Road, stopping at Balea Lake for photos (best if you arrive there right before sunset)", number: 3, info_url: "https://www.inyourpocket.com/bucharest/The-Transfagarasan-Highway_55534f", day_id: fall_in_romania_day_3.id)
Activity.create(name: "[Optional] On your way to Sighisoara, you’ll be traveling on very rough/rural roads. When it’s fully night, stop the car, turn off the lights and look up :)", number: 4, info_url: "https://en.wikipedia.org/wiki/Sighi%C8%99oara", day_id: fall_in_romania_day_3.id)
Activity.create(name: "Check into your AirBnB", number: 4, info_url: "", day_id: fall_in_romania_day_3.id)
Activity.create(name: "Dinner at Gasthaus Altepost Restaurant Traditional", number: 5, info_url: "https://www.gasthaus-altepost.ro/", day_id: fall_in_romania_day_3.id)

Activity.create(name: "Drive to the painted monasteries, starting with Voronet Monastery, then Humor, Sucevita, and finally Moldovita", number: 1, info_url: "http://romaniatourism.com/painted-monasteries.html", day_id: fall_in_romania_day_4.id)
Activity.create(name: "Grab lunch near one of the monasteries, and if you have time, add a couple more monasteries to your tour (there are 8 total)", number: 2, info_url: "", day_id: fall_in_romania_day_4.id)
Activity.create(name: "Drive to and check into your AirBnB", number: 3, info_url: "", day_id: fall_in_romania_day_4.id)
Activity.create(name: "Dinner at Pensiunea Plai cu Peri", number: 4, info_url: "https://plaicuperi.ro/", day_id: fall_in_romania_day_4.id)

Activity.create(name: "Drive to the Merry Cemetery (pro tip: download a picture-translator so you can understand what the signs mean, or take a tour)", number: 1, info_url: "https://en.wikipedia.org/wiki/Merry_Cemetery", day_id: fall_in_romania_day_5.id)
Activity.create(name: "Drive to Cluj-Napoca", number: 2, info_url: "https://en.wikipedia.org/wiki/Cluj-Napoca", day_id: fall_in_romania_day_5.id)
Activity.create(name: "Grab a late lunch at Roata", number: 3, info_url: "https://www.tripadvisor.com/Restaurant_Review-g298474-d739946-Reviews-Roata-Cluj_Napoca_Cluj_County_Northwest_Romania_Transylvania.html", day_id: fall_in_romania_day_5.id)
Activity.create(name: "Check into AirBnB", number: 4, info_url: "", day_id: fall_in_romania_day_5.id)
Activity.create(name: "Take a dusk walk around the city", number: 5, info_url: "", day_id: fall_in_romania_day_5.id)
Activity.create(name: "Book A Night Tour of Hoia Baciu Haunted Forest with Alex", number: 6, info_url: "https://www.romanianfriend.com/tours/haunted-forest-romania-tour", day_id: fall_in_romania_day_5.id)

Activity.create(name: "Head to Corvin Castle, take an optional tour", number: 1, info_url: "https://en.wikipedia.org/wiki/Corvin_Castle", day_id: fall_in_romania_day_6.id)
Activity.create(name: "Drive to Bigar Waterfall, stop for lunch at one of the roadside cafes. Hike up to the trails past the waterfall for some amazing photo ops!", number: 2, info_url: "https://en.wikipedia.org/wiki/Izvorul_Big%C4%83r", day_id: fall_in_romania_day_6.id)
Activity.create(name: "Drive to the rock sculpture of Decebalus", number: 3, info_url: "https://en.wikipedia.org/wiki/Rock_sculpture_of_Decebalus", day_id: fall_in_romania_day_6.id)
Activity.create(name: "Drive to Craiova", number: 4, info_url: "https://en.wikipedia.org/wiki/Craiova", day_id: fall_in_romania_day_6.id)
Activity.create(name: "Check into AirBnb", number: 5, info_url: "", day_id: fall_in_romania_day_6.id)
Activity.create(name: "Dinner at Iberico", number: 6, info_url: "https://www.tripadvisor.com/Restaurant_Review-g652095-d10839679-Reviews-Iberico-Craiova_Dolj_County_Southwest_Romania.html", day_id: fall_in_romania_day_6.id)

Activity.create(name: "Walk around Craiova, shop at the street markets", number: 1, info_url: "", day_id: fall_in_romania_day_7.id)
Activity.create(name: "Drive towards Bucharest", number: 2, info_url: "", day_id: fall_in_romania_day_7.id)
Activity.create(name: "Head to Snagov Monastery", number: 3, info_url: "https://www.tripadvisor.com/Attraction_Review-g1675686-d519602-Reviews-Snagov_Monastery-Snagov_Ilfov_County_Southern_Romania.html", day_id: fall_in_romania_day_7.id)
Activity.create(name: "Drive up to the Boldu Forest outside of Bucharest, park and take a walk, stopping at Balta Vrajitoarelor, the Witches Pond", number: 4, info_url: "https://amyscrypt.com/witches-pond-bucharest-romania/", day_id: fall_in_romania_day_7.id)
Activity.create(name: "Check into AirBnB", number: 5, info_url: "", day_id: fall_in_romania_day_7.id)
Activity.create(name: "Dinner at La Bibliotecă Herăstrău", number: 6, info_url: "https://www.tripadvisor.com/Restaurant_Review-g294458-d14918958-Reviews-La_Biblioteca_Herastrau-Bucharest.html", day_id: fall_in_romania_day_7.id)

Activity.create(name: "Drive to the airport and head home!", number: 1, info_url: "", day_id: fall_in_romania_day_8.id)


# Winter in North Fork Activities
Activity.create(name: "Arrive & Check-In at the Preston House & Hotel (Riverhead, NY)", number: 1, info_url: "https://theprestonhouseandhotel.com/", day_id: winter_in_north_fork_day_1.id)
Activity.create(name: "Dinner at the Hotel Restaurant with Live Music", number: 2, info_url: "", day_id: winter_in_north_fork_day_1.id)
Activity.create(name: "Bowl at The All Star Bowling Alley", number: 3, info_url: "https://www.theallstar.com/", day_id: winter_in_north_fork_day_1.id)
Activity.create(name: "Drinks at Jerry & the Mermaid", number: 4, info_url: "https://jerryandthemermaid.com/", day_id: winter_in_north_fork_day_1.id)

Activity.create(name: "Quick hotel breakfast", number: 1, info_url: "", day_id: winter_in_north_fork_day_2.id)
Activity.create(name: "Head to Paumanok Vineyard", number: 2, info_url: "https://www.exploretock.com/paumanok/", day_id: winter_in_north_fork_day_2.id)
Activity.create(name: "Go to Macari Vineyard (pro tip: get the charcuterie board along with your wine tasting)", number: 3, info_url: "https://www.exploretock.com/macariwines/", day_id: winter_in_north_fork_day_2.id)
Activity.create(name: "Next, travel to Jamestown Vineyards for the last tasting of the day", number: 4, info_url: "https://www.exploretock.com/jamesportvineyard/", day_id: winter_in_north_fork_day_2.id)
Activity.create(name: "Afternoon nap & recovery at the hotel", number: 5, info_url: "", day_id: winter_in_north_fork_day_2.id)
Activity.create(name: "Dinner at Il Giardino", number: 6, info_url: "https://www.ilgiardinoaquebogue.com/", day_id: winter_in_north_fork_day_2.id)

Activity.create(name: "Hotel Check-Out", number: 1, info_url: "", day_id: winter_in_north_fork_day_3.id)
Activity.create(name: "Drive to Greenport, NY", number: 2, info_url: "https://www.greenportvillage.com/", day_id: winter_in_north_fork_day_3.id)
Activity.create(name: "Lunch at Crabby Jerry’s", number: 3, info_url: "https://claudios.com/crabby-jerrys/", day_id: winter_in_north_fork_day_3.id)
Activity.create(name: "Walk around town (visit Village Blacksmith, walk along the water, do some shopping)", number: 4, info_url: "https://www.eastendseaport.org/village-blacksmith-shop", day_id: winter_in_north_fork_day_3.id)
Activity.create(name: "Drive home", number: 5, info_url: "", day_id: winter_in_north_fork_day_3.id)


# Summer in Rome Activities
Activity.create(name: "Check into AirBnB (evening)", number: 1, info_url: "", day_id: summer_in_rome_day_1.id)
Activity.create(name: "Walk to the water and have dinner at Baja, a boat restaurant on the Tiber River", number: 2, info_url: "https://www.tripadvisor.com/Restaurant_Review-g187791-d4154025-Reviews-Baja-Rome_Lazio.html", day_id: summer_in_rome_day_1.id)

Activity.create(name: "Head to the Le Domus Romane di Palazzo Valentini for an AM tour", number: 1, info_url: "https://www.tosc.it/artist/ingresso-palazzo-valentini/#fragment-2", day_id: summer_in_rome_day_2.id)
Activity.create(name: "Walk to the Piazza del Campidoglio and Capitoline Museum", number: 2, info_url: "", day_id: summer_in_rome_day_2.id)
Activity.create(name: "Walk around the Roman Forum, Palatine Hill, Arch of Constantine and the Colosseum", number: 3, info_url: "", day_id: summer_in_rome_day_2.id)
Activity.create(name: "Walk to the Pantheon, then Trevi Fountain", number: 4, info_url: "", day_id: summer_in_rome_day_2.id)
Activity.create(name: "Grab dinner near the Forum of Augustus", number: 5, info_url: "", day_id: summer_in_rome_day_2.id)

Activity.create(name: "Leave the apartment and walk to Piazza Navona to people watch and grab a quick coffee/pastry", number: 1, info_url: "", day_id: summer_in_rome_day_3.id)
Activity.create(name: "Walk to the Campo Dei Fiori Market", number: 2, info_url: "", day_id: summer_in_rome_day_3.id)
Activity.create(name: "Head to St. Peter’s Square/Basilica, Vatican City for a tour of the Basilica and Sistine Chapel", number: 3, info_url: "", day_id: summer_in_rome_day_3.id)
Activity.create(name: "Walk to and tour Castel Sant’Angelo", number: 4, info_url: "", day_id: summer_in_rome_day_3.id)
Activity.create(name: "Walk to and tour the Museum dell’Ara Pacis", number: 5, info_url: "", day_id: summer_in_rome_day_3.id)
Activity.create(name: "Walk to the Piazza del Popolo to take a break and people watch!", number: 6, info_url: "", day_id: summer_in_rome_day_3.id)
Activity.create(name: "Walk through the Giardini di Villa Borghese and tour Villa Borghese", number: 7, info_url: "", day_id: summer_in_rome_day_3.id)
Activity.create(name: "Walk to the Spanish Steps", number: 8, info_url: "", day_id: summer_in_rome_day_3.id)
Activity.create(name: "Head back to the Colosseum for a “Moonlight Tour of the Colosseum and Ancient Rome”", number: 9, info_url: "", day_id: summer_in_rome_day_3.id)

Activity.create(name: "Take a biking tour of the Via Appia, stopping at the various Catacombs along the way (pro tip: bring a picnic lunch!)", number: 1, info_url: "", day_id: summer_in_rome_day_4.id)
Activity.create(name: "Head to the Baths of Caracalla, then the Circus Maximus", number: 2, info_url: "", day_id: summer_in_rome_day_4.id)
Activity.create(name: "Book a tour of the Domus Aurea, Emperor Nero’s palace (now underground)", number: 3, info_url: "", day_id: summer_in_rome_day_4.id)
Activity.create(name: "Walk to and tour the Palazzo Massimo alle Terme Museum, and the Baths of Diocletian", number: 4, info_url: "", day_id: summer_in_rome_day_4.id)
Activity.create(name: "Book a tour of the Palazzo Altemps Museum", number: 5, info_url: "", day_id: summer_in_rome_day_4.id)
Activity.create(name: "Grab dinner (and a spritz!) at Saltimbocca", number: 6, info_url: "", day_id: summer_in_rome_day_4.id)
Activity.create(name: "Watch the nighttime “Journeys Through Ancient Rome” Light Show at the Forum of Augustus, then take a free tour of the area", number: 7, info_url: "", day_id: summer_in_rome_day_4.id)
Activity.create(name: "Grab a gelato on your way home!", number: 8, info_url: "", day_id: summer_in_rome_day_4.id)

Activity.create(name: "Book an early train to Pompeii, spend the day exploring the city (pro tip: book an official tour with a guide who can tell you all about the story of Pompeii, Mt. Vesuvius, etc.)", number: 1, info_url: "", day_id: summer_in_rome_day_5.id)
Activity.create(name: "Head to Naples to tour the National Archaeological Museum", number: 2, info_url: "", day_id: summer_in_rome_day_5.id)
Activity.create(name: "Head back to Rome for your last night", number: 3, info_url: "", day_id: summer_in_rome_day_5.id)


# Summer in Boston Activities
Activity.create(name: "Check into AC Hotel Boston", number: 1, info_url: "https://www.marriott.com/hotels/travel/boscd-ac-hotel-boston-downtown/", day_id: summer_in_boston_day_1.id)
Activity.create(name: "Walk over to the Boston Public Garden, walk around, then walk down Beacon Street", number: 2, info_url: "https://www.boston.gov/parks/public-garden", day_id: summer_in_boston_day_1.id)
Activity.create(name: "Book a tour of the Isabella Stewart Gardner Museum", number: 3, info_url: "https://www.gardnermuseum.org/", day_id: summer_in_boston_day_1.id)
Activity.create(name: "Catch an evening Red Sox game at Fenway Park", number: 4, info_url: "https://www.mlb.com/redsox", day_id: summer_in_boston_day_1.id)

Activity.create(name: "Book 9AM New England Aquarium Whale Watch (pro tip: bring non-drowsy dramamine and a jacket - the boats go far out into the ocean so it can get choppy and cold!)", number: 1, info_url: "https://www.neaq.org/exhibits/whale-watch/", day_id: summer_in_boston_day_2.id)
Activity.create(name: "Head over to Quincy Market for food, shopping, and great people-watching", number: 2, info_url: "https://www.quincy-market.com/", day_id: summer_in_boston_day_2.id)
Activity.create(name: "Take a self-guided (or professional) tour of historical Boston", number: 3, info_url: "https://www.bostonsightseeingtours.com/", day_id: summer_in_boston_day_2.id)
Activity.create(name: "Have dinner at Strega Italiano Seaport", number: 4, info_url: "https://stregaitaliano.com/locations/seaport/", day_id: summer_in_boston_day_2.id)
Activity.create(name: "Visit the hotel bar and meet the best bartender, Dennis!", number: 5, info_url: "", day_id: summer_in_boston_day_2.id)

Activity.create(name: "Brunch at Publico Street Bistro & Garden", number: 1, info_url: "http://publicoboston.com/", day_id: summer_in_boston_day_3.id)
Activity.create(name: "Visit the New England Aquarium", number: 2, info_url: "https://www.neaq.org/", day_id: summer_in_boston_day_3.id)
Activity.create(name: "Grab dinner and drinks at Yvonne’s", number: 3, info_url: "https://www.yvonnesboston.com/", day_id: summer_in_boston_day_3.id)

Activity.create(name: "Grab breakfast at the hotel", number: 1, info_url: "", day_id: summer_in_boston_day_4.id)
Activity.create(name: "Check out and head home", number: 2, info_url: "", day_id: summer_in_boston_day_4.id)


# Summer in London Activities
Activity.create(name: "Check into AirBnB", number: 1, info_url: "", day_id: summer_in_london_day_1.id)
Activity.create(name: "Grab dinner near the West End, then see a play/show", number: 2, info_url: "https://officiallondontheatre.com/london-west-end-guide/", day_id: summer_in_london_day_1.id)

Activity.create(name: "Have breakfast near the British Museum", number: 1, info_url: "", day_id: summer_in_london_day_2.id)
Activity.create(name: "Tour the British Museum", number: 2, info_url: "https://www.britishmuseum.org/", day_id: summer_in_london_day_2.id)
Activity.create(name: "Have high tea at Fortum & Mason", number: 3, info_url: "https://www.fortnumandmason.com/", day_id: summer_in_london_day_2.id)
Activity.create(name: "Tour the National Gallery", number: 4, info_url: "https://www.nationalgallery.org.uk/", day_id: summer_in_london_day_2.id)
Activity.create(name: "Walk through Trafalgar Square", number: 5, info_url: "https://en.wikipedia.org/wiki/Trafalgar_Square", day_id: summer_in_london_day_2.id)
Activity.create(name: "Walk around Piccadilly Circus", number: 6, info_url: "https://en.wikipedia.org/wiki/Piccadilly_Circus", day_id: summer_in_london_day_2.id)
Activity.create(name: "Have dinner at Covent Garden", number: 7, info_url: "https://www.coventgarden.london/", day_id: summer_in_london_day_2.id)

Activity.create(name: "Visit the Tower of London", number: 1, info_url: "https://www.hrp.org.uk/tower-of-london/#gs.56bj7s", day_id: summer_in_london_day_3.id)
Activity.create(name: "Take a tour of Shakespeare’s Globe", number: 2, info_url: "https://www.shakespearesglobe.com/", day_id: summer_in_london_day_3.id)
Activity.create(name: "Visit St. Paul’s Cathedral", number: 3, info_url: "https://www.stpauls.co.uk/", day_id: summer_in_london_day_3.id)
Activity.create(name: "Do the London Bridge Experience", number: 4, info_url: "https://www.thelondonbridgeexperience.com/", day_id: summer_in_london_day_3.id)
Activity.create(name: "Walk across the Tower Bridge, then go up to the top for the Tower Bridge Experience", number: 5, info_url: "https://www.towerbridge.org.uk/", day_id: summer_in_london_day_3.id)
Activity.create(name: "See an opera at the Royal Opera House", number: 6, info_url: "https://www.roh.org.uk/", day_id: summer_in_london_day_3.id)

Activity.create(name: "Visit and tour Westminster Abbey", number: 1, info_url: "https://www.westminster-abbey.org/", day_id: summer_in_london_day_4.id)
Activity.create(name: "Head to the Banqueting House", number: 2, info_url: "https://www.hrp.org.uk/banqueting-house/", day_id: summer_in_london_day_4.id)
Activity.create(name: "Walk through St. James’s Park", number: 3, info_url: "https://en.wikipedia.org/wiki/St_James%27s_Park", day_id: summer_in_london_day_4.id)
Activity.create(name: "Tour the Churchill War Rooms", number: 4, info_url: "https://www.iwm.org.uk/visits/churchill-war-rooms", day_id: summer_in_london_day_4.id)
Activity.create(name: "Walk by Big Ben and the Houses of Parliament", number: 5, info_url: "https://www.parliament.uk/about/living-heritage/building/palace/big-ben/", day_id: summer_in_london_day_4.id)
Activity.create(name: "Reserve and go to The London Dungeon", number: 6, info_url: "https://www.thedungeons.com/london/", day_id: summer_in_london_day_4.id)
Activity.create(name: "Visit the London Eye for a bird’s eye view of London", number: 7, info_url: "https://www.londoneye.com/", day_id: summer_in_london_day_4.id)
Activity.create(name: "Have dinner at Pierre Victoire Bistro", number: 8, info_url: "http://www.pierrevictoire.com/london/restaurant/", day_id: summer_in_london_day_4.id)

Activity.create(name: "Visit Buckingham Palace (pro tip: try to time it so you can see the changing of the guards!)", number: 1, info_url: "https://www.royal.uk/royal-residences-buckingham-palace", day_id: summer_in_london_day_5.id)
Activity.create(name: "Walk through the Green Park and Hyde Park", number: 2, info_url: "https://en.wikipedia.org/wiki/Green_Park", day_id: summer_in_london_day_5.id)
Activity.create(name: "Walk by Wellington Arch", number: 3, info_url: "https://www.english-heritage.org.uk/visit/places/wellington-arch/", day_id: summer_in_london_day_5.id)
Activity.create(name: "Visit and tour Kensington Palace", number: 4, info_url: "https://www.hrp.org.uk/kensington-palace/", day_id: summer_in_london_day_5.id)
Activity.create(name: "Tour the Victoria & Albert Museum", number: 5, info_url: "https://www.vam.ac.uk/", day_id: summer_in_london_day_5.id)
Activity.create(name: "Spend your last afternoon (and some $$!) at Harrod’s", number: 6, info_url: "https://www.harrods.com/", day_id: summer_in_london_day_5.id)


# Winter in Newport Activities
Activity.create(name: "Check into the Hotel Viking", number: 1, info_url: "https://www.hotelviking.com/", day_id: winter_in_newport_day_1.id)
Activity.create(name: "Grab drinks in front of the fire at Forty 1° North", number: 2, info_url: "https://www.41north.com/", day_id: winter_in_newport_day_1.id)
Activity.create(name: "Dinner at Vieste", number: 3, info_url: "https://viestesimplyitalian.com/", day_id: winter_in_newport_day_1.id)

Activity.create(name: "Have breakfast at Corner Cafe", number: 1, info_url: "http://www.cornercafenewport.com/", day_id: winter_in_newport_day_2.id)
Activity.create(name: "Book tickets to see the Newport Mansions", number: 2, info_url: "https://www.newportmansions.org/plan-a-visit/buy-tickets-memberships", day_id: winter_in_newport_day_2.id)
Activity.create(name: "Have dinner and drinks at White Horse Tavern", number: 3, info_url: "https://whitehorsenewport.com/", day_id: winter_in_newport_day_2.id)
Activity.create(name: "Head to Ryan Family Amusements for some old-fashioned arcade games", number: 4, info_url: "https://ryanfamily.com/", day_id: winter_in_newport_day_2.id)

Activity.create(name: "Have BYOB brunch at CRU Cafe", number: 1, info_url: "http://www.crucafenewport.com/", day_id: winter_in_newport_day_3.id)
Activity.create(name: "Visit the Newport Public Library", number: 2, info_url: "https://newportlibraryri.org/", day_id: winter_in_newport_day_3.id)
Activity.create(name: "Have a late lunch at Gurney’s", number: 3, info_url: "https://www.gurneysresorts.com/newport", day_id: winter_in_newport_day_3.id)
Activity.create(name: "Book a Seal Watch Tour", number: 4, info_url: "https://www.savebay.org/family-fun/seals/", day_id: winter_in_newport_day_3.id)
Activity.create(name: "[Alternative to Seal Watch] Head out to Simmons Farm for a goat hike", number: 4, info_url: "http://simmonsorganicfarmri.com/", day_id: winter_in_newport_day_3.id)
Activity.create(name: "Recover from the cold with a visit to the Hot Chocolate Bar at The Chanler at Cliff Walk", number: 5, info_url: "https://www.thechanler.com/", day_id: winter_in_newport_day_1.id)

Activity.create(name: "Have breakfast at the hotel restaurant, One Bellevue", number: 1, info_url: "https://www.hotelviking.com/dining/one-bellevue/", day_id: winter_in_newport_day_4.id)
Activity.create(name: "Check out", number: 2, info_url: "", day_id: winter_in_newport_day_4.id)
Activity.create(name: "On your way home, detour along Ocean Drive for amazing waterfront views!", number: 3, info_url: "", day_id: winter_in_newport_day_4.id)


# Spring in Philadelphia Activities
Activity.create(name: "Check into the Kimpton Hotel Monaco", number: 1, info_url: "https://www.monaco-philadelphia.com/", day_id: spring_in_philadelphia_day_1.id)
Activity.create(name: "Head to the Philadelphia Museum of Art (make sure to take a photo on the Rocky Steps!) ", number: 2, info_url: "https://philamuseum.org/", day_id: spring_in_philadelphia_day_1.id)
Activity.create(name: "Dinner at Royal Boucherie’s", number: 3, info_url: "https://www.royalboucherie.com/menus/", day_id: spring_in_philadelphia_day_1.id)
Activity.create(name: "Drinks at Bob & Barbara’s", number: 4, info_url: "https://www.bobandbarbaras.com/", day_id: spring_in_philadelphia_day_1.id)

Activity.create(name: "Have breakfast at Talula’s Garden", number: 1, info_url: "https://talulasgarden.com/menus/dinner/?utm_source=Google%20My%20Business&utm_medium=Menu%20Button", day_id: spring_in_philadelphia_day_2.id)
Activity.create(name: "Stop by Elfreth’s Alley Museum on the way to Independence Hall", number: 2, info_url: "http://www.elfrethsalley.org/", day_id: spring_in_philadelphia_day_2.id)
Activity.create(name: "Take a tour of Independence Hall and the Liberty Bell (optional, take a guided tour)", number: 3, info_url: "https://www.tripadvisor.com/AttractionProductReview-g60795-d11447029-The_Constitutional_Walking_Tour_of_Philadelphia-Philadelphia_Pennsylvania.html", day_id: spring_in_philadelphia_day_2.id)
Activity.create(name: "Check out the National Constitution Center", number: 4, info_url: "https://constitutioncenter.org/", day_id: spring_in_philadelphia_day_2.id)
Activity.create(name: "Grab lunch at Reading Terminal Market", number: 5, info_url: "https://readingterminalmarket.org/", day_id: spring_in_philadelphia_day_2.id)
Activity.create(name: "Take a tour of Philadelphia’s Magic Gardens", number: 6, info_url: "https://www.phillymagicgardens.org/", day_id: spring_in_philadelphia_day_2.id)
Activity.create(name: "Dinner at The Dandelion", number: 7, info_url: "https://thedandelionpub.com/", day_id: spring_in_philadelphia_day_2.id)
Activity.create(name: "Drinks at Martha’s", number: 8, info_url: "https://www.marthakensington.com/", day_id: spring_in_philadelphia_day_2.id)

Activity.create(name: "Brunch at Lacroix Restaurant at the Rittenhouse Hotel", number: 1, info_url: "https://www.rittenhousehotel.com/dining/lacroix", day_id: spring_in_philadelphia_day_3.id)
Activity.create(name: "Walk around Rittenhouse Square", number: 2, info_url: "https://www.visitphilly.com/things-to-do/attractions/rittenhouse-square-park/", day_id: spring_in_philadelphia_day_3.id)
Activity.create(name: "Tour the Rodin Museum", number: 3, info_url: "https://www.rodinmuseum.org/", day_id: spring_in_philadelphia_day_3.id)
Activity.create(name: "Late check-out of hotel, head to Fairmount Park before heading home", number: 4, info_url: "https://www.visitphilly.com/things-to-do/attractions/fairmount-park/", day_id: spring_in_philadelphia_day_3.id)


# Winter in Brooklyn Activities
Activity.create(name: "Check into The William Vale Hotel", number: 1, info_url: "http://www.thewilliamvale.com/", day_id: winter_in_brooklyn_day_1.id)
Activity.create(name: "Dinner at Ainslie (pro tip: ask to reserve a seat in the beer garden)", number: 2, info_url: "https://ainsliebk.com/", day_id: winter_in_brooklyn_day_1.id)
Activity.create(name: "Grab drinks at Union Pool", number: 3, info_url: "https://union-pool.com/", day_id: winter_in_brooklyn_day_1.id)

Activity.create(name: "Grab a quick breakfast and head to the Brooklyn Museum", number: 1, info_url: "https://www.brooklynmuseum.org/", day_id: winter_in_brooklyn_day_2.id)
Activity.create(name: "Go ice skating at the Westlight rooftop", number: 2, info_url: "https://www.westlightnyc.com/", day_id: winter_in_brooklyn_day_2.id)
Activity.create(name: "Window shop at the Mini Mall", number: 3, info_url: "https://www.yelp.com/search?find_desc=mini+mall&find_loc=Williamsburg+-+South+Side%2C+Brooklyn%2C+NY+11211", day_id: winter_in_brooklyn_day_2.id)
Activity.create(name: "Late dinner & drinks at Radegast Hall & Biergarten", number: 4, info_url: "https://radegasthall.com/", day_id: winter_in_brooklyn_day_2.id)
Activity.create(name: "Reserve a private pool game at Sharks Pool Club", number: 5, info_url: "https://www.sharkspool.club/", day_id: winter_in_brooklyn_day_2.id)

Activity.create(name: "Brunch at Sunday in BK", number: 1, info_url: "https://www.sundayinbrooklyn.com/", day_id: winter_in_brooklyn_day_3.id)
Activity.create(name: "Late check-out and head home", number: 2, info_url: "", day_id: winter_in_brooklyn_day_3.id)








# PHOTOS
puts "Seeding Photos..."
# Spring in Vegas Photos
Photo.create(url: "https://cdn.getyourguide.com/img/location/5ffeb496e3e09.jpeg/88.jpg", caption: "Welcome to Las Vegas", itinerary_id: spring_in_vegas.id)
Photo.create(url: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/27/59/fd.jpg", caption: "The Vegas Strip", itinerary_id: spring_in_vegas.id)
Photo.create(url: "https://media-cdn.tripadvisor.com/media/photo-s/0e/26/7e/d6/bamboo-pool-at-the-cosmopolita.jpg", caption: "Poolside Cabanas at the Cosmopolitan", itinerary_id: spring_in_vegas.id)
Photo.create(url: "https://mandalaybay.mgmresorts.com/content/dam/MGM/mandalay-bay/nightlife/light/lifestyle/mandalay-bay-nightlife-light-nightclub-dance-floor.tif", caption: "Light Nightclub", itinerary_id: spring_in_vegas.id)
Photo.create(url: "https://media.lasvegasmagazine.com/media/img/photos/2019/10/31/Mystere_LD_cr_Erik_Kabik_t1024.jpg?b3f067808e872500b33dd7ef4ee517933144b05a ", caption: "Mystère", itinerary_id: spring_in_vegas.id)

# Fall in Romania Photos
Photo.create(url: "https://traveler.marriott.com/wp-content/uploads/2019/12/GI_675541477_BucharestParlmntBldg.jpg", caption: "Bucharest", itinerary_id: fall_in_romania.id)
Photo.create(url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/a7/5e/13/caru-cu-bere.jpg?w=800&h=600&s=1", caption: "Caru cu Bere (restaurant in Bucharest)", itinerary_id: fall_in_romania.id)
Photo.create(url: "http://www.uvisitromania.com/_upload/obiective/fullsize/1220859269_6.jpg", caption: "Ialomitei Monastery and Cave", itinerary_id: fall_in_romania.id)
Photo.create(url: "https://nomanbefore.com/wp-content/uploads/2016/09/PelesCastle-11-e1476847341607.jpg", caption: "Peles Castle", itinerary_id: fall_in_romania.id)
Photo.create(url: "https://lp-cms-production.imgix.net/2019-06/67a671f261d363136a282f23b98d7253-piata-sfatului.jpg", caption: "Brasov", itinerary_id: fall_in_romania.id)
# Photo.create(url: "https://drive.google.com/file/d/1TjHojwogI-_faMorxao8MM0lxzUYDSNk/preview", caption: "Wildlife on the Transfaragasan", itinerary_id: fall_in_romania.id)
Photo.create(url: "https://lh3.googleusercontent.com/proxy/Jjga4NsQokLImrTfEyk8lMqF99sm8cnfYEQ-xeK9xvNp97LFICdS5axHvZqXy51-4DqfsD44tcJuwi4-9w9L5UWWfVxLyy-64OAXx5_lZ1o0k5TSXXJB-tRbkHKZUNDsI9MIVuS_0v6nn-Qgv618-nzG", caption: "Transfaragasan Road", itinerary_id: fall_in_romania.id)
Photo.create(url: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Manastirea_Moldovita%2C_vedere_laterala.jpg", caption: "Painted Monastery", itinerary_id: fall_in_romania.id)
Photo.create(url: "https://storage.googleapis.com/afs-prod/media/media:58f2bd78fc934063b641e280f5d62035/3000.jpeg", caption: "Merry Cemetery", itinerary_id: fall_in_romania.id)
Photo.create(url: "https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzL2RhNjgyNTUzLWYyOWUtNDEyNy1hYTY5LWNjOWJlNjVjODk1ZTM5NTM0OTQxYWIzMDIwMjU2Nl9TdGF0dWlhX0NoaXB1bF9sdWlfRGVjZWJhbF8tX0NhemFuZWxlX0R1bmHMhnJpaSxfUm9tYcyCbmlhLmpwZyJdLFsicCIsImNvbnZlcnQiLCIiXSxbInAiLCJjb252ZXJ0IiwiLXF1YWxpdHkgODEgLWF1dG8tb3JpZW50Il0sWyJwIiwidGh1bWIiLCI3ODB4NTIwIyJdXQ/Statuia_Chipul_lui_Decebal_-_Cazanele_Duna%CC%86rii%2C_Roma%CC%82nia.jpg", caption: "Decebalus", itinerary_id: fall_in_romania.id)

# Winter in North Fork Photos
Photo.create(url: "https://www.winetraveler.com/wp-content/uploads/2019/11/Paumanok-Vineyards-Visitor-Information-Winetraveler.jpg", caption: "Paumanok Vineyard", itinerary_id: winter_in_north_fork.id)
Photo.create(url: "https://jamesportwines.com/wp-content/uploads/2018/02/C57A9556.jpg", caption: "Jamestown Vineyard", itinerary_id: winter_in_north_fork.id)
Photo.create(url: "https://macariwines.com/wp-content/uploads/2016/04/Macari_Sunset-1920x1279.jpg", caption: "Macari Vineyard", itinerary_id: winter_in_north_fork.id)
Photo.create(url: "https://images.trvl-media.com/hotels/22000000/21830000/21825900/21825843/1f765cec_z.jpg", caption: "Preston House & Hotel", itinerary_id: winter_in_north_fork.id)
Photo.create(url: "https://cdn.newsday.com/polopoly_fs/1.4357897.1529942246!/httpImage/image.JPG_gen/derivatives/display_960/image.JPG", caption: "All Star Bowling", itinerary_id: winter_in_north_fork.id)
Photo.create(url: "https://i.pinimg.com/originals/ae/9b/8b/ae9b8bee97a092b5bf9a027815c784f5.png", caption: "Greenport, NY", itinerary_id: winter_in_north_fork.id)

# Summer in Rome Photos
Photo.create(url: "https://cdn.britannica.com/81/122181-050-F3741494/SantAngelo-Bridge-Tiber-River-Rome.jpg", caption: "Tiber River", itinerary_id: summer_in_rome.id)
Photo.create(url: "https://www.tripsavvy.com/thmb/f4t6vRndgAeOBTikBn6MtxfKTJg=/4125x2746/filters:no_upscale():max_bytes(150000):strip_icc()/PalatineHill7WEB-5bbe9710801e4ee691a12c4807aa11a1.jpg", caption: "Palatine Hill", itinerary_id: summer_in_rome.id)
Photo.create(url: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/27/5f/70.jpg", caption: "Trevi Fountain", itinerary_id: summer_in_rome.id)
Photo.create(url: "https://img.traveltriangle.com/blog/wp-content/uploads/2020/02/Cover-for-Things-to-do-in-Vatican_4th-feb.jpg", caption: "Vatican City", itinerary_id: summer_in_rome.id)
Photo.create(url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Colosseo_2020.jpg/1200px-Colosseo_2020.jpg", caption: "Colosseum", itinerary_id: summer_in_rome.id)
Photo.create(url: "https://imperiumromanum.pl/wp-content/uploads/2017/06/img_3343-e1497556403950.jpg", caption: "Via Appia", itinerary_id: summer_in_rome.id)
Photo.create(url: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/39/8d/45.jpg", caption: "Domus Aurea", itinerary_id: summer_in_rome.id)
Photo.create(url: "https://images.musement.com/cover/0002/08/villa-borghese-jpg_header-107934.jpeg", caption: "Villa Borghese", itinerary_id: summer_in_rome.id)

# Summer in Boston Photos
Photo.create(url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/133655984.jpg?k=c265ae44ed8d363c1c11929c847d37266fead9a17506c5f6e3da4cc7240f9521&o=&hp=1", caption: "AC Hotel Boston", itinerary_id: summer_in_boston.id)
Photo.create(url: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Public_Garden%2C_Boston.jpg", caption: "Boston Public Garden", itinerary_id: summer_in_boston.id)
Photo.create(url: "https://wgbh.brightspotcdn.com/dims4/default/a218d5f/2147483647/strip/true/crop/2000x1091+0+96/resize/990x540!/quality/70/?url=https%3A%2F%2Fwgbh.brightspotcdn.com%2F6f%2Fd2%2Fb58261484eff9a6084950464f80c%2Fap-041130016839.jpg", caption: "Isabella Stewart Gardner Museum", itinerary_id: summer_in_boston.id)
Photo.create(url: "https://news.northeastern.edu/wp-content/uploads/2021/05/20200809_BW_TOR_1400.jpg", caption: "Fenway Park", itinerary_id: summer_in_boston.id)
Photo.create(url: "https://www.discovernorthamerica.co.uk/wp-content/uploads/2018/04/New-England-Aquarium-Whale-Watching-Cruise-by-Boston-Harbor-Cruises.jpg", caption: "Whale Watch", itinerary_id: summer_in_boston.id)
Photo.create(url: "https://tclf.org/sites/default/files/thumbnails/image/QuincyMarket_signature_TomKlein_2016.jpg", caption: "Quincy Market", itinerary_id: summer_in_boston.id)
Photo.create(url: "https://stregaitaliano.com/wp-content/uploads/2020/07/Waterfront-Mainroom-2-scaled.jpg", caption: "Strega Waterfront", itinerary_id: summer_in_boston.id)
Photo.create(url: "https://345v4845f1o72rvbx12u5xsh-wpengine.netdna-ssl.com/wp-content/uploads/2017/06/0705FoodDrink_PublicoPC4.jpg", caption: "Publico Street Bistro", itinerary_id: summer_in_boston.id)
Photo.create(url: "https://cdn.galaxy.tf/unit-media/tc-default/uploads/images/poi_photo/001/568/988/new-england-aquarium.jpg", caption: "NE Aquarium", itinerary_id: summer_in_boston.id)

# Summer in London Photos
Photo.create(url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Palace_of_Westminster_from_the_dome_on_Methodist_Central_Hall_%28cropped%29.jpg/1000px-Palace_of_Westminster_from_the_dome_on_Methodist_Central_Hall_%28cropped%29.jpg", caption: "London", itinerary_id: summer_in_london.id)
Photo.create(url: "https://cdn.shakespearesglobe.com/uploads/2020/06/Globe-Theatre-interior-fish-eye-Shakespeares-Globe.jpg", caption: "Shakespeare's Globe", itinerary_id: summer_in_london.id)
Photo.create(url: "https://cdn-media.theathletic.com/cdn-cgi/image/fit=cover,width=700,height=466/ORK9WYsN19j3_m74t3CSBSXhs_1440x.960.jpg", caption: "Trafalgar Square", itinerary_id: summer_in_london.id)
Photo.create(url: "https://offloadmedia.feverup.com/secretldn.com/wp-content/uploads/2020/06/20113835/Royal-Opera-House.jpg", caption: "Royal Opera House", itinerary_id: summer_in_london.id)
Photo.create(url: "https://www.tripsavvy.com/thmb/K7RuP8jI7X3uuZ09U69gpRKYOqM=/4447x3335/smart/filters:no_upscale()/WestminsterAbbey-2-410f8042a62c419e9ebd935ed6750b00.jpg", caption: "Westminster Abbey", itinerary_id: summer_in_london.id)
Photo.create(url: "https://hrp.imgix.net/https%3A%2F%2Fhistoricroyalpalaces.picturepark.com%2FGo%2FNYihuqcf%2FV%2F2478%2F29?auto=format&s=eee26bfb3ba368ef6a98b06f0eeb1c24", caption: "Banqueting House", itinerary_id: summer_in_london.id)
Photo.create(url: "https://www.history.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTU3ODc3NjU2NzQ4NTAwMjk3/this-day-in-history-05311859---big-ben-in-london.jpg", caption: "Big Ben", itinerary_id: summer_in_london.id)
Photo.create(url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBBmBj7d3ek1eXmRjGe9TBP2zeA9I0c4lUfhCqIpQY_OeTDu25OYytZRQFw2RiuhB4cio&usqp=CAU", caption: "London Eye", itinerary_id: summer_in_london.id)
Photo.create(url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/britains-queen-elizabeth-ii-leaves-buckingham-palace-in-news-photo-1624550959.jpg?crop=1xw:0.95359xh;center,top&resize=1200:*", caption: "Buckingham Palace", itinerary_id: summer_in_london.id)
Photo.create(url: "https://www.harrods.com/BWStaticContent/50000/50000/3667f922-78b6-467d-a28b-66203d375fe1_t-homepage-store-closure-retouched.jpg", caption: "Harrod's", itinerary_id: summer_in_london.id)

# Winter in Newport Photos
Photo.create(url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/70/de/50/exterior-front-dusk.jpg?w=900&h=-1&s=1", caption: "Hotel Viking", itinerary_id: winter_in_newport.id)
Photo.create(url: "https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_360,q_50,w_640/v1/clients/newportri-76782/hero_mansions_16_96_09d8ba12-8b26-4fa8-b5ef-25d397965904.jpg", caption: "Newport Mansions", itinerary_id: winter_in_newport.id)
Photo.create(url: "https://whitehorsenewport.com/wp-content/uploads/2019/04/WHT-downstairs-bar.jpeg", caption: "White Horse Tavern", itinerary_id: winter_in_newport.id)
Photo.create(url: "https://media-cdn.tripadvisor.com/media/photo-s/07/39/fc/0a/seal-watch-tours.jpg", caption: "Seal Watch", itinerary_id: winter_in_newport.id)
Photo.create(url: "https://www.newportvineyards.com/wp-content/uploads/2019/06/img-farms-simmonsfarm.jpg", caption: "Simmons Farm", itinerary_id: winter_in_newport.id)
Photo.create(url: "https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&url=https%3A%2F%2Fcdn-image.travelandleisure.com%2Fsites%2Fdefault%2Ffiles%2Fwbinns0715-the-chanler-cliff-walk.jpg", caption: "The Chanler at Cliff Walk", itinerary_id: winter_in_newport.id)
Photo.create(url: "https://www.newport-discovery-guide.com/images/ocean-drive-13.jpg", caption: "Ocean Drive", itinerary_id: winter_in_newport.id)


# Spring in Philadelphia Photos
Photo.create(url: "https://www.monaco-philadelphia.com/images/1700-960/living-room-140-c6a2836c.jpg", caption: "Kimpton Monaco", itinerary_id: spring_in_philadelphia.id)
Photo.create(url: "https://assets.philamuseum.org/public/2019-01/visit_mainbuilding2x.jpg", caption: "Philadelphia Museum of Art", itinerary_id: spring_in_philadelphia.id)
Photo.create(url: "https://www.tripsavvy.com/thmb/TQJxD1nzkEPIGS62zN3r8iMkUNI=/400x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1062250032-110de1d7c76d4f49804555d75dffbfa1.jpg", caption: "Elfreth's Alley", itinerary_id: spring_in_philadelphia.id)
Photo.create(url: "https://www.nps.gov/inde/learn/kidsyouth/images/Libery-Bell-960x480.jpg", caption: "Liberty Bell", itinerary_id: spring_in_philadelphia.id)
Photo.create(url: "https://cdn.vox-cdn.com/thumbor/-2tufcPIFMqH0gWNeT2T1AvxyZQ=/0x0:4500x3003/1200x800/filters:focal(1890x1142:2610x1862)/cdn.vox-cdn.com/uploads/chorus_image/image/52071145/shutterstock_519573883.0.jpeg", caption: "Reading Terminal Market", itinerary_id: spring_in_philadelphia.id)
Photo.create(url: "https://media.phillyvoice.com/media/images/Screen_Shot_2017-12-11_at_2.58.38_.2e16d0ba.fill-735x490.png", caption: "Philadelphia's Magic Gardens", itinerary_id: spring_in_philadelphia.id)
Photo.create(url: "https://img1.10bestmedia.com/Images/Photos/318770/5707905789-686578963e-o_54_990x660.jpg", caption: "Rittenhouse Square", itinerary_id: spring_in_philadelphia.id)
Photo.create(url: "https://www.visitphilly.com/wp-content/uploads/2018/02/Rodin-Museum-With-Art-Phila_BKrist__900VP.jpg", caption: "Rodin Museum", itinerary_id: spring_in_philadelphia.id)
Photo.create(url: "https://www.visitphilly.com/wp-content/uploads/2017/12/Fairmount-Park-Reflecting-Pool-R-Kennedy-2200VP.jpg", caption: "Fairmount Park", itinerary_id: spring_in_philadelphia.id)


# Winter in Brooklyn Photos
Photo.create(url: "https://res.cloudinary.com/traveltripperweb/image/upload/c_fit,f_auto,h_1200,q_auto,w_1200/v1597667726/mlvgkrse3t9r7ksclt9j.jpg", caption: "William Vale Hotel", itinerary_id: winter_in_brooklyn.id)
Photo.create(url: "https://ainsliebk.com/wp-content/uploads/2020/06/IMG_0837.jpg", caption: "Ainslie", itinerary_id: winter_in_brooklyn.id)
Photo.create(url: "https://res.cloudinary.com/traveltripperweb/image/upload/c_fit,f_auto,h_1200,q_auto,w_1200/v1594756165/lbvi9fszob5lydglr38f.jpg", caption: "Ice Skating at the Westlight", itinerary_id: winter_in_brooklyn.id)
Photo.create(url: "https://img.artrabbit.com/organisations/brooklyn-museum-of-art/images/t1f6OdxktFIX/938x546/11547460fe811da.jpg", caption: "Brooklyn Museum", itinerary_id: winter_in_brooklyn.id)
Photo.create(url: "https://media.timeout.com/images/105705364/image.jpg", caption: "Sharks Pool", itinerary_id: winter_in_brooklyn.id)
Photo.create(url: "https://pyxis.nymag.com/v1/imgs/efd/d35/08d678d196d9cb53dbf3594ad32eaf7455-sunday-in-brooklyn-01.rsocial.w1200.jpg", caption: "Sunday in BK", itinerary_id: winter_in_brooklyn.id)







# USER ITINERARIES
puts "Seeding UserItineraries..."
# Erika's
UserItinerary.create(user_id: erika.id, itinerary_id: spring_in_vegas.id)
UserItinerary.create(user_id: erika.id, itinerary_id: fall_in_romania.id)
UserItinerary.create(user_id: erika.id, itinerary_id: winter_in_north_fork.id)
UserItinerary.create(user_id: erika.id, itinerary_id: winter_in_newport.id)
UserItinerary.create(user_id: erika.id, itinerary_id: summer_in_boston.id)
UserItinerary.create(user_id: erika.id, itinerary_id: spring_in_philadelphia.id)
UserItinerary.create(user_id: erika.id, itinerary_id: winter_in_brooklyn.id)


# Jenna's
UserItinerary.create(user_id: jenna.id, itinerary_id: summer_in_rome.id)
UserItinerary.create(user_id: jenna.id, itinerary_id: summer_in_london.id)



puts "Done Seeding!"
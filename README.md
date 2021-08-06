# Wander
> A customized travel/itinerary app that helps users find their perfect next trip based on their travel preferences.

<!-- > Live demo [_here_](https://www.example.com). If you have the project hosted somewhere, include the link here. -->

## Table of Contents
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Setup](#setup)
* [Usage](#usage)
* [Project Status](#project-status)
* [Room for Improvement](#room-for-improvement)
* [Acknowledgements](#acknowledgements)
* [Contact](#contact)
<!-- * [General Info](#general-information) -->
<!-- * [Screenshots](#screenshots) -->
<!-- * [License](#license) -->


<!-- ## General Information
- Provide general information about your project here.
- What problem does it (intend to) solve?
- What is the purpose of your project?
- Why did you undertake it?
You don't have to answer all the questions - just the ones relevant to your project. -->


## Technologies Used
- Ruby on Rails
- PostgreSQL
- React
- React Router
- Redux Toolkit
- React Bootstrap
- NodeJS and npm
- Google Maps API


## Features
Users can:
- Customize their profile based on their travel preferences
- View their travel history/stats, including customized Google Map, and organize past/future trips
- Browse itineraries via multiple views:
  - Recommended (based on travel preferences)
  - All itineraries (with filter functionality)
  - Randomized
- Use a credit to save an itinerary to their account (in order to view its details)
- Submit an itinerary to the catalog to receive credit (to view additional iterinaries)
- Upgrade to premium for unlimited itinerary views and direct activity links



<!-- ## Screenshots
![Example screenshot](./img/screenshot.png)
If you have screenshots you'd like to share, include them here. -->


## Setup
**Fork and clone this repository**.

Then run:

```sh
bundle install
rails db:create
npm install --prefix client
```


## Usage
You can use the following commands to run the application:

- `rails s`: run the backend on [http://localhost:3000](http://localhost:3000)
- `npm start --prefix client`: run the frontend on
  [http://localhost:4000](http://localhost:4000)
- `rails start`: run the frontend and backend together with one command


## Project Status
Project is in progress.
<!-- _in progress_ / _complete_ / _no longer being worked on_. If you are no longer working on it, provide reasons why. -->


## Room for Improvement
To do:
- Futher implementation of Google Maps API (Places, photos, nearby, etc.)
- Expand profiile questionnaire
- Add directions/travel time (to destination and between activities)
- Integrate accommodation booking (hotels, AirBnB, etc.)
- Implement tagging feature/model for additional search options
- Stricter categorization of clothing to enable filter/search functionality within swaps and within friends' closets (all or individual)
- Add pro travel tips/packing list/etc. to premium itineraries
- (Perhaps) implement Content Creator model and connect users with Creators who share their interests/preferences
<!-- Include areas you believe need improvement / could be improved. Also add TODOs for future development.

Room for improvement:
- Improvement to be done 1
- Improvement to be done 2 -->


## Acknowledgements
- Base repo setup cloned from [this repo](https://github.com/learn-co-curriculum/project-template-react-rails-api) for easy deployment to Heroku
- Google Maps implemented via [Ubilabs' google-maps-react-hooks](https://www.npmjs.com/package/@ubilabs/google-maps-react-hooks)
- React carousel component based on [rakumairu's tutorial](https://github.com/rakumairu/simple-react-carousel)
- Wander image created by [standret](https://www.freepik.com/free-photo/scenic-view-sunrise-mountains-carpathian-ukraine_10519380.htm#page=1&query=mountain%20sunset&position=34)
- README format based on [this template](https://github.com/ritaly/README-cheatsheet/blob/HEAD/README.md#L1-L82)


## Contact
Created by [@jennafritz](https://www.linkedin.com/in/jenna-fritz/) - feel free to contact me!
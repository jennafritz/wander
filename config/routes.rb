Rails.application.routes.draw do
  
  resources :photos, only: [:index]
  get "/itinerary_photos", to: "photos#get_itinerary_photos"
  # resources :activities
  resources :days, only: [:index]
  get "/itinerary_days", to: "days#get_itinerary_days"
  resources :itineraries, only: [:index]
  get "/users/my_itineraries", to: "users#get_my_itineraries"
  # resources :user_itineraries
  resources :users, only: [:create]
  post "/register", to: "users#create"
  post "/login", to: "users#login"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end

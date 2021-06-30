Rails.application.routes.draw do
  
  # resources :photos
  # resources :activities
  # resources :days
  # resources :itineraries
  # resources :user_itineraries
  resources :users, only: [:create]
  post "/register", to: "users#create"
  post "/login", to: "users#login"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end

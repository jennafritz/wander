class UsersController < ApplicationController

skip_before_action :authorized, only: [:create, :login]

rescue_from ActiveRecord::RecordNotFound, with: :not_found

    def create
        @user = User.create!(username: params[:username], password: params[:password], credits: 5, premium: false, picture: nil)
        token = encode_token(user_id: @user.id)
        render json: {user: UserSerializer.new(@user), token: token}, status: :created
    rescue ActiveRecord::RecordInvalid => invalid
            render json: {error: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

    def login
        user = User.find_by(username: params[:username])
        if user && user.authenticate(params[:password])
            token = encode_token({user_id: user.id})
            render json: {user: UserSerializer.new(user), token: token}, status: :accepted
        else 
            render json: {error: "Invalid Username or Password"}, status: :unauthorized
        end
    end

    def add_credits
        user = User.find(params[:userId])
        user.update!(credits: params[:credits])
        render json: user, status: :ok
    rescue ActiveRecord::RecordInvalid => invalid
        render json: {error: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

    def remove_credits
        user = User.find(params[:userId])
        user.update!(credits: params[:credits])
        render json: user, status: :ok
    rescue ActiveRecord::RecordInvalid => invalid
        render json: {error: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

    def get_my_itineraries
        user = User.find(params[:userId])
        itineraries = user.itineraries
        render json: itineraries, status: :accepted
    end

    def get_my_past_itineraries
        user = User.find(params[:userId])
        user_itineraries = user.user_itineraries
        past_user_itineraries = user_itineraries.filter do |user_itinerary|
            user_itinerary.past == true
        end
        past_itineraries = past_user_itineraries.map do |past_user_itinerary|
            past_user_itinerary.itinerary
        end
        render json: past_itineraries, status: :accepted
    end

    def get_my_future_itineraries
        user = User.find(params[:userId])
        user_itineraries = user.user_itineraries
        future_user_itineraries = user_itineraries.filter do |user_itinerary|
            user_itinerary.past == false
        end
        future_itineraries = future_user_itineraries.map do |future_user_itinerary|
            future_user_itinerary.itinerary
        end
        render json: future_itineraries, status: :accepted
    end

    def update
        user = User.find(params[:userId])
        user.update!(user_params)
        render json: user, status: :accepted
    rescue ActiveRecord::RecordInvalid => invalid
        render json: {error: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

    private

    def user_params
        params.permit(:username, :password, :latitude, :longitude, :travel_season, :travel_length, :travel_locale, :travel_classification, :budget, :picture, :premium) 
    end

    def not_found
        render json: {error: "Not Found"}, status: :not_found
    end

end

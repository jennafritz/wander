class UserItinerariesController < ApplicationController

    def create
        new_user_itinerary = UserItinerary.create!(user_itinerary_params)
        render json: new_user_itinerary, status: :created
    rescue ActiveRecord::RecordInvalid => invalid
        render json: {error: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

    private

    def user_itinerary_params
        params.permit(:user_id, :itinerary_id)
    end
end

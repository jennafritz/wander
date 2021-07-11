class UserItinerariesController < ApplicationController

    rescue_from ActiveRecord::RecordNotFound, with: :not_found

    def create
        new_user_itinerary = UserItinerary.create!(user_itinerary_params)
        render json: new_user_itinerary, status: :created
    rescue ActiveRecord::RecordInvalid => invalid
        render json: {error: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

    def mark_traveled
        user_itinerary = UserItinerary.find_by(user_id: params[:user_id], itinerary_id: params[:itinerary_id])
        user_itinerary.update!(user_itinerary_params)
        render json: user_itinerary, status: :accepted
    end

    private

    def user_itinerary_params
        params.permit(:user_id, :itinerary_id, :past)
    end

    def not_found
        render json: {error: "Not Found"}, status: :not_found
    end
end

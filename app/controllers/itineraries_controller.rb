class ItinerariesController < ApplicationController

    def index
        itineraries = Itinerary.all
        render json: itineraries, status: :ok
        # include: ['users', 'days', 'days.activities', 'photos'],
    end

    def create
        newItinerary = Itinerary.create!(itinerary_params)
        render json: newItinerary, status: :created
    rescue ActiveRecord::RecordInvalid => invalid
        render json: {error: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

    private

    def itinerary_params
        params.permit(:name, :destination, :description, :season, :length, :locale, :classification, :budget, :creator_id)
    end

end

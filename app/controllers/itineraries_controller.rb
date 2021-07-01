class ItinerariesController < ApplicationController

    def index
        itineraries = Itinerary.all
        render json: itineraries, status: :ok
        # include: ['users', 'days', 'days.activities', 'photos'],
    end

end

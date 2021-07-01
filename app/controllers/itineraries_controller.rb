class ItinerariesController < ApplicationController

    def index
        itineraries = Itinerary.all
        render json: itineraries, include: ['users', 'days', 'days.activities', 'photos'], status: :ok
    end

    # def get_my_itineraries
    #     byebug
    #     itineraries = Itinerary.select do |itinerary|
    #         itinerary.users.detect do |user|
    #             user.id == params[:user_id]
    #         end
    #     end
    # end
end

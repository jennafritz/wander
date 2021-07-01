class DaysController < ApplicationController

    def get_itinerary_days
        days = Day.where(itinerary_id: params[:itineraryId])
        render json: days, status: :accepted
    end
    
end

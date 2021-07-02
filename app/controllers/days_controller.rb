class DaysController < ApplicationController

    def index
        days = Day.all
        render json: days, status: :accepted
    end
    
    def get_itinerary_days
        days = Day.where(itinerary_id: params[:itineraryId])
        render json: days, status: :accepted
    end
    
end

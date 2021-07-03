class DaysController < ApplicationController

    def index
        days = Day.all
        render json: days, status: :accepted
    end

    def create
        createdDays = params[:_json].map do |day|
            newDay = Day.create!(name: day[:name], number: day[:number], itinerary_id: day[:itinerary_id])
            newDay
        end
        render json: createdDays, status: :created
    rescue ActiveRecord::RecordInvalid => invalid
        render json: {error: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
    
    def get_itinerary_days
        days = Day.where(itinerary_id: params[:itineraryId])
        render json: days, status: :accepted
    end
    
    private

end

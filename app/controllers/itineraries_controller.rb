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

    def generate_random_itinerary
        all_itineraries = Itinerary.all
        unsaved_itineraries = all_itineraries.filter do |itinerary|
            itinerary.users.ids.include?(params[:userId].to_i) == false
        end
        random_itinerary = unsaved_itineraries.sample
        render json: random_itinerary, status: :ok
    end

    def create_full_trip

        # create itinerary
        new_itinerary = Itinerary.create!(itinerary_params)
        
        # create days
        num_days = Array.new(params[:itinerary][:length]) {|index| index}
        created_days = num_days.map do |day|
            new_day = Day.create!(name: "#{new_itinerary[:name]} Day #{day + 1}", number: day + 1, itinerary_id: new_itinerary[:id])
            new_day
        end
        
        # create activities
        created_activities_array = []
        created_days.map do |day| 
            day_activities = params[:activitiesArray].filter do |activity|
                activity[:day] == day[:number]
            end
            created_day_activities = day_activities.map do |activity|
                new_activity = Activity.create!(name: activity[:activity], info_url: activity[:info_url], day_id: day[:id], number: activity[:order] + 1)
                created_activities_array << new_activity
            end
        end
        
        #create photos
        created_photos = params[:imagesArray].map do |photo|
            new_photo = Photo.create!(url: photo[:imageUrl], caption: photo[:caption], itinerary_id: new_itinerary[:id])
            new_photo
        end

        render json: new_itinerary, status: :created

    rescue ActiveRecord::RecordInvalid => invalid
        render json: {error: invalid.record.errors.full_messages}, status: :unprocessable_entity

    end

    private

    def itinerary_params
        params.require(:itinerary).permit(:name, :destination, :latitude, :longitude, :description, :season, :length, :locale, :classification, :budget, :creator_id)
    end

end

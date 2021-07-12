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
        @new_itinerary = Itinerary.create(itinerary_params)
        # create days
        num_days = Array.new(params[:itinerary][:length]) {|index| index}
        @created_days = num_days.map do |day|
            new_day = Day.create(name: "#{@new_itinerary[:name]} Day #{day + 1}", number: day + 1, itinerary_id: @new_itinerary[:id])
            new_day
        end
        
        # create activities
        @created_activities_array = []
        @created_days.map do |day| 
            day_activities = params[:activitiesArray].filter do |activity|
                activity[:day] == day[:number]
            end
            created_day_activities = day_activities.map do |activity|
                new_activity = Activity.create(name: activity[:activity], info_url: activity[:info_url], day_id: day[:id], number: activity[:order] + 1)
                @created_activities_array << new_activity
            end
        end
        
        #create photos
        @created_photos = params[:imagesArray].map do |photo|
            new_photo = Photo.create(url: photo[:imageUrl], caption: photo[:caption], itinerary_id: @new_itinerary[:id])
            new_photo
        end


        # Probably need to take ! out of .create method to use these
        def itinerary_valid?
            if @new_itinerary && @new_itinerary[:id]
                true
            else 
                false
            end
        end

        def days_valid?
            if @created_days.length == params[:itinerary][:length] && @created_days.all? {|day| day[:id]}
                true
            else
                false
            end
        end

        def activities_valid?
            if @created_activities_array.length == params[:activitiesArray].length && @created_activities_array.all? {|activity| activity[:id]}
                true
            else
                false
            end
        end

        def photos_valid?
            if @created_photos.length == params[:imagesArray].length && @created_photos.all? {|photo| photo[:id]}
                true
            else
                false
            end
        end

        if itinerary_valid?() && days_valid?() && activities_valid?() && photos_valid?()
            render json: @new_itinerary, status: :created
        else
            # not sure if this is how you call destroy...
            @new_itinerary.destroy
            render json: {error: "An error occurred. Please try again."}, status: :not_accepted
        end

        # Need to remove this if remove ! from .create
    # rescue ActiveRecord::RecordInvalid => invalid
    #     render json: {error: invalid.record.errors.full_messages}, status: :unprocessable_entity

    end






    def create_full_trip_new_test
        # does not work because no IDs are created until saved to database...

        # create itinerary
        new_itinerary = Itinerary.new(itinerary_params)
        
        # create days
        num_days = Array.new(params[:itinerary][:length]) {|index| index}
        created_days = num_days.map do |day|
            new_day = Day.new(name: "#{new_itinerary[:name]} Day #{day + 1}", number: day + 1, itinerary_id: new_itinerary[:id])
            new_day
        end
        
        # create activities
        created_activities_array = []
        created_days.map do |day| 
            day_activities = params[:activitiesArray].filter do |activity|
                activity[:day] == day[:number]
            end
            created_day_activities = day_activities.map do |activity|
                new_activity = Activity.new(name: activity[:activity], info_url: activity[:info_url], day_id: day[:id], number: activity[:order] + 1)
                created_activities_array << new_activity
            end
        end
        
        #create photos
        created_photos = params[:imagesArray].map do |photo|
            new_photo = Photo.new(url: photo[:imageUrl], caption: photo[:caption], itinerary_id: new_itinerary[:id])
            new_photo
        end

        def itinerary_valid?
            if new_itinerary && new_itinerary[:id]
                true
            else 
                false
            end
        end

        def days_valid?
            if created_days.length == params[:itinerary][:length] && created_days.all?(day => day[:id])
                true
            else
                false
            end
        end

        def activities_valid?
            if created_activities_array.length == params[:activitiesArray].length && created_activities_array.all?(activity => activity[:id])
                true
            else
                false
            end
        end

        def photos_valid?
            if created_photos.length == params[:imagesArray].length && created_photos.all?(photo => photo[:id])
                true
            else
                false
            end
        end

        if itinerary_valid? && days_valid? && activities_valid? && photos_valid?
            new_itinerary.save
            created_photos.each do |photo|
                photo.save
            end
            created_days.each do |day|
                day.save
            end
            created_activities_array.each do |activity|
                activity.save
            end
        else

        end

        byebug

        render json: new_itinerary, status: :created

    # rescue ActiveRecord::RecordInvalid => invalid
    #     render json: {error: invalid.record.errors.full_messages}, status: :unprocessable_entity

    end



    private

    def itinerary_params
        params.require(:itinerary).permit(:name, :destination, :latitude, :longitude, :description, :season, :length, :locale, :classification, :budget, :creator_id)
    end

end

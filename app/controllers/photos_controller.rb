class PhotosController < ApplicationController

    def index
        photos = Photo.all
        render json: photos, status: :accepted
    end

    def get_itinerary_photos
        photos = Photo.where(itinerary_id: params[:itineraryId])
        render json: photos, status: :accepted
    end
    
end

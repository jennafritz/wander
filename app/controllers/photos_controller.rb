class PhotosController < ApplicationController

    def index
        photos = Photo.all.order(id: :asc)
        render json: photos, status: :accepted
    end

    def get_itinerary_photos
        photos = Photo.where(itinerary_id: params[:itineraryId]).order(id: :asc)
        render json: photos, status: :accepted
    end

    def create
        createdPhotos = params[:photosArray].map do |photo|
            newPhoto = Photo.create!(url: photo[:imageUrl], caption: photo[:caption], itinerary_id: params[:itineraryId])
            newPhoto
        end
        render json: createdPhotos, status: :created
    rescue ActiveRecord::RecordInvalid => invalid
        render json: {error: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
    
end

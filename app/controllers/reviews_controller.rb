class ReviewsController < ApplicationController

    def get_itinerary_reviews
        reviews = Review.where(itinerary_id: params[:itineraryId])
        render json: reviews, status: :accepted
    end

    def create
        new_review = Review.create(review_params)
        render json: new_review, status: :created
    rescue ActiveRecord::RecordInvalid => invalid
        render json: {error: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

    private

    def review_params
        params.permit(:comment, :user_id, :itinerary_id)
    end

end

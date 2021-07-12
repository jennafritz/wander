class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :comment, :rating, :user_id, :itinerary_id
  belongs_to :user
end

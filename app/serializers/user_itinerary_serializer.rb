class UserItinerarySerializer < ActiveModel::Serializer
  attributes :id, :user_id, :itinerary_id
end

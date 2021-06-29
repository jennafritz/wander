class PhotoSerializer < ActiveModel::Serializer
  attributes :id, :url, :caption, :itinerary_id
end

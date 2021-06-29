class DaySerializer < ActiveModel::Serializer
  attributes :id, :name, :number, :itinerary_id
end

class ItinerarySerializer < ActiveModel::Serializer
  attributes :id, :name, :season, :length, :locale, :type, :budget
end

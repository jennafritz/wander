class ActivitySerializer < ActiveModel::Serializer
  attributes :id, :name, :day_id
  belongs_to :day
end

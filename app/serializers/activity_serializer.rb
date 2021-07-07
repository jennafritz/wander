class ActivitySerializer < ActiveModel::Serializer
  attributes :id, :name, :number, :day_id, :info_url
  belongs_to :day
end

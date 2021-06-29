class User < ApplicationRecord
    has_secure_password
    has_many :user_itineraries
    has_many :itineraries, through: :user_itineraries
    validates :username, uniqueness: {case_sensitive: false}
end

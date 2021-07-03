class ActivitiesController < ApplicationController

    def create
        createdActivities = []
        params[:activitiesArray].each do |activity|
            newActivity = Activity.create!(name: activity[:activity], day_id: params[:dayId])
            createdActivities[activity[:order]] = newActivity
        end
        render json: createdActivities, status: :created
    rescue ActiveRecord::RecordInvalid => invalid
        render json: {error: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

end

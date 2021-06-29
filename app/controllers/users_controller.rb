class UsersController < ApplicationController

skip_before_action :authorized, only: [:create, :login]

    def create
        @user = User.create!(user_params)
        token = encode_token(user_id: @user.id)
        render json: {user: UserSerializer.new(@user), token: token}, status: :created
    rescue ActiveRecord::RecordInvalid => invalid
            render json: {error: invalid.errors.full_messages}, status: :unprocessable_entity
    end

    def login
        user = User.find_by(username: params[:username])
        if user && user.authenticate(params[:password])
            token = encode_token({user_id: user.id})
            render json: {user: UserSerializer.new(user), token: token}, status: :accepted
        else 
            render json: {error: "Invalid Username or Password"}, status: :unauthorized
        end
    end

    private

    def user_params
        params.permit(:username, :password) 
            # :picture, :travel_season, :travel_length, :travel_locale, :travel_type, :budget)
    end

end

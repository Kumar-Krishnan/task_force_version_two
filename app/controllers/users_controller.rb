class UsersController < ApplicationController
    before_action :authenticate_user!

    def get_name
        @user = current_user
        render json: @user.name
    end
end

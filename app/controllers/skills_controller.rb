class SkillsController < ApplicationController
    before_action :authenticate_user!

    def index
        @user = current_user
        @skills = @user.skills

        render json: @skills
    end
end

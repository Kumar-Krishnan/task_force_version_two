class SkillsController < ApplicationController
    before_action :authenticate_user!

    def index
        @skills = Skill.all
        render json: @skills
    end
    
    def user_skills_index
        @user = current_user
        @skills = @user.skills

        render json: @skills
    end
end

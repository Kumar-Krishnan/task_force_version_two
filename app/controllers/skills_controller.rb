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

    def add_skill_to_user
        skill = Skill.find(params[:id])
        @user = current_user
        if @user.skills.include?(skill)
            render json: "skill NOT ADDED"
        else
            @user.skills << skill
            render json: "skill added"
        end
        
    end
end

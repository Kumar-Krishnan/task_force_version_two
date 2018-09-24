Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/users/name', to: 'users#get_name'
  get '/skills/user_skills', to: 'skills#user_skills_index'
  resources :skills
  resources :users
end

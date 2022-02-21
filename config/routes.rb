Rails.application.routes.draw do
  namespace :api, defaults: { format: 'json' } do
    resources :tasks
  end
  get '/self' => 'auth#check_user_login'
  root 'home#index'
  get '/*path' => 'home#index'
  post '/signup' => 'auth#signup'
  get '/login' => 'auth#new'
  post '/login' => 'auth#login'
end

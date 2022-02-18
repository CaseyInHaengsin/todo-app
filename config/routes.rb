Rails.application.routes.draw do
  root 'home#index'
  post '/login' => 'auth#login'
  get '/login' => 'auth#new'
  namespace :api, defaults: { format: 'json' } do
    resources :tasks
  end

end

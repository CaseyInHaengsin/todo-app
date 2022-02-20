Rails.application.routes.draw do
  namespace :api, defaults: { format: 'json' } do
    resources :tasks
  end
  root 'home#index'
  get '/*path' => 'home#index'
  post '/login' => 'auth#login'
  get '/login' => 'auth#new'
end

Rails.application.routes.draw do
  namespace :api, defaults: { format: 'json' } do
    resources :tasks
  end
  root 'home#index'
  post '/login' => 'auth#login'
  get '/login' => 'auth#new'
  get '/*path' => 'home#index'
end

Rails.application.routes.draw do
  namespace :api, defaults: { format: 'json' } do
    resources :tasks
  end
  root 'home#index'
  post '/login' => 'auth#login'
  get '/*path' => 'home#index'
end

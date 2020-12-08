Rails.application.routes.draw do
  resources :reviews, only: :index
  resources :posts
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  resources :users, only: :create
  put '/reviews/:review_id/posts/:id', to: 'posts#add_review'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

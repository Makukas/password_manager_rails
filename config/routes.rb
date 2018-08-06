Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  devise_for :users
  resources :passwords
  root 'passwords#new'
  get '/new', to: 'passwords#new'
  get '/main', to: 'passwords#main'
  get '/lookup', to: 'passwords#lookup'
  devise_scope :user do
    get 'signup', to: 'devise/registrations#new'
    get 'signin', to: 'devise/sessions#new'
    delete '/signout', to: 'devise/sessions#destroy'
  end
end

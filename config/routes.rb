Rails.application.routes.draw do

  get '/', to: 'home#index'

  namespace :api do
    resources :contents, only: [:index, :create, :update, :destroy]
    resources :boards, only: [:index, :create, :update, :destroy]
  end
end

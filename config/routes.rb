Rails.application.routes.draw do
  namespace :api do
    resources :contents, only: [:index, :create, :update, :destroy]
    resources :boards, only: [:index, :create, :update, :destroy]
  end
end

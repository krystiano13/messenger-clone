Rails.application.routes.draw do
  devise_for :users, controllers: { registrations: "users/registrations" }
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"

  get "api/messages/all/:username", to: "messages#index", as: :messages_all
  get "api/messages/:from/:to", to: "messages#get_one", as: :messages_one
  post "api/messages", to: "messages#create", as: :messages_create
  patch "api/messages/:id", to: "messages#update", as: :messages_update
  delete "api/messages/:id", to: "messages#destroy", as: :messages_destroy

  get "api/groups/:name", to: "groups#index", as: :groups
  post "api/groups/:user_id", to: "groups#create", as: :groups_create
  patch "api/groups/:id", to: "groups#update", as: :groups_update
end

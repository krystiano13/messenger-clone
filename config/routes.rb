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
  get "api/groups/one/:id", to: "groups#get_one", as: :groups_one
  post "api/groups/:user_id", to: "groups#create", as: :groups_create
  patch "api/groups/:id", to: "groups#update", as: :groups_update
  delete "api/groups/:id", to: "groups#destroy", as: :groups_destroy

  get "api/group_members/:group_id", to: "group_members#index", as: :group_members
  post "api/group_members/", to: "group_members#create", as: :group_members_create
  delete "api/group_members/:group_id/:id", to: "group_members#destroy", as: :group_members_destroy

  get "api/group/invites/:user_id", to: "group_invites#index", as: :group_invites
  get "api/group/invites/g/:group_id", to: "group_invites#get_by_group", as: :group_invites_by_group
  post "api/group/invites/", to: "group_invites#create", as: :group_invites_create
  delete "api/group/invites/:id", to: "group_invites#destroy", as: :group_invites_destroy

  get "api/group/messages/:group_id", to: "group_messages#index", as: :group_msg
  post "api/group/messages/", to: "group_messages#create", as: :group_msg_create
  patch "api/group/messages/:id", to: "group_messages#update", as: :group_msg_update
  delete "api/group/messages/:id", to: "group_messages#destroy", as: :group_msg_destroy

  get "api/friends/invites/:user_id", to: "friend_invites#index", as: :friend_invites
  post "api/friends/invites/", to: "friend_invites#create", as: :friend_invites_create
  delete "api/friends/invites/:id", to: "friend_invites#destroy", as: :friend_invites_destroy

  get "api/friends/:user_id", to: "friend#index", as: :friend
  get "api/friends/msg/:user_id", to: "friend#index_with_last_message", as: :friend_message
  get "api/friends/id/:id", to: "friend#index_by_id", as: :friend_by_id
  post "api/friends/", to: "friend#create", as: :friend_create
  delete "api/friends/:id", to: "friend_#destroy", as: :friend_destroy

  get "api/users/name/:id", to: "username#index", as: :username
  get "api/users/:name", to: "user#index", as: :user
  get "api/users/id/:id", to: "user#index_by_id", as: :user_by_id
end

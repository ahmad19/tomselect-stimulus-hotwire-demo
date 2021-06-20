Rails.application.routes.draw do
  root 'invoices#index'
  resources :invoices
  resources :customers
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

class Customer < ApplicationRecord
  validates :email, presence: true
end

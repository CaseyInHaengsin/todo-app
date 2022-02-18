class User < ApplicationRecord
  has_secure_password
  has_many :tasks, dependent: :destroy

  validates :password, :login_id, presence: true
  validates :login_id, uniqueness: true
end

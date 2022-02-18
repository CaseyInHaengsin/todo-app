class Task < ApplicationRecord
  validates :name, presence: true
  validates :description, length: { minimum: 3 }
  before_save :set_completed_at
  belongs_to :user
  
  def set_completed_at
    if self.completed_at.nil? && self.complete == true
      self.completed_at = Time.now
    elsif !self.completed_at.nil? && self.complete == false
      self.completed_at = nil
    end
  end
end

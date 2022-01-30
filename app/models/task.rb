class Task < ApplicationRecord
  validates :name, presence: true
  validates :description, length: { minimum: 3 }
  before_save :set_completed_at
  
  def set_completed_at
    if self.completed_at.nil? && self.complete == true
      self.completed_at = Time.now
    end
  end
end

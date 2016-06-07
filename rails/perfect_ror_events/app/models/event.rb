class Event < ApplicationRecord
  validates :name, length: {maximum: 50}, presence: true
  validates :place, length: {maximum: 100}, presence: true
  validates :content, length: {maximum: 2000}, presence: true
  validates :start_time, length: {maximum: 50}, presence: true
  validates :end_time, length: {maximum: 50}, presence: true
  validates :start_time_should_be_before_end_time

  def start_time_should_be_before_end_time
    return unless star_time && end_time
    if start_time >= end_time
      error.add(:start_time, 'は終了時間よりも前に設定してください')
    end
  end

end

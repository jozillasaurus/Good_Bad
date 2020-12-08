class ReviewsController < ApplicationController
  # GET /flavors
  def index
    @reviews = Review.all

    render json: @reviews
  end
end
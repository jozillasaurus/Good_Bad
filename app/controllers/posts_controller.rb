class PostsController < ApplicationController
  before_action :set_post, only: [:show, :add_review]
  before_action :authorize_request, only: [:create, :update, :destroy]
  before_action :set_user_post, only: [:update, :destroy]

  # GET /foods
  def index
    @posts = Post.all

    render json: @posts
  end

  # GET /foods/1
  def show
    render json: @post, include: :reviews
  end

  # POST /foods
  def create
    @post = Post.new(post_params)
    @post.user = @current_user

    if @post.save
      render json: @post, status: :created, location: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /foods/1
  def update
    if @post.update(post_params)
      render json: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # DELETE /foods/1
  def destroy
    @post.destroy
  end

  def add_review
    @review = Review.find(params[:review_id])
    @post.reviews << @review

    render json: @post, include: :reviews
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_post
      @post = Post.find(params[:id])
    end

    def set_user_post
      @post = @current_user.posts.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def post_params
      params.require(:post).permit(:name, :user_id)
    end
end

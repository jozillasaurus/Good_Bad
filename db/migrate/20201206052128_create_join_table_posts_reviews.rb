class CreateJoinTablePostsReviews < ActiveRecord::Migration[6.0]
  def change
    create_join_table :posts, :reviews do |t|
      # t.index [:post_id, :review_id]
      # t.index [:review_id, :post_id]
    end
  end
end

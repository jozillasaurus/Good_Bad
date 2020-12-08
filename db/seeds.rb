# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Post.destroy_all
Review.destroy_all
User.destroy_all

@admin = User.create!(username: 'admin', email: 'admin@email.com', password: '123456')

puts "#{User.count} users created"

@review1 = Review.create!(name: 'good')
@review2 = Review.create!(name: 'bad')


puts "#{Review.count} reviews created"

@post1 = Post.create!(name: 'pizza', reviews: [@review1, @review2], user: @admin)

@post2 = Post.create!(name: 'sushi', user: @admin)

@post2.reviews.push(@review2)
# @post2.reviews << @review2
# @post2.reviews << @review5

@review1.posts.create!(name: 'ice cream', user: @admin)

puts "#{Post.count} posts created"


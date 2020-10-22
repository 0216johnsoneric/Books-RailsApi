# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# require 'faker'
# require 'securerandom'
 
# Users.delete_all
# Books.delete_all

# books_name = [
#   'Natalie',
#   'Prince', 
# ]

# books_collection = []

# books_name.each do |name|
#   books_collection << Books.create(name: name)
# end

Book.create(title: "Black-Capped Chickadee", author: "Bob Dole", summary: "Hello World" )

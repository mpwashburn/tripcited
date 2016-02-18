# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

content = Content.create(title: 'First trip to India', body: "lasdfljsadgosdjag sladgjslfjdsaf lasjdf;lsajgdl;dasgjdsalf kjsdaflasdjglsadgjdsalfjsad glksdjag sdfsa.", image_link: "somelink.jpeg", source: "http://google.com", upvotes: 30, downvotes: 4)

# symbols declaring vs calling ...
# assign: "some value"
# :call

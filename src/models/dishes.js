var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var slug = require('slug');
var User = mongoose.model('User');

var DishSchema = new mongoose.Schema({
  title: String,
  description: String,
  body: String,
  favoritesCount: {type: Number, default: 0},
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
//   tagList: [{ type: String }],
}, {timestamps: true});

// DishSchema.plugin(uniqueValidator, {message: 'is already taken'});

// DishSchema.pre('validate', function(next){
//   if(!this.slug)  {
//     this.slugify();
//   }

  next();
});

DishSchema.methods.slugify = function() {
  this.slug = slug(this.title) + '-' + (Math.random() * Math.pow(36, 6) | 0).toString(36);
};

DishSchema.methods.updateFavoriteCount = function() {
  var dish = this;

  return User.count({favorites: {$in: [dish._id]}}).then(function(count){
    dish.favoritesCount = count;

    return dish.save();
  });
};

DishSchema.methods.toJSONFor = function(user){
  return {
    slug: this.slug,
    title: this.title,
    description: this.description,
    body: this.body,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt,
    tagList: this.tagList,
    favorited: user ? user.isFavorite(this._id) : false,
    favoritesCount: this.favoritesCount,
    author: this.author.toProfileJSONFor(user)
  };
};

mongoose.model('Dish', DishSchema);
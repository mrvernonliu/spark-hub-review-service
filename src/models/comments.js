
// var mongoose = require('mongoose');

// var CommentSchema = new mongoose.Schema({
//   body: String,
// }, {timestamps: true});

// // Requires population of author
// CommentSchema.methods.toJSONFor = function(user){
//   return {
//     id: this._id,
//     body: this.body,
//     createdAt: this.createdAt,
//     // author: this.author.toProfileJSONFor(user)
//   };
// };

// DishSchema.methods.putDish = function() {
//       var dish = this;
    
//       return User.count({favorites: {$in: [dish._id]}}).then(function(count){
//         dish.favoritesCount = count;
    
//         return dish.save();
//       });
//     };

// mongoose.model('Comment', CommentSchema);
var mongoose = require('mongoose');

var DishSchema = new mongoose.Schema({
  title: String,
  description: String,
  ratings: {type: Number, default: 0},
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
//   tagList: [{ type: String }],
}, {timestamps: true});

DishSchema.methods.initializeDish = function(){
  return {
    title: "a dish",
    description: "daily special soup",
    ratings: 0,
    comments: []
  };
};

// mongoose.model('Dish', DishSchema);
const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    authorID: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'user',
        required: true 
    }, 
    content: { 
        type: String,
        required: true 
    },
    title: { 
        type: String,
       
    },
    comments: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Comment' 
    }],
    likes: [{
        name: { type: String, required: true },
        userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
        timestamp: { type: Date, default: Date.now }
    }]
});
  
const Post = mongoose.model("Post", postSchema);
module.exports = Post;
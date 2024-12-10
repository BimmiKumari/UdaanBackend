const mongoose=require("mongoose");
var commentSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    comment:{
        type:String,
        require:true
    },
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }
},
{
    timestamps:true
    
}
)

const Comment=mongoose.model("Comment",commentSchema);
module.exports=Comment;
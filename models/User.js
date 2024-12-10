const mongoose=require("mongoose");
const userSchema=new mongoose.Schema(
    {
        firstname:{
            type:String,
            required:true,
            trim:true,
        },
        lastname:{
            type:String,
            required:true,
            trim:true,
        },
        email:{
            type:String,
            required:true,
            trim:true,
        },
        password:{
            type:String,
            required:true,
        },
        accountType:{
            type:String,
            enum:["Admin","SINGLEMOTHER","NGOSUPPORT"],
            required:true,
        },
        active:{
            type:Boolean,
            default:true,
        },
        approved:{
            type:Boolean,
            default:true,
        },
        additionalDetails:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:"Profile",
        },
        courses:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:"Course",
            },
        ],
        token:{
            type:String,
        },
        resetPasswordExpires:{
            type : Date,
        },
        image:{
            type:String,
            required:true,
        },
        myposts: {
            type: Array,
            required: false,
        },
        courseProgress:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:"courseProgress",
            },
        ],

    },
    {
        timestamps:true   //ye automatically createdat and updatedat ke liyen
    }
);
module.exports=mongoose.model("user",userSchema);
const mongoose =require('mongoose');
const bcrypt = require('bcryptjs');
const jwt =require('jsonwebtoken');

const userSchema=mongoose.Schema({
    name: {
        type:String,
        required: true,
    },
    email: {
        type:String,
        required: true,
    },
    password: {
        type:String,
        required: true,
    },
    phone: {
        type:Number,
        required: true,
    },
    tokens : [
        {
            token :{
                type :String,
                required : true,
            },
        },
    ],
});

userSchema.pre('save',async function(next){
    if(this.isModified('password')){
        this.password=await bcrypt.hash(this.password,10);
    }
    next();
       // console.log("i am the pre at save function");
});

userSchema.methods.generateAuthToken= async function() {
   // console.log('hello'); 
    const token = jwt.sign({_id: this._id},process.env.SECRET_KEY);
    this.tokens=this.tokens.concat({
        token : token,
    });
     await this.save();
      return token; 
};    
const Users=mongoose.model('USERS',userSchema);

module.exports=Users;

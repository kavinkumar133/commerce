const mongoose=require('mongoose');
const cardSchema=new mongoose.Schema({
    user_id:{
        type:String,
        required:true
    },
    products:[{
        product_id:String,
        quntity:String
    }
]
})

module.exports=mongoose.model('cart',cardSchema);
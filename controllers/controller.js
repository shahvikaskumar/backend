const {Product} = require("../models/product_model")

const getdata = async(req, res) => {
    try{
        
        const products = await Product.find()
        .populate('category', 'name')
        .populate('group', 'name')
        
        
        return res.status(500).json({status:false, data:{message:"all data get", data:products}})

    }
    catch(error){
        console.log(error)
        return res.status(500).json({status:false, data:{message:"Internal server error"}})
    }
}

module.exports = {getdata}
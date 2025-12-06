const Product=require("../models/Product");

const getProducts=async(req,res)=>{
try{
    const filter={};
    if (req.query.category) filter.category = req.query.category;
    if (req.query.subcategory) filter.subcategory = req.query.subcategory;
   const data=await Product.find(filter).sort({createdAt:-1});
return res.status(200).json({data});
}
catch(err){
    return res.status(401).json({message:"Server Internal Error"});
}
};

module.exports=getProducts;
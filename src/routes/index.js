const { Router }=require('express');
const router=Router();

router.get('/', (req,res)=>{
    const data={
        "name ":"Mcastrox",
    };
    res.json(data);
});

module.exports=router;
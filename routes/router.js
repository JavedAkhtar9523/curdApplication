const express=require('express');
const User=require('../models/userSchema');

const router=express.Router();

// router.get('/',(req,res)=>{
//     res.send('Hello World');
// })


router.post('/register',async(req,res)=>{
    // res.send(req.body);
    const {name,email,age,mobile,work,add,desc}=req.body;
    if(!name || !email || !age || !mobile || !work || !add || !desc){
        res.status(404).json('All fields are mendatory');
    }
    try{
        const existUser=await User.findOne({email:email});
        if(existUser){
            res.status(404).json('user already exist');
        }
        else{
            const result= new User({
                name,email,age,mobile,work,add,desc
            })
            await result.save();
            res.status(201).json(result);
            console.log(result);
        }

    }catch(err){
        res.status(404).json(err.meassage);
    }
})

//get user data

router.get('/getdata',async(req,res)=>{
    try {
        const getdata=await User.find();
        res.status(201).json(getdata);
        console.log(getdata);
    } catch (error) {
        res.status(404).json(err.meassage);
    }
})


//get indivisula user
router.get('/getuserdata/:id',async(req,res)=>{
    try {
        console.log(req.params);
        const {id}=req.params;

        const userindivisual=await User.findById({_id:id});
        console.log(userindivisual);
        res.status(201).json(userindivisual);
    } catch (error) {
        res.status(404).json(error);
    }
})

//update data

router.patch('/update/:id',async(req,res)=>{
    try {
        const {id}=req.params;
        const updateuser=await User.findByIdAndUpdate(id,req.body,{
                new:true
        })
        console.log(updateuser);
        res.status(201).send(updateuser);
    } catch (error) {
        res.status(404).json(error);
    }
})

//delete user

router.delete('/delete/:id',async(req,res)=>{
    try {
        const {id}=req.params;
        const deleteuser=await User.findByIdAndDelete({_id:id})
        console.log(deleteuser);
        res.status(201).send(deleteuser);
    } catch (error) {
        res.status(404).json(error);
    }
})

module.exports=router;
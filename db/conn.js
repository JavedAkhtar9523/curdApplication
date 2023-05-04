const mongoose=require('mongoose');

const DB='mongodb+srv://javed09523:javed09523@cluster0.uspmu7j.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(DB).then(()=>{
    console.log('DB connected successfully');
}).catch((err)=>{
    console.log(err);
})
const mongoose = require('mongoose');
async function main(){
    await mongoose.connect('mongodb+srv://imshu:<Shudh@99553>@cluster0.8g5s4ea.mongodb.net/?retryWrites=true&w=majority');
    console.log("connection Successfull !! ");
}
main().catch(error =>console.log("connection not successfull !!"));
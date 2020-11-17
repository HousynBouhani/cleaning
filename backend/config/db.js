import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const conx = await mongoose.connect(process.env.MONGO_URI,{
            useUnifiedTopology:true,
            useNewUrlParser:true,
            useCreateIndex:true,
            useFindAndModify: false 
        }); 

    console.log(`MongoDB Connected to ${conx.connection.host}`)
    } catch (error) {
        console.error(`Error:${error.message}`)
        process.exit(1);
    }
}


export default connectDB;
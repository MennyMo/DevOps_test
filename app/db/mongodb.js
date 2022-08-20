import mongoose from "mongoose";
import config from "../config/env";


const { DATABASE_URL } = config;

export default () => {
    console.log('Mongodb connecting...');

    mongoose.connect(DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true

    }, error => {
        if (error) {
            console.log('Error connecting to Mongodb.');
            return;
        }
        console.log('Mongodb connected successfully.');
    });
};

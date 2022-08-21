import fs from 'fs';
import readline from 'readline';
import UserModel from '../models/user';

// load the data into the db... 
// use file system (fs) to load the data into the db

export default async function loadData() {
    // let's ensure our system doesn't load data twice.
    // we will first check if there's data in the DB before we continue to load data
    
    // first, find all the users in the db
    const users = await UserModel.find({});
    console.log(users, 'users');
    
    // check whether there is more than one user in the db
    if (users.length > 0) {
        console.log('data already loaded')
        return;
    }

    // create a stream (or tunnel) that allows us to read the data in the csv file
    const stream = fs.createReadStream('./app/db/data.csv');
    // prepare the readline method to create methods (listeners) for reading each line
    const rl = readline.createInterface({ input: stream });

    rl.on("line", async (line) => {
        // every time we read a line, we want to get the id and name that is separated (split) 
        // by the ','. We can then destructure those values into id (as the first value in the array)
        // and name (as the second value in the array)
        const [id, name] = line.split(',');

        // we want to make sure we are not storing "id" and "name" (that is, the headers) as values in the DB
        if (id !== 'id' && name !== 'name') {
            data.push({id, name});
            // now we can create the user
            await UserModel.create(
                { 
                    id: parseInt(id), 
                    name
                }
            );
        }
    });

    // just a nice way to view our data once we are done reading the file
    rl.on('close', () => {
        console.log('data' ,data);
    });
}

// to test this out, you might want to delete everything in the DB first and then try it out;
// THIS FILE IS CALLED IN THE mongodb.js FILE
import mongoose, { mongo } from 'mongoose';

import constants from './constants';

// Remove the warning with Promise
mongoose.Promise = global.Promise;

// Connect the db with url provide
try {
    mongoose.connect(constants.MONGO_URL);
} catch (err) {
    mongoose.createConnection(constants.MONGO_URL);
}

mongoose.connection
    .once('open', () => console.log('MongoDB Running'));


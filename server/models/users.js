import mongoose from 'mongoose';
const { Schema } = mongoose;

const usersShema = new Schema({
    firstName: String,
    lastName: String
});

const usersModel = mongoose.model('users', usersShema);

export default usersModel;
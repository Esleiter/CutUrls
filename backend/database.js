import mongoose from 'mongoose';
mongoose.connect('mongodb://localhost/nameOfYourDb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(db => console.log('Db is connected'))
.catch(err => console.log(err));
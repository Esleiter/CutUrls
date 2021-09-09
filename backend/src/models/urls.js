import mongoose from "mongoose"; 
const { Schema } = mongoose;
const urlsSchema = new Schema({
    url: { type: String, required: true },
    code: { type: String, required: true },
    date : {type : Date, default : Date.now}
});
const urls = mongoose.model('urls', urlsSchema);
export default urls;
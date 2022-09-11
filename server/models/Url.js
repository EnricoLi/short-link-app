import mongoose from "mongoose";

const urlSchema = mongoose.model("Url", {
    url: String,
    short_url: String
})

export default urlSchema;
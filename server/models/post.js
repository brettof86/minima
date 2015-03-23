var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var uuid = require("node-uuid");

var PostSchema = new Schema({
    identifier: {
        type: String,
        default: uuid
    },
    title: {
        type: String,
        required: true,
        unique: true,
    },
    slug: {
        type: String,
        unique: true,
        index: true,
        required: true,
    },
    createDate: {
        type: Date,
        default: Date.now
    },
    modifiedDate: {
        type: Date,
        default: Date.now
    },
    content: {
        type: String,
        required: true
    },
    tags: Array,
});

PostSchema.static("findBySlug", function (slug, callback) {
    return this.find({ slug: slug }, callback);
});

module.exports = mongoose.model("Post", PostSchema);

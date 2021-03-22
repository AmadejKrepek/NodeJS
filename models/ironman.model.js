module.exports = mongoose => {
    const { Schema } = mongoose
    const MyModel = mongoose.model('ironmans', new Schema({ name: String }));
    return MyModel;
};
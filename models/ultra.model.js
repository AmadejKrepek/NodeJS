export default mongoose => {
    const { Schema } = mongoose
    const MyModel = mongoose.model('ultras', new Schema(
        {
            Rank: String,
            Overall: String,
            Competitor: String,
            Country: String,
            Age_Category: String,
            Swim: String,
            Trans1: String,
            Bike: String,
            Trans2: String,
            Run: String,
            Finish: String,
            Comment: String,
        }
    ));
    return MyModel;
};
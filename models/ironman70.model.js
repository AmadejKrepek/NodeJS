export default mongoose => {
    const { Schema } = mongoose
    const MyModel = mongoose.model('70ironmans', new Schema(
        {
            name: String,
            genderRank: String,
            divRank: String,
            overallRank: String,
            bib: String,
            division: String,
            age: String,
            state: String,
            country: String,
            profession: String,
            points: String,
            swim: String,
            swimDistance: String,
            t1: String,
            bike: String,
            bikeDistance: String,
            t2: String,
            run: String,
            runDistance: String,
            overall: String
        }
    ));
    return MyModel;
};
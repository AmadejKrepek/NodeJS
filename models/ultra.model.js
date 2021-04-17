/*
export default mongoose => {
    const { Schema } = mongoose
    const MyModel = mongoose.model('ultras', new Schema(
        {
            Rank: Number,
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
*/

//To je nova verzija, če ne bo delovala prešaltaj na staro!
const mongoosePaginate = require("mongoose-paginate-v2");
export default mongoose => {
    const schema = new mongoose.Schema({
        Rank: Number,
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
      });
       
      schema.plugin(mongoosePaginate);
       
      const MyModel = mongoose.model("ultras", schema);

      MyModel.paginate({}, { limit: 5 })
      .then(result => {
          //console.log(result);
      })
      .catch(err => console.log(err));

      return MyModel;
}
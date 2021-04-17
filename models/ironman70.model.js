/*
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
*/
//To je nova verzija, če ne bo delovala prešaltaj na staro!
const mongoosePaginate = require("mongoose-paginate-v2");
export default mongoose => {
    const schema = new mongoose.Schema({
        name: String,
        genderRank: Number,
        divRank: String,
        overallRank: Number,
        bib: String,
        division: String,
        age: Number,
        state: String,
        country: String,
        profession: String,
        points: Number,
        swim: String,
        swimDistance: String,
        t1: String,
        bike: String,
        bikeDistance: String,
        t2: String,
        run: String,
        runDistance: String,
        overall: String
      });
       
      schema.plugin(mongoosePaginate);
       
      const MyModel = mongoose.model("70ironmans", schema);

      MyModel.paginate({}, { limit: 5 })
      .then(result => {
          //console.log(result);
      })
      .catch(err => console.log(err));

      return MyModel;
}
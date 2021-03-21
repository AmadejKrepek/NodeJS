module.exports = mongoose => {
    const Tutorial = mongoose.model(
      "ironman",
      mongoose.Schema(
        {
          name: String,
          division: String,
          bikeDistance: String
        },
        { timestamps: true }
      )
    );
  
    return Tutorial;
  };
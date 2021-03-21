export default mongoose => {
    const IronMan = mongoose.model(
        "ironman",
        mongoose.Schema(
            {
                name: String,
                country: String,
                division: String
            },
            { timeStamps: true }
        )
    );
    return IronMan;
};
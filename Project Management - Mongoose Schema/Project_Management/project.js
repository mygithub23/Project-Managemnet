var project = new Schema({
    _id: {
        type: Schema.Types.ObjectId,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    requiredstack: [
        {
            type: Schema.Types.ObjectId
        }
    ],
    developers: [
        {
            type: Schema.Types.ObjectId
        }
    ],
    startdate: {
        type: Date
    },
    enddate: {
        type: Date
    }
});
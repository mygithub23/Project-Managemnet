var developer = new Schema({
    _id: {
        type: Schema.Types.ObjectId,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    stacks: [
        {
            type: Schema.Types.ObjectId
        }
    ],
    projects: [
        new Schema({
            projectname: [
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
        })
    ]
});
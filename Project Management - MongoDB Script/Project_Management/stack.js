use Project_Management;

db.createCollection("stack", {
    "storageEngine": {
        "wiredTiger": {}
    },
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "stack",
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "name": {
                    "bsonType": "string"
                },
                "description": {
                    "bsonType": "string"
                }
            },
            "required": [
                "_id",
                "name"
            ]
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});
use Project_Management;

db.createCollection("project", {
    "storageEngine": {
        "wiredTiger": {}
    },
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "project",
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "name": {
                    "bsonType": "string"
                },
                "requiredstack": {
                    "bsonType": "array",
                    "additionalItems": true,
                    "items": {
                        "bsonType": "objectId"
                    }
                },
                "developers": {
                    "bsonType": "array",
                    "additionalItems": true,
                    "items": {
                        "bsonType": "objectId"
                    }
                },
                "startdate": {
                    "bsonType": "date"
                },
                "enddate": {
                    "bsonType": "date"
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
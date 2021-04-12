use Project_Management;

db.createCollection("developer", {
    "storageEngine": {
        "wiredTiger": {}
    },
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "developer",
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "name": {
                    "bsonType": "string"
                },
                "stacks": {
                    "bsonType": "array",
                    "additionalItems": true,
                    "items": {
                        "bsonType": "objectId"
                    }
                },
                "projects": {
                    "bsonType": "array",
                    "additionalItems": true,
                    "items": {
                        "bsonType": "object",
                        "properties": {
                            "projectname": {
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
                        }
                    }
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
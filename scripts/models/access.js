module.exports = {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["key", "user"],
            properties: {
                token: {
                    bsonType: "string",
                    // pattern: /^[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)?$/,
                    description: "The secret api key user to authenticate him."
                },
                user: {
                    bsonType: "string",
                    description: "The user who want to access the api."
                }
            }
        }
    },
    validationLevel: "strict",
    validationAction: 'warn'
}
module.exports = {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["forgotPassword", "expireAt"],
            properties: {
                forgotPassword: {
                    bsonType: "string",
                    description: "Token identifier for a specific request."
                },
                expireAt: {
                    bsonType: "date",
                    description: "The time when this request must expired."
                }
            },
        }
    },
    validationLevel: "strict",
    validationAction: 'warn'
}
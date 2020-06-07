module.exports = {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["token"],
            properties: {
                token: {
                    bsonType: "string",
                    pattern: /^[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)?$/,
                    description: "A specific JWT to identify user who can access API."
                }
            }
        }
    },
    validationLevel: "strict",
    validationAction: 'warn'
}
module.exports = {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["mail", "password", "username"],
      properties: {
        mail: {
          bsonType: "string",
          pattern: "/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/",
          description: "User email"
        },
        password: {
          bsonType: "string",
          minLength: 6,
          description: "User password hashed"
        },
        username: {
          bsonType: "string",
          description: "User username"
        }
      }
    }
  },
  validationLevel: "strict",
  validationAction: "warn"
}
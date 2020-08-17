module.exports = {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "surname", "city", "job", "description", "mail", "password", "cards"],
      properties: {
        name: {
          bsonType: "string"
        },
        surname: {
          bsonType: "string"
        },
        city: {
          bsonType: "string"
        },
        job: {
          bsonType: "string"
        },
        description: {
          bsonType: "string",
          maxLength: 300
        },
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
        cards: {
          bsonType: "array",
          uniqueItems: true,
          items: {
            bsonType: "objectId"
          }
        }
      }
    }
  },
  validationLevel: "strict",
  validationAction: "warn"
}
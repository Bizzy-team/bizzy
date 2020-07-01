module.exports = {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["mail", "password", "username", "ip"],
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
        },
        ip: {
          bsonType: "array",
          items: {
            bsonType: "string",
            pattern: "/^(?>(?>([a-f0-9]{1,4})(?>:(?1)){7}|(?!(?:.*[a-f0-9](?>:|$)){8,})((?1)(?>:(?1)){0,6})?::(?2)?)|(?>(?>(?1)(?>:(?1)){5}:|(?!(?:.*[a-f0-9]:){6,})(?3)?::(?>((?1)(?>:(?1)){0,4}):)?)?(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(?>\.(?4)){3}))$/"
          },
          uniqueItems: true,
        }
      }
    }
  },
  validationLevel: "strict",
  validationAction: "warn"
}
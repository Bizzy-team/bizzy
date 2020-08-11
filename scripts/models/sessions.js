module.exports = {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["userId", "key", "expireAt"],
      properties: {
        userId: {
          bsonType: "objectId",
          description: "The userId associated to his session."
        },
        key: {
          bsonType: "string"
        },
        expireAt: {
          bsonType: "date",
          description: "The time when this session must expired"
        }
      }
    }
  },
  validationLevel: "strict",
  validationAction: "warn" 
}
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

export const handler = async (event) => {
  try {
    const body = JSON.parse(event.body);

    const command = new PutCommand({
      TableName: "Bookings",
      Item: {
        id: Date.now().toString(),
        name: body.name,
        email: body.email,
        propertyId: body.propertyId,
        message: body.message,
        timestamp: new Date().toISOString()
      }
    });

    await docClient.send(command);

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ success: true, message: "Booking saved!" })
    };
  } catch (error) {
    console.error("Booking error:", error);
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ success: false, message: "Internal Server Error" })
    };
  }
};

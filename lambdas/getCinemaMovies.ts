import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, QueryCommand } from "@aws-sdk/lib-dynamodb";

const ddbClient = new DynamoDBClient({ region: process.env.REGION });
const ddbDocClient = DynamoDBDocumentClient.from(ddbClient);

export const handler: APIGatewayProxyHandlerV2 = async (event) => {
  try {
    const cinemaId = event.pathParameters?.cinemaId;
    const movieId = event.queryStringParameters?.movieId;

    if (!cinemaId) {
      return { statusCode: 400, body: JSON.stringify({ message: "cinemaId is required." }) };
    }

    const queryParams = {
      TableName: process.env.TABLE_NAME!,
      KeyConditionExpression: "cinemaId = :cinemaId",
      ExpressionAttributeValues: { ":cinemaId": Number(cinemaId) },
    };

    if (movieId) {
      queryParams.KeyConditionExpression += " AND movieId = :movieId";
      queryParams.ExpressionAttributeValues[":movieId"] = movieId;
    }

    const result = await ddbDocClient.send(new QueryCommand(queryParams));

    return { statusCode: 200, body: JSON.stringify(result.Items) };
  } catch (error) {
    console.error("[GET CINEMA MOVIES ERROR]", error);
    return { statusCode: 500, body: JSON.stringify({ message: "Internal Server Error" }) };
  }
};

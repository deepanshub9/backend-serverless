# Enterprise Web Development Exam Starter

## Overview

This project provides a starter template for a serverless REST API using AWS CDK, DynamoDB, and Lambda. The API manages cinema movie schedules, with infrastructure defined in TypeScript.

## Project Structure

- `bin/` - CDK app entry point ([bin/exam-app.ts](bin/exam-app.ts))
- `lib/` - CDK stack definition ([lib/exam-stack.ts](lib/exam-stack.ts))
- `lambdas/` - Lambda function handlers (e.g., [lambdas/getCinemaMovies.ts](lambdas/getCinemaMovies.ts))
- `seed/` - Seed data for DynamoDB ([seed/movies.ts](seed/movies.ts))
- `shared/` - Shared types and utilities ([shared/types.d.ts](shared/types.d.ts), [shared/util.ts](shared/util.ts))
- `test/` - Test files

## Setup

1. Clone this repository to your own GitHub account.
2. Install dependencies:
   ```sh
   npm install
   ```
3. Generate the JSON schema for shared types:
   ```sh
   npm run schema
   ```
4. Build the project:
   ```sh
   npm run build
   ```
5. Deploy the stack (requires AWS credentials):
   ```sh
   cdk deploy
   ```

## API


- Specific Movie by movieId
![Image](https://github.com/user-attachments/assets/00335047-1aa9-40a9-a3bb-a513bc8801dc)

- full Movies
![Image](https://github.com/user-attachments/assets/e1b82d06-e5df-4823-9f19-efc05b15c7b7)

- **GET /cinemas/{cinemaId}/movies**  
  Returns movies for a given cinema.  
  Query parameters:  
  - `movieId` (optional): filter by movie ID  
  - `period` (optional): filter by period

## Notes

- The DynamoDB table structure and seed data are defined in [lib/exam-stack.ts](lib/exam-stack.ts) and [seed/movies.ts](seed/movies.ts).
- The Lambda function logic is in [lambdas/getCinemaMovies.ts](lambdas/getCinemaMovies.ts).
- Update the `tsconfig.json` `include` section if you add new TypeScript source folders.

---
import dotenv from "dotenv";
dotenv.config();

import { createConnection } from "typeorm";
import { Options } from "graphql-yoga";
import app from "./app";
import connectionOptions from "./ormConfig";

const PORT: number | string = process.env.PORT || 4000;
const PLAYGROUND_ENDPOINT: string = "/playground";
const GRAPHQL_ENDPOINT: string = "/graphql";

const appOptions: Options = {
  port: PORT,
  playground: PLAYGROUND_ENDPOINT,
  endpoint: GRAPHQL_ENDPOINT
};

createConnection(connectionOptions).then(() => {
  app.start(appOptions, ({ port }) =>
    console.log(`Server is running on port ${port}`)
  );
});

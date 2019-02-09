import express from "express";
import { graphServer } from "./graphServer";
const app = express();
graphServer.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(
    `🚀 Server ready at http://localhost:4000${graphServer.graphqlPath}`
  )
);

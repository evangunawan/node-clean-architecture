import "reflect-metadata";
import { Server } from "./src/server";
import dotenv from "dotenv";

function bootstrap() {
  dotenv.config();
  Server.initializeServer();
}

bootstrap();

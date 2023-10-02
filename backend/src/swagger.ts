import swaggerAutogen from "swagger-autogen";
import dotenv from "dotenv";
dotenv.config();

const output = "./swagger.json";
const endpoints = ["./routes/*.*"];

const doc = {
  openapi: "3.0.0",
  info: {
    title: "GPTranslate API",
    version: "1.0.0",
    description: "API to request translations from Japanese to Portuguese.",
    license: {
      name: "Licensed Under MIT",
      url: "https://spdx.org/licenses/MIT.html",
    },
  },
  servers: [
    {
      url: process.env.HOST,
      description: process.env.HOST_DESC,
    },
  ],
  paths: {
    "/translations": {
      get: {
        tags: ["Prompt"],
        summary: "Get prompt list",
      },
      post: {
        tags: ["Translation"],
        summary: "Translate a given phrase from Japanese to Portuguese",
        parameters: [
          {
            name: "phrase",
            in: "body",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],        
      },
    },
  },
};

swaggerAutogen(output, endpoints, doc);

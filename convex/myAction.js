import { ConvexVectorStore } from "@langchain/community/vectorstores/convex";
import { action } from "./_generated/server.js";
import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
import { TaskType } from "@google/generative-ai";
import { v } from "convex/values";

export const ingest = action({
    args: {
        splitText: v.any(),
        fileId: v.string()
    },

    handler: async (ctx, args) => {
        await ConvexVectorStore.fromTexts(
            args.splitText, //array
            args.splitText.map(() => ({ fileId: args.fileId })),
            new GoogleGenerativeAIEmbeddings({
                apiKey: process.env.GOOGLE_API_KEY,
                model: "text-embedding-004", // 768 dimensions
                taskType: TaskType.RETRIEVAL_DOCUMENT,
                title: "Document title",
            }),
        { ctx }
    );
    return 'Completed'
  },
});

export const search = action({
    args: {
      query: v.string(),
      fileId: v.string()
    },
    handler: async (ctx, args) => {
      const vectorStore = new ConvexVectorStore(
        new GoogleGenerativeAIEmbeddings({
            apiKey: process.env.GOOGLE_API_KEY,
            model: "text-embedding-004", // 768 dimensions
            taskType: TaskType.RETRIEVAL_DOCUMENT,
            title: "Document title",
        }),
        { ctx });
  
      const results = await vectorStore.similaritySearch(args.query, 10);

      const filteredResults = results.filter(result => result.metadata.fileId === args.fileId);

      return JSON.stringify(filteredResults);
    },
  });
import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

// Function to add the notes to the database
export const AddNotes = mutation({
  args: {
    fileId: v.string(),
    notes: v.any(),
    createdBy: v.string(),
  },
  handler: async (ctx, args) => {
    const recordId = await ctx.db
      .query("notes")
      .filter((q) => q.eq(q.field("fileId"), args.fileId))
      .collect();

    if (recordId?.length == 0) {
        // Add new note
      await ctx.db.insert("notes", {
        fileId: args.fileId,
        notes: args.notes,
        createdBy: args.createdBy,
      });
    } else {
        // Update existing note
        await ctx.db.patch(recordId[0]._id, {
          notes: args.notes,
          createdBy: args.createdBy,
        });
    }
  },
});

// Function to get the notes from the database
export const GetNotes = query({
    args: {
      fileId: v.string(),
    },
    handler: async (ctx, args) => {
      const result = await ctx.db
        .query("notes")
        .filter((q) => q.eq(q.field("fileId"), args.fileId))
        .collect();
  
      return result[0]?.notes; // Return the first matching note
    },
  });

import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { toast } from "sonner";

export const createUser = mutation({
    args: {
        email: v.string(),
        userName: v.string(),
        imageUrl: v.string()
    },
    handler: async(ctx, args) => {
        //if user already exist
        const user = await ctx.db.query('users')
        .filter((q) => q.eq(q.field('email'), args.email))
        .collect();

        //if not, insert new entry
        if(user?.length == 0){
            await ctx.db.insert('users', {
                email: args.email,
                userName: args.userName,
                imageUrl: args.imageUrl,
                upgrade: false
            });

            return 'New user added'
        }

        return 'User already exists'
    }
})

export const userUpgradePlan = mutation({
    args: {
      userEmail: v.string()
    },
    handler: async (ctx, args) => {
      const result = await ctx.db
        .query("users")
        .filter((q) => q.eq(q.field("email"), args.userEmail))
        .collect();
  
      if (result.length === 0) {
        toast.error("User not found");
        return { success: false, message: "User not found" };
      }
  
      const userId = result[0]._id;
  
      await ctx.db.patch(userId, {
        upgrade: true
      });
  
      return { success: true, message: "User plan upgraded." };
    }
  });

  export const getUserInfo = query({
    args: {
      userEmail: v.string()
    },
    handler: async (ctx, args) => {
      const result = await ctx.db.query('users').filter((q) => q.eq(q.field('email'), args.userEmail)).collect();
      return result[0];
    }
  })
  
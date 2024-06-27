import { superbaseClient } from "@/app/lib/superbaseClient";
import prisma  from "@/app/lib/prismaClient"
const superbase = superbaseClient();

const resolvers = {
  Query: {
    allPosts: async () => {
      try {
        const posts = await prisma.post.findMany();
        return posts;
      } catch (error) {
        if (error instanceof Error) {
          throw new Error(error.message);
        } else {
          throw new Error('An unexpected error occurred');
        }
      }
    },

    allUsers: async () => {
      try {
        const users = await prisma.user.findMany();
        return users;
      } catch (error) {
        if (error instanceof Error) {
          throw new Error(error.message);
        }
        throw new Error('An unknown error occurred');
      }
    },

    user: async (_:any, {id}:{id: string}) => {
      try {
        const user = await prisma.user.findUnique({
          where: { id},
        });
        if (!user) throw new Error('No user found');
        return user;
      } catch (error) {
        if (error instanceof Error) {
          throw new Error(error.message);
        }
        throw new Error('An unknown error occurred');
      }
    },

    post: async (_:any ,{id}:{id: string}) => {
      try {
        const post = await prisma.post.findUnique({
          where: { id },
        });
        if (!post) throw new Error('No post found');
        return post;
      } catch (error) {
        if (error instanceof Error) {
          throw new Error(error.message);
        }
        throw new Error('An unknown error occurred');
      }
    },
  },
  Mutation: {
    createUser: async (_:any, { email, name, id}: { email: string; name: string; id:string }) => {
      try {
        const existingUser = await prisma.user.findFirst({
          where: {
            OR: [
              { email: email },
              { id: id }
            ]
          }
        });
        
        if (existingUser) {
          throw new Error('User already exists');
        }
  
        const user = await prisma.user.create({
          data: {
            id,
            email,
            name,
          },
        });
        if (!user) throw new Error('Failed to create user');
        return user;
      } catch(error) {
        if (error instanceof Error) {
          throw new Error(error.message);
        }
        throw new Error('An unknown error occurred');
      }
    },

    createPost: async (
      _: any,
      { authorId, title, content }: { authorId:string; title: string; content: string }
    ) => {
      try{
        const post = await prisma.post.create({
          data: {
            authorId,
            title,
            content,
          },
        });
        if(!post) throw new Error('Failed to create post');
        return post;
      }catch(error) {
        if (error instanceof Error) {
          throw new Error(error.message);
        }
        throw new Error('An unknown error occurred');
      }
    },
  },
};

export default resolvers;

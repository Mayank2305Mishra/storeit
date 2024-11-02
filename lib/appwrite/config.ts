export const appwriteConfig = {
  endpointUrl: process.env.NEXT_PUBLIC_ENDPOINT!,
  projectId: process.env.PROJECT_ID!,
  databaseId: process.env.DATABASE_ID!,
  usersCollectionId: process.env.USER_COLLECTION_ID!,
  filesCollectionId: process.env.NEXT_PUBLIC_APPWRITE_FILES_COLLECTION!,
  bucketId: process.env.NEXT_PUBLIC_APPWRITE_BUCKET!,
  secretKey: process.env.API_KEY!,
};

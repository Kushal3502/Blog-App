const conf = {
  appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
  appwrieProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  appwrieDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  appwrieCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
  appwrieBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
};

export default conf;

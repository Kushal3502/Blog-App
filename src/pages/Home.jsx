import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";

function Home() {
  const [posts, setPosts] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    appwriteService.allPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
        setLoader(false);
      }
    });
  }, []);

  return loader ? (
    <div className="w-full h-full flex items-center justify-center bg-gray-100">
      <p className="text-lg font-medium text-gray-700">Loading...</p>
    </div>
  ) : (
    <div className="w-full h-full py-8 bg-gray-100">
      <Container>
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Posts
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts && posts.length ? (
            posts.map(
              (post) =>
                post.status == "active" && (
                  <div key={post.$id} className="p-4">
                    <PostCard {...post} />
                  </div>
                )
            )
          ) : (
            <p className="text-center text-gray-500 w-full col-span-full">
              No posts available
            </p>
          )}
        </div>
      </Container>
    </div>
  );
}

export default Home;

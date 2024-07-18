import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Button, Container, PostCard } from "../components";
import authService from "../appwrite/auth";
import { Link } from "react-router-dom";

function AllPosts() {
  const [posts, setPosts] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    authService.getCurrentUser().then((user) =>
      appwriteService.getUserPosts(user.$id).then((posts) => {
        if (posts) {
          setPosts(posts.documents);
          setLoader(false);
        }
      })
    );
  }, []);

  console.log(posts);
  return loader ? (
    <div className="w-full h-full flex items-center justify-center bg-gray-100">
      <p className="text-lg font-medium text-gray-700">Loading...</p>
    </div>
  ) : (
    <div className="h-full py-8 bg-gray-100">
      <Container>
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
          My Posts
        </h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts && posts.length ? (
            posts.map((post) => <PostCard key={post.$id} {...post} />)
          ) : (
            <div className="col-span-full flex flex-col items-center">
              <p className="text-center text-gray-500 mb-4">
                No posts available
              </p>
              <Link to={"/add-post"}>
                <Button>Create post</Button>
              </Link>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;

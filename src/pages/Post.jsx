import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";

function Post() {
  const [post, setPost] = useState(null);
  const navigate = useNavigate();
  const { slug } = useParams();
  const user = useSelector((state) => state.auth.userData);
  const isAuthor = user && post ? user.$id === post.userId : false;

  console.log(user, post);

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((res) => {
        if (res) {
          setPost(res);
        } else {
          navigate("/error");
        }
      });
    } else {
      navigate("/error");
    }
  }, [slug, navigate]);

  const deletePost = () => {
    appwriteService.deletePost(slug).then((res) => {
      if (res) {
        appwriteService.deleteFile(post.featuredImage);
        navigate("/");
      }
    });
  };

  return post ? (
    <div className="w-full h-full py-4">
      <Container>
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2">
            <img
              src={appwriteService.getFilePreview(post.featuredImage)}
              alt={post.title}
              className="w-full h-4/6 object-cover shadow-lg overflow-hidden rounded-xl"
            />
            {isAuthor && (
              <div className="mt-4 flex space-x-4">
                <Link to={`/edit-post/${post.$id}`}>
                  <Button className="bg-green-500 text-white">Edit</Button>
                </Link>
                <Button className="bg-red-500 text-white" onClick={deletePost}>
                  Delete
                </Button>
              </div>
            )}
          </div>
          <div className="w-full lg:w-1/2 lg:pl-8 mt-4 lg:mt-0">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              {post.title}
            </h1>

            <div className="text-gray-800 leading-relaxed space-y-4">
              {parse(post.content)}
            </div>
          </div>
        </div>
      </Container>
    </div>
  ) : (
    <div className="w-full h-full flex items-center justify-center bg-gray-100">
      <p className="text-lg font-medium text-gray-700">Loading...</p>
    </div>
  );
}

export default Post;

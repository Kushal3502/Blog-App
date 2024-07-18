import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Container, PostForm } from "../components";

function EditPost() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => setPost(post));
    } else {
      navigate("/error");
    }
  }, []);

  return (
    post && (
      <div className="w-full h-full pt-1">
        <Container>
          <PostForm post={post} />
        </Container>
      </div>
    )
  );
}

export default EditPost;

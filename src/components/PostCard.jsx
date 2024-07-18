import React from "react";
import { Link } from "react-router-dom";
import appwriteService from "../appwrite/config";

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link
      to={`/post/${$id}`}
      className="block bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-xl hover:border-gray-400"
    >
      <div className="relative">
        <div className="relative h-48 overflow-hidden">
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40" />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-900 ">
          {title}
        </h2>
      </div>
    </Link>
  );
}

export default PostCard;

import React from "react";
import Layout from "../components/Layout";
import Post from "../components/Post";
import { getAllPostData } from "../lib/post";

const Blog = ({ posts }) => {
  return (
    <Layout title="Blog">
      <ul className="m-10">
        {console.log("aaa")}
        {posts && posts.map((post) => <Post key={post.id} post={post} />)}
      </ul>
    </Layout>
  );
};

export default Blog;

export async function getStaticProps() {
  const posts = await getAllPostData();
  return {
    props: { posts },
  };
}

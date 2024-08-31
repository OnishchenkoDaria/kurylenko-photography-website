import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PostCard from "./PostCard";
import postService from "../services/posts";
import "../styles/PostCreateModal.css";

const PostDisplayBlog = () => {
  const [posts, setPosts] = useState([]);

  // TO DO: get rid of the useEffect hook
  // make it onChange

  useEffect(() => {
    const getPosts = async () => {
      setPosts(await postService.getAllPosts());
    };
    getPosts();
  }, [posts]);

  return (
    <Container lg={8} fluid="md">
      {posts.length > 0 && (
          <Row className="justify-content-center">
            {posts.map((post, index) => {
              return (
                  <Col sm={6} lg={4} key={index}>
                    <PostCard id={post._id.toString()} />
                  </Col>
              );
            })}
          </Row>
      )}
      {posts.length === 0 && (
          <p className='text-neutral-500'>No posts yet</p>
      )}
    </Container>
  );
};

export default PostDisplayBlog;

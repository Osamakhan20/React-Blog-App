import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  if (posts.length === 0) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              <h1 className="text-2xl font-bold hover:text-gray-500">
                Login to read posts
              </h1>
            </div>
          </div>
        </Container>
      </div>
    );
  }
  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;

/*
What This Component Does in my Project
The Home component is responsible for displaying a list of posts on the home page of your project. Here's what it does:

Fetches Posts: When the component mounts, it fetches the posts from the backend using the appwriteService.getPosts method.
Updates State: Once the posts are fetched, it updates the posts state with the fetched data.
Conditional Rendering:
If there are no posts, it displays a message prompting the user to log in to read posts.
If there are posts, it displays a list of PostCard components, each representing a post.
Renders Posts: Maps over the posts array and renders a PostCard component for each post, displaying them in a grid layout.
This component is crucial for the main functionality of your project, as it serves as the entry point for users to view the available posts.
*/
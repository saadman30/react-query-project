import { useQuery } from "@tanstack/react-query";

const POSTS = [
  {
    id: 1,
    title: "Post 1",
  },
  {
    id: 2,
    title: "Post 2",
  },
];

function App() {
  const postsQuery = useQuery({
    queryKey: ["posts"],
    queryFn: () =>
      new Promise((resolve) => {
        setTimeout(() => {
          resolve([...POSTS]);
        }, 1000);
      }),
  });

  if (postsQuery.isLoading) return <h1>Loading...</h1>
  if (postsQuery.isError) return <pre>{JSON.stringify(postsQuery.error)}</pre>
  return <div>
    {
      postsQuery.data.map(post=>(
        <div key={post.id}>
          {post.title}
        </div>
      ))
    }
  </div>;
}

export default App;

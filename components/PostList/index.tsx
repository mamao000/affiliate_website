import { useQuery, gql } from "@apollo/client";

const GET_POSTS = gql`
  query {
    posts {
      id
      title
      content
      created_at
    }
  }
`;

const PostList = () => {
  const { loading, error, data } = useQuery(GET_POSTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {data.posts.map(
        (post: {
          id: string;
          title: string;
          content: string;
          created_at: string;
        }) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <p>{post.created_at}</p>
          </li>
        )
      )}
    </ul>
  );
};

export default PostList;

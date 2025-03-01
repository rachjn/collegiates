export default async function News() {
  let data = await fetch("http://localhost:8000/collegiates_app/blog_data/");
  let posts = await data.json();

  let college_data = await fetch(
    "http://localhost:8000/collegiates_app/college_data/"
  );
  let colleges = await college_data.json();

  return (
    <ul>
      {posts.map((post) => (
        <div key={post.post_id}>
          <li>{post?.author}</li>
          <li>{post.category}</li>
          <li>{post.title}</li>
          <li>{post.post_content}</li>
          <li>{post.date_posted}</li>
        </div>
      ))}
      {JSON.stringify(colleges)}
    </ul>
  );
}

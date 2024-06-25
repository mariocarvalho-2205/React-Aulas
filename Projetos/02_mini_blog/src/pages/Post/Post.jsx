import styles from "./Post.module.css";
import { useFetchDocument } from "../../hooks/useFetchDocument";

import { useParams } from "react-router-dom";

const Post = () => {
  const { id } = useParams();
  const { document: post, loading } = useFetchDocument("posts", id);
//   console.log(post);
  return (
    <div className={styles.post_container}>
      {loading && <p>Carregando Post...</p>}
      {post && (
        <>
          <h1>{post.title}</h1>
          <img src={post.image} alt={post.title} />
          <p>{post.body}</p>
          <h3>Este post trata sobre:</h3>
          <div className={styles.tags}>
            {post.tags &&
              post.tags.map((tag) => (
                <p key={tag}>
                  <span>#</span>
                  {tag}
                </p>
              ))}
          </div>
          <p>{post.createdBy}</p>
        </>
      )}
    </div>
  );
};

export default Post;

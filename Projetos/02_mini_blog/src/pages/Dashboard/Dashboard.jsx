import styles from "./Dashboard.module.css";
import { Link, useNavigate } from "react-router-dom";

import { useAuthValue } from "../../context/AuthContext";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useDeleteDocument } from "../../hooks/useDeleteDocument";

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useAuthValue();
  const uid = user.uid;

  const { deleteDocument } = useDeleteDocument("posts", uid);

  const {
    documents: posts,
    loading,
    error,
  } = useFetchDocuments("posts", null, uid);



  if (loading) {
    return (
      <div className={styles.loading}>
        <p>Carregando...</p>
      </div>
    );
  }

  return (
    <div className={styles.dashboard}>
      <h1>Dashboard</h1>
      <p>Gerencie seus posts</p>
      {posts && posts.length === 0 ? (
        <div className={styles.noposts}>
          <p>Você ainda não tem nenhum post</p>
          <Link to="/posts/create" className="btn">
            Criar primeiro post
          </Link>
        </div>
      ) : (
        <>
          <div className={styles.post_header}>
            <span>Titulo</span>
            <span>Ações</span>
          </div>
          {posts &&
            posts.map((post) => (
              <div key={post.id} className={styles.post_row}>
                <p>{post.title}</p>
                <div>
                  <Link to={`/posts/${post.id}`} className="btn btn-outline">
                    Ver
                  </Link>
                  <Link
                    to={`/posts/edit/${post.id}`}
                    className="btn btn-outline"
                  >
                    Editar
                  </Link>
                  <button
                    className="btn btn-outline btn-danger"
                    onClick={() => deleteDocument(post.id)}
                  >
                    Excluir
                  </button>
                </div>
                {error && <p className="error">{error}</p>}
              </div>
            ))}
        
        </>

      )}

    </div>
  );
};

export default Dashboard;

import { Link } from "react-router-dom"
import styles from "./Search.module.css"
import PostDetail from '../../components/PostDetail/PostDetail'


import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import { useQuery } from '../../hooks/useQuery'
import { query } from 'firebase/firestore'


const Search = () => {
    const query = useQuery()
    const search = query.get('q')

    const { documents: posts } = useFetchDocuments("posts", search)

  return (
    <div className={styles.search_container}>
        <h1>Search</h1>
        {posts && posts.length === 0 && (
            <div className={styles.noposts}>
                <p>Não foram encontrados posts para: {search}</p>
                <Link to="/" className="btn">Voltar</Link>
            </div>
        )}
        {posts && posts.map((post) => (
          <div key={post.id} className={styles.post_header}>
            <PostDetail key={post.id} post={post} />
          </div>
        ))}
    </div>
  )
}

export default Search
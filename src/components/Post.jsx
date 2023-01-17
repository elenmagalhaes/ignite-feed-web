import { Comment } from './Comment';
import { Avatar } from './Avatar';
import styles from './Post.module.css';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://github.com/maykbrito.png"/>
                    <div className={styles.authorInfo}>
                        <strong>Elen Magalhães</strong>
                        <span>Web developer</span>
                    </div>
                </div>

                <time title='16 de janeiro às 21:10' dateTime='2023-01-16 21:10:45'>Publicado há 1 hora</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p><a href="#">jane.design/doctorcare</a></p>
                <p>
                    <a href="#">#novoprojeto</a>{' '}
                    <a href="#">#nlw</a>{' '}
                    <a href="#">#rocketseat</a>
                </p>
            </div>

            <form className={styles.discussionForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    placeholder='Escreva um comentário...'
                />
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}
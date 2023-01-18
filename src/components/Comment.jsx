import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

export function Comment({ content }) {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/elenmagalhaes.png" />

      <div className={styles.commentContent}>
        <div className={styles.commentBox}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Elen Magalhães</strong>
              <time
                title="16 de janeiro às 21:10"
                dateTime="2023-01-16 21:10:45"
              >
                Cerca de 1 hora atrás
              </time>
            </div>
            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}

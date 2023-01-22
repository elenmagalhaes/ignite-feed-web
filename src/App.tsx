import { Post } from './components/Post'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'
import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/elenmagalhaes.png',
      name: 'Elen Magalhães',
      role: 'Software Engineer III',
    },
    content: [
      { type: 'paragraph', content: 'Fala pessoal 👋' },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz como desafio do curso de Ignite da Rocketseat. O nome do projeto é TodoList 🚀',
      },
      { type: 'link', content: 'https://todo-list-app-hazel.vercel.app' },
    ],
    publishedAt: new Date('2023-01-22 12:00:00'),
  },
]
console.log(posts)
function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

export default App

import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

import styles from './App.module.css';
import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/guilherme-studier.png',
      name: 'Guilherme Studier',
      role: 'Programador Front-End'
    },
    content: [
      { type: 'paragraph', content: 'Fala Galera!' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portfolio. É um projeto que fiz na NLW Return. Evento de aprendizagem em react da Rocketseat.' },
      { type: 'link', content: 'guilherme-studier/projeto' },
      { type: 'link', content: '#novoprojeto #nlw #rocketseat' },
    ],
    publishedAt: new Date('2022-05-12 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/thiagostudier.png',
      name: 'Thiago',
      role: 'Programador Front-End'
    },
    content: [
      { type: 'paragraph', content: 'Fala Time!' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portfolio. É um projeto que fiz na NLW Return. Evento de aprendizagem em react da Rocketseat.' },
      { type: 'link', content: 'guilherme-studier/projeto' },
      { type: 'link', content: '#novoprojeto #nlw #rocketseat' },
    ],
    publishedAt: new Date('2022-06-12 20:00:00'),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
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
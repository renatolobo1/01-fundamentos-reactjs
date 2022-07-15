import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment({content}){
  return (
    <div className={styles.comment}>
       <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/33937166?v=4"/>
       <div className={styles.commentBox}>
       <div className={styles.commentContent}>
        <header>
          <div className={styles.authorAndTime}>
            <strong>Renato Lôbo</strong>
            <time title='11 de julho as 08:57' dateTime="2022/07/11 08:57">Cerca de 1h atrás</time>
          </div>
          <button title="Deletar Comentário">
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
  );
}
import styles from './Post.module.css';

export function Post() {
    
    return (
        <article className={styles.post}>
           <header>
            <div className={styles.author}>
                <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/33937166?v=4" />
                <div className={styles.authorInfo}>
                    <strong>Renato Lôbo</strong>
                    <span>Analista de Sistema</span>
                </div>
            </div>

            <time title='11 de julho as 08:57' dateTime="2022/07/11 08:57">Publicado há 1h</time>
           </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉<a href=""> jane.design/doctorcare</a></p>
                <p>
                    <a href="">#novoprojeto </a>
                    <a href="">#nlw </a>
                    <a href="">#rocketseat </a>
                    </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea 
                    placeholder='Deixe um comentario'
                />
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
                
            </form>

        </article>    
    )
}

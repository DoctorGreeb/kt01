import styles from './Article.module.css';
export default function Article(props) {
    return (
        <section className={styles.article}>
            <div className={styles.articleLeft}>
                <div className={styles.articleText}>
                    <div className={styles.articleDescription}>
                        <p>{props.text}</p>
                        
                        
                        <p>{props.text2}</p>
                        
                        
                    </div>
                </div>
            </div>
        </section>
    );
}
import styles from './SubBody.module.css';
export default function SubBody(props) {
    return (
        <section className={styles.SubBody}>
            <div className={styles.SubBodyLeft}>
                <div className={styles.SubBodyText}>
                    <hr />
                    <h2>{props.text}</h2>
                </div>
                <div className={styles.SubBodyText2}>
                    <p>{props.text2}</p>

                </div>
            </div>
            <div className={styles.SubBodyRight}>
                <img src="./image1.png" alt="Велосипед" />
            </div>
        </section>
    );
}
import styles from './SubBody.module.css';
export default function SubBody() {
    return (
        <section className={styles.SubBody}>
            <div className={styles.SubBodyLeft}>
                <div className={styles.SubBodyText}>
                    <hr />
                    <h2>SubBody</h2>
                </div>
                <div className={styles.SubBodyText2}>
                    <h6>В нашей мастерской можно выполнить комплексное техническое обслуживание велосипеда, ремонт и настройку всех его узлов, шиномонтажные работы. Вовремя проведенное ТО велосипеда помогает избежать многих проблем и дорогого ремонта.  Все работы выполняем качественно и с душой. </h6>

                </div>
            </div>
            <div className={styles.SubBodyRight}>
                <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="Велосипед" />
            </div>
        </section>
    );
}
import { useState } from 'react';
import styles from './body.module.css';

export default function Body(props) {
  // const [inputValue, setInputValue] = useState('');
  // const [items, setItems] = useState([]);

  // const handleAdd = () => {
  //   if (inputValue.trim() !== '') {
  //     setItems([...items, inputValue]);
  //     setInputValue('');
  //   }
  // };

  return (
    <section className={styles.body}>
      {/* <div className={styles.inputSection}>
        <div className={styles.inputHeader}>
          <hr className={styles.divider} />
          <h2>Body</h2>
        </div>
        {/* <div className={styles.inputContainer}>
          <input
            type="text"
            placeholder="Введите текст"
            className={styles.input}
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
          />
          <button className={styles.button} onClick={handleAdd}>
            Добавить
          </button>
        </div> */}
        {/* {items.length > 0 && (
          <ol className={styles.list}>
            {items.map((item, idx) => (
              <li key={idx} className={styles.listItem}>{item}</li>
            ))}
          </ol>
        )}
      </div> */}
      
      <div className={styles.mainContent}>
        <div className={styles.textContent}>
          <div className={styles.companyText}>{props.text2}</div>
          <div className={styles.companyDescriptionText}>
            <p>{props.text}</p>
          </div>
        </div>
        <div className={styles.imageContent}>
          <img 
            className={styles.image}
            src="./din1.png"
            alt="Велосипед"
          />
        </div>
      </div>
    </section>
    
  );
}
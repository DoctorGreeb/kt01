import { useState } from 'react';
import styles from './body.module.css';
export default function Body() {
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([]);

  const handleAdd = () => {
    if (inputValue.trim() !== '') {
      setItems([...items, inputValue]);
      setInputValue('');
    }
  };

  return (
    <section className={styles.body}>
      <div className={styles.inputText}><h2>Body</h2>
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
        <ol>
          {items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ol>
      </div>
      <div className={styles.mainMidText}>
        <div className={styles.midText}>
          <div className={styles.companyText}>Веломастерская Велозар</div>
          <div className={styles.companyDescriptionText}>Мы, мастера веломастерской «Велозар», как раз те самые счастливые люди, которые смогли превратить свое увлечение и хобби в профессию. Мы сами любим кататься и хотим чтобы Ваш двухколесный друг приносил Вам только радость и удовольствие от езды.</div>
        </div>
        <div className={styles.midTextRight}>lorem ipsum
          <img className={styles.image}
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
            alt="Велосипед"
          />

        </div>
      </div>
      
    </section>
  );
}
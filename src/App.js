import './App.css';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import SubBody from './components/SubBody/SubBody';
import Article from './components/Article/Article';
import Article2 from './components/Article2/Article2';
function App() {
  return (
    <div className="App">


      <Header text1="О нас" text2="Услуги" text3="Аренда" text4="Связаться" />
      <div className="Middle">
        <Body text="Мы, мастера веломастерской «Велозар», как раз те самые счастливые люди, которые смогли превратить свое увлечение и хобби в профессию. Мы сами любим кататься и хотим чтобы Ваш двухколесный друг приносил Вам только радость и удовольствие от езды." text2="Веломастерская Велозар" />
      </div>
      <div className="SubMiddle">
        <SubBody text="Что мы предлагаем" text2="В нашей мастерской можно выполнить комплексное техническое обслуживание велосипеда,
                        ремонт и настройку всех его узлов, шиномонтажные работы. Вовремя проведенное ТО
                        велосипеда помогает избежать многих проблем и дорогого ремонта.
                        Все работы выполняем качественно и с душой."/>
      </div>

      <Article text="Приехав к нам однажды, многие наши клиенты становятся постоянными, а часть из них даже друзьями." text2="А также в нашей мастерской можно отремонтировать электросамокат и электровелосипед." />
      <Article2 text="Годовое ТО" text2="Выравнивание колес" text3="Настройка переключателей" />
      <Footer text="Прокат велосипедов" text2="У нас вы можете взять на прокат хорошо обслуженные и настроенные велосипеды. Как раз мы находимся в прекрасном парке!" />
    </div>
  );
}

export default App;

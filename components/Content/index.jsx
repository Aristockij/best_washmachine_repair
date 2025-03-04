import Swiper from "../Swiper";
import Form from "../Form";

const Index = () => {
  return (
    <main className='container'>
      <section className='section'>
        <div>
          <h1>Ремонт стиральных машин в Кирове</h1>
          <h2>
            Выезд мастера за 30 минут <br />
            Гарантия до 12 месяцев!
          </h2>

          <button>оставить заявку</button>
        </div>
      </section>
      <section id='primary' className='section'>
        <h2>Преимущества (Почему мы?)</h2>
        <ul>
          <li>📍 Выезд по всему городу</li>
          <li>⚡ Срочный ремонт от 30 минут</li>
          <li>✅ Гарантия на услуги</li>
          <li>💰 Честные цены, без скрытых платежей</li>
          <li>🕰️ Работаем более 5 лет</li>
          <li>🕰️ С нами работают только серьезные люди</li>
        </ul>
        <div className='img__wrap'>
          <img src='/images_kek/deal.jpg' alt='deal' />
        </div>
      </section>
      <section id='service' className='section'>
        <h2>Сервис услуг:</h2>
        <div>
          <ul>
            <li>Диагностика машины при условии ремонта - Бесплатно</li>
            <li>Замена ТЭН - от 2 000 ₽</li>
            <li>Замена подшипников - от 3 500 ₽ </li>
            <li>Не сливает воду - от 1 500 ₽</li>
            <li>Ремонт двигателя - от 1 700 ₽</li>
            <li>Сфотографироваться со мной - бесценно</li>
          </ul>
        </div>
        <div className='img__wrap img__wrap--sm'>
          <img src='/images_kek/swag.jpg' alt='swag' />
        </div>
      </section>

      <section id='recommend' className='section'>
        <h2>Отзывы клиентов:</h2>
        <Swiper />
      </section>

      <section id='form' className='section'>
        <Form />
      </section>
    </main>
  );
};
export default Index;

import SwiperContent from "../SwiperContent";
import Form from "../Form";

const index = () => {
  return (
    <main className='container'>
      <section className='main__section '>
        <div className='main__content'>
          <div>
            <h1>Ремонт стиральных машин в Кирове</h1>
            <h2>
              Выезд мастера за 30 минут <br />
              Гарантия до 12 месяцев!
            </h2>
          </div>

          <a href='#form' className='btn'>
            оставить заявку
          </a>
        </div>
      </section>

      <section id='primary' className='section'>
        <h2>Почему мы?</h2>
        <ul className='primary__list'>
          <li>
            <img src='/icons/car.svg' alt='car' />
            <span>Выезд по&nbsp;всему городу</span>
          </li>
          <li>
            <img src='/icons/time.svg' alt='time' />
            <span>Срочный ремонт от&nbsp;30&nbsp;минут</span>
          </li>
          <li>
            <img src='/icons/pen.svg' alt='pen' />
            <span>Гарантия на&nbsp;услуги</span>
          </li>
          <li>
            <img src='/icons/price.svg' alt='price' />
            <span>Честные цены, без скрытых платежей</span>
          </li>
          <li>
            <img src='/icons/star.svg' alt='star' />
            <span>Работаем более 5&nbsp;лет</span>
          </li>
        </ul>
      </section>

      <section id='service' className='section'>
        <h2>Сервис услуг:</h2>
        <div>
          <ul className='service__list'>
            <li>Диагностика машины при условии ремонта - Бесплатно</li>
            <li>Замена ТЭН - от 2 000 ₽</li>
            <li>Замена подшипников - от 3 500 ₽ </li>
            <li>Не сливает воду - от 1 500 ₽</li>
            <li>Ремонт двигателя - от 1 700 ₽</li>
          </ul>
        </div>
      </section>

      <section id='recommend' className='section'>
        <h2>Отзывы клиентов:</h2>
        <SwiperContent />
      </section>

      <section id='form' className='section'>
        <Form />
      </section>
    </main>
  );
};
export default index;

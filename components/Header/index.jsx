"use client";
import { useState } from "react";

const index = () => {
  const [showList, setShowList] = useState(false);
  const closePopup = () => {
    setShowList(false);
  };

  const openPopup = () => {
    setShowList(true);
  };

  return (
    <header className='container '>
      <div className='section header header__desc'>
        <div>
          <a className='header__phone' href='tel:+79992256089'>
            <img src='/phone-call-svgrepo-com.svg' alt='phone' />
            <span>+7 999 225 60 89</span>
          </a>
        </div>

        <ul>
          <li>
            <a href='#primary'>Преимущества</a>
          </li>
          <li>
            <a href='#service'>Сервис</a>
          </li>
          <li>
            <a href='#recommend'>Отзывы</a>
          </li>
          <li>
            <a href='#form'>Оставить заявку</a>
          </li>
        </ul>
      </div>

      <div className='section header header__mob'>
        <div>
          <a className='header__phone' href='tel:+79992256089'>
            <img src='/phone-call-svgrepo-com.svg' alt='phone' />
          </a>
        </div>
        <div className='header__burger' onClick={openPopup}>
          <img src='/icons/burger.svg' alt='burger' />
        </div>

        <div className={showList ? "header__hid show" : "header__hid"}>
          <span className='header__hid--close' onClick={closePopup}>
            x
          </span>
          <ul>
            <li>
              <a href='#primary' onClick={closePopup}>
                Преимущества
              </a>
            </li>
            <li>
              <a href='#service' onClick={closePopup}>
                Сервис
              </a>
            </li>
            <li>
              <a href='#recommend' onClick={closePopup}>
                Отзывы
              </a>
            </li>
            <li>
              <a href='#form' onClick={closePopup}>
                Оставить заявку
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default index;

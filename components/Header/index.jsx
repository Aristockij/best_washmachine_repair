"use client";
import { useState } from "react";
import Link from "next/link";

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
            <Link href='/#primary'>Преимущества</Link>
          </li>
          <li>
            <Link href='/#service'>Сервис</Link>
          </li>
          <li>
            <Link href='/#recommend'>Отзывы</Link>
          </li>
          <li>
            <Link href='/#form'>Оставить заявку</Link>
          </li>
        </ul>
      </div>

      <div className='header header__mob'>
        <div>
          <a className='header__phone' href='tel:+79992256089'>
            <img src='/phone-call-svgrepo-com.svg' alt='phone' />
          </a>
        </div>
        <div className='header__burger' onClick={openPopup}>
          <img src='/icons/burger.svg' alt='burger' />
        </div>

        {showList && (
          <div className='header__hid--layout' onClick={closePopup} />
        )}
        <div className={showList ? "header__hid show" : "header__hid"}>
          <span className='header__hid--close' onClick={closePopup}>
            x
          </span>
          <ul>
            <li>
              <Link href='/#primary' onClick={closePopup}>
                Преимущества
              </Link>
            </li>
            <li>
              <Link href='/#service' onClick={closePopup}>
                Сервис
              </Link>
            </li>
            <li>
              <Link href='/#recommend' onClick={closePopup}>
                Отзывы
              </Link>
            </li>
            <li>
              <Link href='/#form' onClick={closePopup}>
                Оставить заявку
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default index;

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookieAccepted");
    if (!accepted) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookie = () => {
    localStorage.setItem("cookieAccepted", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;
  return (
    <div className='cookie__wrap'>
      <p className={"cookie__content"}>
        Мы используем файлы cookie и обрабатываем некоторые персональные данные.
        Используя наш сервис Вы даете{" "}
        <Link href={"/policy"} rel='noreferrer'>
          Согласие на обработку персональных данных.
        </Link>
      </p>
      <button className='btn' onClick={acceptCookie}>
        принять
      </button>
    </div>
  );
};
export default Index;

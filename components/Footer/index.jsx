"use client";
import Link from "next/link";
const index = () => {
  const year = new Date().getFullYear();

  return (
    <footer className='footer'>
      <span>Ⓒ{year}</span>
      <span className='created'>
        created by
        <Link
          rel={"noreferrer"}
          href='https://www.linkedin.com/in/dmitry-kazenin/'
        >
          <br />
          Kazenin_dev
        </Link>
      </span>
      <span>
        <Link href='/policy'>политика приватности</Link>
      </span>
    </footer>
  );
};
export default index;

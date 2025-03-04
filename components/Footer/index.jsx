"use client";

const index = () => {
  const year = new Date().getFullYear();

  return (
    <footer className='footer'>
      <span>Ⓒ{year}</span>
    </footer>
  );
};
export default index;

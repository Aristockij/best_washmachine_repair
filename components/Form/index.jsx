"use client";

import { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import MaskedInput from "react-text-mask";

const index = () => {
  const [formSendSuccess, setFormSendSuccess] = useState(false);

  const phoneRegExp =
    /\+7-\(?([0-9]{3})\)?-([ .-]?)([0-9]{3})-([0-9]{2})-([0-9]{2})/;

  const phoneMask = [
    "+",
    "7",
    "-",
    /[1-9]/,
    /\d/,
    /\d/,
    "-",
    /\d/,
    /\d/,
    /\d/,
    "-",
    /\d/,
    /\d/,
    "-",
    /\d/,
    /\d/,
  ];

  const validation = Yup.object().shape({
    name: Yup.string().required("введите имя"),
    phone: Yup.string()
      .required("Введите телефон")
      .matches(phoneRegExp, "Неверный формат номера телефона."),
  });

  const TOKEN = process.env.NEXT_PUBLIC_TOKEN;
  const CHAT_ID = process.env.NEXT_PUBLIC_CHAT_ID;
  const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

  const sendFormVal = async (val) => {
    let message = `
      <b>новое сообщение! </b>
      <b>имя: ${val.name}</b>
      <b>телефон: ${val.phone}</b>
      <b>проблема: ${val.question}</b>
    `;

    const response = await fetch(URI_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
        parse_mode: "html",
      }),
    });

    const result = await response.json();

    if (result.ok) {
      setFormSendSuccess(true);
      setTimeout(() => {
        setFormSendSuccess(false);
      }, 5000);
    } else {
      setFormSendSuccess(false);
      console.log("форма не отправилась!");
    }
  };

  return (
    <Formik
      initialValues={{ name: "", question: "", phone: "" }}
      validationSchema={validation}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        sendFormVal(values);
        resetForm();
      }}
    >
      {({ errors, isSubmitting }) => (
        <Form>
          <h2>
            Оставьте свою заявку <br />и мастер перезвонит вам в течении 10
            минут
          </h2>
          {formSendSuccess ? (
            <div className='form__success'>
              <div className='form__success--img'>
                <img src='/icons/checked.svg' alt='checked' />
              </div>
              Ваша заявка принята!
            </div>
          ) : (
            <div className='form__wrap'>
              <div className='form'>
                <div className='input'>
                  <label htmlFor='name'>Введите имя:</label>
                  <Field id='name' name='name' />
                  {errors && <div className='error'>{errors.name}</div>}
                </div>

                <div className='input'>
                  <label htmlFor='question'>Опишите проблему:</label>
                  <Field id='question' name='question' />
                </div>

                <div className='input'>
                  <label htmlFor='phone'>Ваш телефон:</label>
                  <Field id={"phone"} name='phone'>
                    {({ field, value }) => (
                      <MaskedInput
                        mask={phoneMask}
                        {...field}
                        className='textfield'
                      />
                    )}
                  </Field>
                  {errors && <div className='error'>{errors.phone}</div>}
                </div>

                <button className='btn' type='submit' disabled={isSubmitting}>
                  Оставить заявку
                </button>
              </div>
            </div>
          )}
        </Form>
      )}
    </Formik>
  );
};
export default index;

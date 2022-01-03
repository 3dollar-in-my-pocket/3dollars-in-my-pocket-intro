import React, { useRef } from "react";
import ContactFormStyled from "./ContactForm.styles";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_sviri4f",
        "contact_form",
        form.current,
        "user_suFsSwFjyPS8ogiMVMvIV"
      )
      .then(
        (res) => {
          console.log(res.text);
          alert("메세지가 전달되었습니다!");
        },
        (err) => {
          console.log(err.text);
          alert(
            "메세지 전달에 실패했어요 😢\n잠시 후 다시 시도하거나\n3dollarinmypocket@gmail.com으로 직접 메일을 보내주세요 🙏"
          );
        }
      );
  };
  return (
    <ContactFormStyled>
      <p>
        가슴속 3천원을 이용하시면서 불편했던 점, 개선했으면 하였던 점 모두 다
        솔직히 알려주세요!
        <br />
        저희 가슴속 3천원은 Creator들이 대부분 현업이 있기 때문에 반영은
        느릴지라도 여러분의 모든 의견을 수용하기 위해 최선을 다하고 있습니다.
      </p>
      <form ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          name="user_name"
          className="nameInput"
          placeholder="이름"
        />
        <input
          type="text"
          name="user_email"
          className="emailInput"
          placeholder="이메일"
        />
        <textarea
          name="message"
          placeholder="전하고 싶은 말씀을 적어주세요 :)"
        />
        <button type="submit">메세지 전달하기</button>
      </form>
    </ContactFormStyled>
  );
};

export default ContactForm;

"use client";

import { useRef } from "react";
import { useFormStatus } from "react-dom";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const { pending } = useFormStatus();

  const sendEmail = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zf4kqmo",
        "template_gi9akxe",
        form.current!,
        "E3Mxy6-_5s96rYNfR"
      )
      .then((result) => {
        console.log(result.text);
        form.current?.reset();
      })
      .catch((error) => {
        console.log(error.text);
      });
  };
  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="grid md:grid-cols-2 gap-10 mb-4">
        <label htmlFor="name" className="sr-only">
          Name
        </label>
        <input
          type="text"
          required
          name="name"
          id="name"
          placeholder="Name"
          className="block w-full h-[45px] p-[5px] text-xl border-gray-500 mb-6 border-b focus:outline"
        />
      </div>
    </form>
  );
};

export default ContactForm;

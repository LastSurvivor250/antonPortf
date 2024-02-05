import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div id="contact" className="w-full h-fit py-10 relative bg-gray-100">
      <div className="max-w-[1400px] mx-auto w-[91%]">
        <div className="mb-10">
          <h2 className="text-5xl font-extrabold mb-5">
            Let's <span className="text-purple-500">Connect</span> and Build
            Something!
          </h2>
          <p className="text-sm">Please allow 24-48 hours for a response</p>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;

import React, { Suspense, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import Fox from '../models/Fox'
import Loader from '../components/Loader'
import { Canvas } from "@react-three/fiber";
import useAlert from '../hooks/useAlert';
import Alert from '../components/Alert';
import Socialmed from '../components/Socialmed';

const Contact = () => {
  const formRef=useRef(null);
  const [form ,setForm]=useState({name:"",email:"",message:""})
  const [isLoading, setIsLoading]=useState(false)
  const [currentAnimation, setCurrentAnimation]=useState('idle')
  const { alert, showAlert, hideAlert } = useAlert();

  const handleChange=(e)=>{
    setForm({...form,[e.target.name]:e.target.value})
  };
    const handeleFocus = () => setCurrentAnimation('walk');
    const handeleBlur = () => setCurrentAnimation('idle');
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation("hit");
    emailjs
      .send(
        // import.meta.env.EMAILJS_SERVICEID,
        // import.meta.env.EMAILJS_TEMPLATEID,
        "service_26kgdva",
        "template_n3zx3tc",

        {
          form_name: form.name,
          to_name: "vishal",
          from_email: form.email,
          to_email: "kvmvmk184@gmail.com",
          message: form.message,
        },
        "I5zrtiEeh5B-98nAY"
        //import.meta.env.EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setIsLoading(false);
          showAlert({
            show: true,
            text: "Thank you for your message 😃",
            type: "success",
          });

          setTimeout(() => {
            hideAlert(false);
            setCurrentAnimation("idle");
            setForm({
              name: "",
              email: "",
              message: "",
            });
          }, [3000]);
        },
        (error) => {
          setIsLoading(false);
          console.error(error);
          setCurrentAnimation("idle");

          showAlert({
            show: true,
            text: "I didn't receive your message 😢",
            type: "danger",
          });
        }
      );
  };

  return (
    <section className="relative flex lg:flex-row flex-col max-container">
      {alert.show && <Alert {...alert} />}
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text"> Get in touch</h1>
        <form
          className="w-full flex flex-col gap-7 mt-14"
          onSubmit={handleSubmit}
        >
          <label className="text-black-500 finr-semibold">
            Name
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Enter your name"
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handeleFocus}
              onBlur={handeleBlur}
            />
          </label>
          <label className="text-black-500 finr-semibold">
            Email
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Enter your email"
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handeleFocus}
              onBlur={handeleBlur}
            />
          </label>
          <label className="text-black-500 finr-semibold">
            Your Message
            <textarea
              type="text"
              name="message"
              rows={4}
              className="textarea"
              placeholder="How i Can Help you"
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handeleFocus}
              onBlur={handeleBlur}
            />
          </label>
          <button
            type="submit"
            className="btn"
            onFocus={handeleFocus}
            onBlur={handeleBlur}
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
        >
          <directionalLight position={[0, 0, 1]} intensity={2.5} />
          <ambientLight intensity={1} />
          <pointLight position={[5, 10, 0]} intensity={2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />

          <Suspense fallback={<Loader />}>
            <Fox
              currentAnimation={currentAnimation}
              position={[0.5, 0.35, 0]}
              rotation={[12.629, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
            />
          </Suspense>
        </Canvas>
      </div>
      
    </section>
  );
}

export default Contact

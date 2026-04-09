
import React, { useState } from "react";
import dotBack from '../../assets/formBack.png';
import emailjs from '@emailjs/browser';

const FormPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    description: ""
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) {
      errs.email = "Email is required";
    } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) {
      errs.email = "Invalid email address";
    }
    const phoneDigits = form.phone.replace(/\D/g, "");
    if (!phoneDigits) {
      errs.phone = "Phone number is required";
    } else if (phoneDigits.length !== 10) {
      errs.phone = "Enter a valid 10-digit phone number";
    }
    if (!form.company.trim()) errs.company = "Company name is required";
    if (!form.description.trim()) errs.description = "Description is required";
    return errs;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setSuccess("");
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    setLoading(true);
    try {
      await emailjs.send(
        "YOUR_SERVICE_ID", // replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // replace with your EmailJS template ID
        {
          from_name: form.name,
          from_email: form.email,
          phone: form.phone,
          company: form.company,
          message: form.description,
        },
        "YOUR_PUBLIC_KEY" // replace with your EmailJS public key
      );
      setSuccess("Message sent successfully!");
      setForm({ name: "", email: "", phone: "", company: "", description: "" });
      setErrors({});
    } catch (err) {
      setSuccess("");
      setErrors({ submit: "Failed to send message. Please try again later." });
    }
    setLoading(false);
  };

  return (
    <div className="p-4  py-15 md:py-30 lg:p-35 lg:py-25 flex flex-col gap-4 lg:gap-12 bg-zinc-100 md:flex-row md:justify-center mt-22 w-full max-w-[1600px] mx-auto ">
      <div className="lg:h-fit md:w-[50%] lg:w-[40%] ">
        <h1 className="text-3xl font-semibold md:text-4xl md:font-bold">Drop us a line</h1>
        <p className="text-md mt-4 md:text-lg md:w-fit">
          Stay Ahead of Competition with an Intuative Mobile App for Your
          Business.
        </p>
        <img className="mt-5 hidden lg:inline" src={dotBack} alt="Dotted Background"/>
      </div>
      <form className="flex flex-col gap-4 mt-4 lg:w-[60%] px-2" onSubmit={onSubmit}>
        <div className="inputCol flex gap-4">
          <div className="inputGap w-full">
            <input
              className="w-full text-md lg:text-lg border-b-1 border-zinc-400 py-2 outline-none"
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
            />
            {errors.name && <div className="text-red-500 text-xs mt-1">{errors.name}</div>}
            <input
              className="w-full  text-md lg:text-lg border-b-1 border-zinc-400 py-2 outline-none"
              type="email"
              placeholder="E-mail"
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
            />
            {errors.email && <div className="text-red-500 text-xs mt-1">{errors.email}</div>}
          </div>
          <div className="inputGap w-full">
            <input
              className="w-full  text-md lg:text-lg border-b-1 border-zinc-400 py-2 outline-none"
              type="tel"
              maxLength={10}
              placeholder="Phone Number"
              value={form.phone}
              onChange={e => {
                // Only allow up to 10 digits
                const digits = e.target.value.replace(/\D/g, "").slice(0, 10);
                setForm({ ...form, phone: digits });
              }}
            />
            {errors.phone && <div className="text-red-500 text-xs mt-1">{errors.phone}</div>}
            <input
              className="w-full text-md lg:text-lg border-b-1 border-zinc-400 py-2 outline-none"
              type="text"
              placeholder="Your Company Name"
              value={form.company}
              onChange={e => setForm({ ...form, company: e.target.value })}
            />
            {errors.company && <div className="text-red-500 text-xs mt-1">{errors.company}</div>}
          </div>
        </div>
        <input
          className="w-full border-b-1 text-md lg:text-lg border-zinc-400 py-2  outline-none"
          type="text"
          placeholder="Add Description"
          value={form.description}
          onChange={e => setForm({ ...form, description: e.target.value })}
        />
        {errors.description && <div className="text-red-500 text-xs mt-1">{errors.description}</div>}
        <button type="submit" disabled={loading} className="uppercase px-8 py-2 lg:px-13 text-lg border-2 border-zinc-800 rounded-md w-fit mt-5 cursor-pointer hover:bg-yellow-300 bg-white disabled:opacity-60">
          {loading ? "Sending..." : "Submit"}
        </button>
        {errors.submit && <div className="text-red-500 text-xs mt-2">{errors.submit}</div>}
        {success && <div className="text-green-600 text-xs mt-2">{success}</div>}
      </form>
    </div>
  );
};

export default FormPage;

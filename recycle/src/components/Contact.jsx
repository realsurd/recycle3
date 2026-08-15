import { useState } from "react";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock,
  FiSend,
  FiCheckCircle,
} from "react-icons/fi";
import { company, images } from "../data/content";

const infoItems = [
  { icon: FiMapPin, label: "Address", value: company.address },
  { icon: FiPhone, label: "Phone", value: company.phone },
  { icon: FiMail, label: "Email", value: company.email },
  { icon: FiClock, label: "Hours", value: company.hours },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    organisation: "",
    interest: "Sell agro-waste",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | success

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // Frontend-only demo — no backend. Show success confirmation.
    setStatus("success");
    setForm({
      name: "",
      email: "",
      organisation: "",
      interest: "Sell agro-waste",
      message: "",
    });
    window.setTimeout(() => setStatus("idle"), 6000);
  };

  return (
    <section id="contact" className="bg-sand-50 py-20 lg:py-28">
      <div className="container-x">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">
            <span className="h-px w-8 bg-gold-500" /> Get In Touch
            <span className="h-px w-8 bg-gold-500" />
          </span>
          <h2 className="section-title mt-4">
            Request a quote or partner with us
          </h2>
          <p className="lead mt-4">
            Tell us what you need — selling residues, buying biomass fuel, or
            exploring a sustainability partnership. Our team responds within one
            business day.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          {/* Company info */}
          <div className="reveal space-y-4">
            <div className="overflow-hidden rounded-3xl shadow-lg shadow-forest-900/10">
              <img
                src={images.contact}
                alt="Smiling woman in rural Nigeria"
                className="h-48 w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {infoItems.map((it) => (
                <div
                  key={it.label}
                  className="card flex items-start gap-3 p-5 hover:-translate-y-1 hover:shadow-md"
                >
                  <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-forest-50 text-forest-600">
                    <it.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-gold-600">
                      {it.label}
                    </p>
                    <p className="mt-1 text-sm text-forest-800">{it.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="reveal card space-y-5 p-7 sm:p-8"
            style={{ transitionDelay: "0.1s" }}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                label="Full name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />
              <Field
                label="Email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                label="Organisation (optional)"
                name="organisation"
                value={form.organisation}
                onChange={handleChange}
              />
              <div>
                <label className="mb-1.5 block text-sm font-medium text-forest-800">
                  I want to…
                </label>
                <select
                  name="interest"
                  value={form.interest}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-forest-900/10 bg-sand-50 px-4 py-2.5 text-sm text-forest-900 outline-none transition focus:border-forest-500 focus:ring-2 focus:ring-forest-200"
                >
                  <option>Sell agro-waste</option>
                  <option>Buy biomass fuel</option>
                  <option>Partner on a project</option>
                  <option>Request clean-energy advisory</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-forest-800">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                required
                placeholder="Tell us about your waste stream, fuel needs or partnership idea…"
                className="w-full resize-none rounded-xl border border-forest-900/10 bg-sand-50 px-4 py-3 text-sm text-forest-900 outline-none transition focus:border-forest-500 focus:ring-2 focus:ring-forest-200"
              />
            </div>

            <button type="submit" className="btn-primary w-full sm:w-auto">
              <FiSend className="h-4 w-4" />
              Send Message
            </button>

            {status === "success" && (
              <p className="flex items-center gap-2 rounded-xl bg-forest-50 px-4 py-3 text-sm font-medium text-forest-700">
                <FiCheckCircle className="h-5 w-5 text-forest-500" />
                Thank you — your message has been received. We&apos;ll reply
                within one business day.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", value, onChange, required }) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-forest-800">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full rounded-xl border border-forest-900/10 bg-sand-50 px-4 py-2.5 text-sm text-forest-900 outline-none transition focus:border-forest-500 focus:ring-2 focus:ring-forest-200"
      />
    </div>
  );
}

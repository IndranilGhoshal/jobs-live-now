"use client";

import { useState } from "react";
import { contactemailurl, title, url } from "@/app/utils/common-text";
import SocialJoinLink from "./SocialJoinLink";
import SocialLinks from "./SocialLinks";

export default function ContactClient() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("✅ Message sent successfully!");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("❌ Failed to send message!");
      }
    } catch (err) {
      setStatus("❌ Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container txt-cont py-5">
      <div className="row">
        <div className="col-md-12">
          <SocialJoinLink />
        </div>
        <div className="col-md-12">
          <div className="card shadow-sm border-0">

            <div className="card-body p-4">

              <h1 className="mb-4">
                Contact Us
              </h1>

              <p>
                Thank you for visiting <strong>{title}</strong>.
                We value your feedback, suggestions, and inquiries.
              </p>

              <p>
                If you find any incorrect information,
                broken links, outdated content, or have
                any suggestions for improvement, please
                feel free to contact us.
              </p>

              <h2 className="mt-4">
                Contact Information
              </h2>

              <p>
                <strong>Email:</strong><br />
                {contactemailurl}
              </p>

              <p>
                <strong>Website:</strong><br />
                <a href={url} target="_black">{url}</a>
              </p>

              <h2 className="mt-4">
                Contact Form
              </h2>

              <form onSubmit={handleSubmit} className="mt-3">

                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={form.name}
                  onChange={handleChange}
                  className="form-control mb-2"
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={handleChange}
                  className="form-control mb-2"
                  required
                />

                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={form.subject}
                  onChange={handleChange}
                  className="form-control mb-2"
                  required
                />

                <textarea
                  name="message"
                  placeholder="Write your message..."
                  value={form.message}
                  onChange={handleChange}
                  className="form-control mb-3"
                  rows="5"
                  required
                />

                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>

                {status && (
                  <p className="mt-3">{status}</p>
                )}

              </form>

              <h2 className="mt-5">
                Response Time
              </h2>

              <p>
                We usually respond to emails and contact
                requests within 24–48 business hours.
              </p>

              <h2 className="mt-4">
                Important Note
              </h2>

              <p>
                {title} is an independent informational
                website and is not associated with any government
                organization. For official recruitment-related
                issues, please contact the respective department's
                official website.
              </p>

            </div>

          </div>
        </div>
        <div className="col-md-12">
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}
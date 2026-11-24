"use client";

import emailjs from "@emailjs/browser";
import { FormEvent, useRef, useState } from "react";
import { site } from "../../data/portfolio";
import styles from "../portfolio.module.css";

const DEFAULT_MESSAGE =
  "Have a question or project in mind? Feel free to reach out. I'd be happy to connect!";

export default function ContactForm() {
  const [sending, setSending] = useState(false);
  const [formMessage, setFormMessage] = useState(DEFAULT_MESSAGE);
  const inFlight = useRef(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (inFlight.current) return;

    const form = event.currentTarget;
    const values = new FormData(form);
    const read = (key: string) => String(values.get(key) ?? "").trim();

    // Hidden honeypot: bots that fill every field get a success response but no email is sent.
    if (read("company")) {
      form.reset();
      setFormMessage("Message sent successfully. Thanks for reaching out!");
      return;
    }

    const name = read("name");
    const email = read("email");
    const subject = read("subject");
    const message = read("message");

    if (!name || !email || !subject || !message) {
      setFormMessage("Please complete every field before sending your message.");
      return;
    }

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setFormMessage(`Email delivery isn’t configured yet. Please email ${site.email} directly.`);
      return;
    }

    inFlight.current = true;
    setSending(true);
    setFormMessage("Sending your message…");

    try {
      await emailjs.send(
        serviceId,
        templateId,
        { name, email, subject, message },
        { publicKey },
      );
      form.reset();
      setFormMessage("Message sent successfully. Thanks for reaching out!");
    } catch (error) {
      console.error("EmailJS submission failed:", error);
      setFormMessage(`Sorry, your message could not be sent. Please email ${site.email} directly.`);
    } finally {
      inFlight.current = false;
      setSending(false);
    }
  }

  return (
    <form className={styles.form} onSubmit={submit} aria-describedby="contact-status">
      <label>
        Your name
        <input name="name" required minLength={2} maxLength={100} autoComplete="name" placeholder="Jane Smith" />
      </label>
      <label>
        Email address
        <input
          name="email"
          type="email"
          required
          maxLength={254}
          autoComplete="email"
          placeholder="jane@example.com"
        />
      </label>
      <label>
        Subject
        <input
          name="subject"
          required
          minLength={3}
          maxLength={200}
          autoComplete="off"
          placeholder="A little about your message"
        />
      </label>
      <label>
        Message
        <textarea name="message" required minLength={10} maxLength={5000} rows={4} placeholder="What would you like to talk about?" />
      </label>
      <input
        className={styles.honeypot}
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />
      <button type="submit" disabled={sending}>
        {sending ? "Sending…" : "Send message"} <span>↗</span>
      </button>
      <p id="contact-status" role="status" aria-live="polite">
        {formMessage}
      </p>
    </form>
  );
}

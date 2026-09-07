import { useState } from "react";
import EmailForm from "./EmailForm";

export default function ActionButtons() {
  const [emailFormOpen, setEmailFormOpen] = useState(false);
  return (
    <div className="actions">
      <a href="#" className="button button-primary">
        <svg
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
        View Resume
      </a>
      <a
        href="#"
        className="button button-outline"
        onClick={(e) => {
          e.preventDefault();
          setEmailFormOpen(true);
        }}
      >
        <svg
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
        Send an email
      </a>
      {emailFormOpen && <EmailForm onClose={() => setEmailFormOpen(false)} />}
    </div>
  );
}

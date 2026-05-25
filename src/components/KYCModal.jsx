import React, { useEffect, useRef, useState } from "react";

export default function KYCModal({ isOpen, onClose }) {
  const modalRef = useRef(null);
  const closeBtnRef = useRef(null);
  const firstInputRef = useRef(null);
  const [formData, setFormData] = useState({ pan: "", dob: "", phone: "", email: "", confirm: false });
  const [step, setStep] = useState(1); // 1 = Form, 2 = Review

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
      
      // Focus trap
      if (e.key === "Tab" && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll(
          'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
      setTimeout(() => {
        closeBtnRef.current?.focus();
      }, 50);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else {
      if (formData.confirm) {
        alert("KYC Submitted Successfully!");
        onClose();
      } else {
        alert("Please confirm the data is accurate.");
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div
        id="kyc-modal"
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="kyc-modal-title"
        className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-xl shadow-2xl p-6 md:p-8"
      >
        <button
          ref={closeBtnRef}
          id="kyc-modal-close"
          onClick={onClose}
          aria-label="Close KYC Modal"
          className="absolute top-4 right-4 text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        <h2 id="kyc-modal-title" className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          {step === 1 ? "Complete Your KYC" : "Review KYC Information"}
        </h2>

        <form id="kyc-form" onSubmit={handleSubmit} className="space-y-4">
          {step === 1 && (
            <>
              <div>
                <label htmlFor="kyc-pan" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  PAN Number
                </label>
                <input
                  ref={firstInputRef}
                  type="text"
                  id="kyc-pan"
                  required
                  value={formData.pan}
                  onChange={(e) => setFormData({ ...formData, pan: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-slate-800 dark:border-slate-700 dark:text-white"
                />
              </div>
              <div>
                <label htmlFor="kyc-dob" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Date of Birth
                </label>
                <input
                  type="date"
                  id="kyc-dob"
                  required
                  value={formData.dob}
                  onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-slate-800 dark:border-slate-700 dark:text-white"
                />
              </div>
              <div>
                <label htmlFor="kyc-phone" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="kyc-phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-slate-800 dark:border-slate-700 dark:text-white"
                />
              </div>
              <div>
                <label htmlFor="kyc-email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="kyc-email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-slate-800 dark:border-slate-700 dark:text-white"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 mt-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
              >
                Review Details
              </button>
            </>
          )}

          {step === 2 && (
            <>
              <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg space-y-2 text-sm text-slate-800 dark:text-slate-200">
                <p><strong>PAN:</strong> {formData.pan}</p>
                <p><strong>DOB:</strong> {formData.dob}</p>
                <p><strong>Phone:</strong> {formData.phone}</p>
                <p><strong>Email:</strong> {formData.email}</p>
              </div>

              <div className="flex items-start gap-2 mt-4">
                <input
                  type="checkbox"
                  id="kyc-confirm"
                  required
                  checked={formData.confirm}
                  onChange={(e) => setFormData({ ...formData, confirm: e.target.checked })}
                  className="mt-1 w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                />
                <label htmlFor="kyc-confirm" className="text-sm text-slate-600 dark:text-slate-400">
                  I confirm that the details provided above are accurate and I consent to WealthFino processing my KYC data.
                </label>
              </div>

              <div className="flex gap-4 mt-6">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="w-1/3 py-3 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-semibold rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  Edit
                </button>
                <button
                  type="submit"
                  className="w-2/3 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
                >
                  Submit Final KYC
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
}

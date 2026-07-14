import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import { Send } from "lucide-react";

const ConnectModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    mobile: "",
    email: "",
    agreed: false
  });

  useEffect(() => {
    // Show modal after 3 seconds on the main page
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.agreed) {
      alert("Please agree to the Terms and Conditions.");
      return;
    }
    const message = `*New Contact Request*%0A*Name:* ${formData.username}%0A*Mobile:* ${formData.mobile}%0A*Email:* ${formData.email}%0A*Agreed to Terms:* Yes`;
    window.open(`https://wa.me/9883455700?text=${message}`, '_blank');
    setIsOpen(false);
  };

  const handleClose = React.useCallback(() => setIsOpen(false), []);

  return (
    <Modal isOpen={isOpen} onClose={handleClose} title="Let's Connect & Learn">
      <form onSubmit={handleFormSubmit} className="space-y-6">
        <div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            Send us a Message
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Reach out to our team for expert guidance, support, and research insights.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Username
            </label>
            <input
              type="text"
              required
              value={formData.username}
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-black border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all outline-none"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Mobile Number
            </label>
            <input
              type="tel"
              required
              value={formData.mobile}
              onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-black border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all outline-none"
              placeholder="+91 98765 43210"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Email ID
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-black border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all outline-none"
            placeholder="john@example.com"
          />
        </div>
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id="modal-terms"
            required
            checked={formData.agreed}
            onChange={(e) => setFormData({ ...formData, agreed: e.target.checked })}
            className="mt-1 w-5 h-5 min-w-[20px] rounded border-gray-300 text-[#D4AF37] focus:ring-[#D4AF37]"
          />
          <label htmlFor="modal-terms" className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            I confirm that the details provided by me are accurate, and I agree to the <a href="/policies/terms-conditions" className="text-[#D4AF37] hover:underline" target="_blank" rel="noopener noreferrer">Terms & Conditions</a> and <a href="/policies/privacy-policy" className="text-[#D4AF37] hover:underline" target="_blank" rel="noopener noreferrer">Privacy Policy</a>. I hereby authorize communication and updates via SMS, Calls, WhatsApp, RCS, Email, and other applicable communication channels as per company policies and applicable regulations.
          </label>
        </div>
        <button
          type="submit"
          className="w-full px-8 py-4 bg-gradient-to-r from-[#F3D98B] via-[#D4AF37] to-[#B8962E] hover:from-[#F3D98B] hover:to-[#D4AF37] text-black font-bold rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(212,175,55,0.3)] flex items-center justify-center gap-2"
        >
          <Send size={20} />
          Send Message via WhatsApp
        </button>
      </form>
    </Modal>
  );
};

export default ConnectModal;

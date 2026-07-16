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
  const [errors, setErrors] = useState({});

  useEffect(() => {
    // Show modal after 3 seconds on the main page
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const validateForm = () => {
    const newErrors = {};
    
    if (formData.mobile.length !== 10) {
      newErrors.mobile = "Please enter exactly 10 digits.";
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.agreed) {
      alert("Please agree to the Terms and Conditions.");
      return;
    }
    if (!validateForm()) {
      return;
    }
    const message = `*New Contact Request*%0A*Name:* ${formData.username}%0A*Mobile:* +91 ${formData.mobile}%0A*Email:* ${formData.email}%0A*Agreed to Terms:* Yes`;
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
            <div className={`flex items-center w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-black border ${errors.mobile ? 'border-red-500' : 'border-gray-200 dark:border-white/10'} text-gray-900 dark:text-white focus-within:ring-2 focus-within:ring-[#D4AF37] focus-within:border-transparent transition-all`}>
              <span className="text-gray-500 font-medium mr-3 border-r border-gray-300 dark:border-white/10 pr-3">+91</span>
              <input
                type="tel"
                required
                value={formData.mobile}
                onChange={(e) => {
                  const onlyNumbers = e.target.value.replace(/\D/g, '').slice(0, 10);
                  setFormData({ ...formData, mobile: onlyNumbers });
                  if (errors.mobile) setErrors({ ...errors, mobile: null });
                }}
                className="w-full bg-transparent outline-none"
                placeholder="9876543210"
              />
            </div>
            {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>}
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
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
              if (errors.email) setErrors({ ...errors, email: null });
            }}
            className={`w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-black border ${errors.email ? 'border-red-500' : 'border-gray-200 dark:border-white/10'} text-gray-900 dark:text-white focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all outline-none`}
            placeholder="john@example.com"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
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

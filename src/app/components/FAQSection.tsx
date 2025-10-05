"use client";

import { useState } from "react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What is Seamless Go Subscription Service?",
      answer: "Seamless Go is a subscription program that lets you rent MUDA/FNA home appliances with a more affordable monthly payment. With this program, you can enjoy the subscription without worrying about routine maintenance or repair extra costs."
    },
    {
      question: "What included in a Seamless Go Subscription Service plan?",
      answer: "The subscription plan includes the appliance rental, regular maintenance, repairs, and replacement services as needed."
    },
    {
      question: "How does Seamless Go Subscription Service work?",
      answer: "Simply choose your desired appliances, select a subscription plan, and we'll deliver and install them at your location."
    },
    {
      question: "How do I pay for my Seamless Go subscription Service?",
      answer: "Payment can be made through various methods including credit card, bank transfer, or other available payment options."
    },
    {
      question: "Will I own the product after the contract ends?",
      answer: "No, this is a rental subscription service. The products remain our property throughout the contract period."
    },
    {
      question: "Where can I see the actual products included in Seamless Go Subscription Service?",
      answer: "You can view all available products on our website or visit our showroom for a hands-on experience."
    },
    {
      question: "What products are available under Seamless Go Subscription Service?",
      answer: "We offer a wide range of home appliances including refrigerators, washing machines, air conditioners, and more."
    },
    {
      question: "Who can sign up for Seamless Go Subscription Service?",
      answer: "Anyone can sign up! Both individuals and businesses are welcome to subscribe to our service."
    },
    {
      question: "What contract durations are available?",
      answer: "We offer flexible contract durations ranging from 12 months to 36 months depending on your needs."
    },
    {
      question: "Is there any upfront fee when signing up?",
      answer: "Yes, there may be a minimal upfront fee for delivery and installation services."
    },
    {
      question: "Can I cancel my contract before it ends?",
      answer: "Contract cancellation terms vary depending on your plan. Please refer to the terms and conditions for details."
    },
    {
      question: "Where can I sign up for Seamless Go Subscription Service?",
      answer: "You can sign up directly on our website or contact our customer service team for assistance."
    },
    {
      question: "Where can I read the Seamless Go Subscription Service Terms & Conditions?",
      answer: "The complete Terms & Conditions are available on our website in the legal section."
    }
  ];

  const toggleFAQ = (index: number) => {
  setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="w-full bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            Frequently Asked Questions (FAQ)
          </h2>
          <button className="bg-gray-900 text-white px-6 py-3 rounded font-semibold hover:bg-gray-800 transition-all duration-300">
            Contact Us
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            {faqs.slice(0, 6).map((faq, index) => (
              <div
                key={index}
                className="border-b border-gray-200 pb-4"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-start text-left group"
                >
                  <span className="text-gray-900 font-semibold pr-4 group-hover:text-gray-600 transition-colors">
                    {faq.question}
                  </span>
                  <span className="text-3xl font-normal flex-shrink-0 text-gray-900 min-w-[24px] text-center">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="mt-3 text-gray-600 text-sm leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="space-y-4">
            {faqs.slice(6).map((faq, index) => (
              <div
                key={index + 6}
                className="border-b border-gray-200 pb-4"
              >
                <button
                  onClick={() => toggleFAQ(index + 6)}
                  className="w-full flex justify-between items-start text-left group"
                >
                  <span className="text-gray-900 font-semibold pr-4 group-hover:text-gray-600 transition-colors">
                    {faq.question}
                  </span>
                  <span className="text-3xl font-normal flex-shrink-0 text-gray-900 min-w-[24px] text-center">
                    {openIndex === index + 6 ? "−" : "+"}
                  </span>
                </button>
                {openIndex === index + 6 && (
                  <div className="mt-3 text-gray-600 text-sm leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
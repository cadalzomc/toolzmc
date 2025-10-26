"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/common";
import { useRef } from "react";

const faq = [
  {
    question: "What is MCToolz?",
    answer:
      "You can return unused items in their original packaging within 30 days for a refund or exchange. Contact support for assistance.",
  },
  {
    question: "Is it free to use?",
    answer:
      "Yes! Guests can use most tools for free with limited usage. Pro users unlock unlimited access and history tracking.",
  },
  {
    question: "Do I need to install anything?",
    answer: "Nope. Everything works directly in your browser — no downloads required.",
  },
  {
    question: "What’s the difference between Free user and Pro?",
    answer: "Guest: Free access with limits, Pro: Unlimited access, custom templates, saved history",
  },
  {
    question: "Can I suggest a new tool or feature?",
    answer: "Absolutely! Contact us via the support page or email us — we love community input.",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur sas natus?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint labore quidem quam? Consectetur sapiente iste rerum reiciendis animi nihil nostrum sit quo, modi quod.",
  },
];

export const HomeFAQ = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={sectionRef} id="faq" className="w-full max-w-(--breakpoint-xl) mx-auto py-8 sm:py-16 px-6">
      <h2 className="md:text-center text-3xl md:text-5xl leading-[1.15]! font-bold tracking-tighter">
        Frequently Asked Questions
      </h2>
      <p className="mt-1.5 md:text-center sm:text-lg text-muted-foreground">
        Quick answers to common questions about our products and services.
      </p>

      <div className="min-h-[550px] md:min-h-80 xl:min-h-[300px] mt-4">
        <Accordion type="single" collapsible className="w-full AccordionRoot">
          {faq.map(({ question, answer }, index) => (
            <AccordionItem key={question} value={`question-${index}`} className="py-1">
              <AccordionTrigger className="text-left">{question}</AccordionTrigger>

              <AccordionContent>{answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

"use client";

import { Badge, Button, Separator } from "@/components/common";
import { cn } from "@/lib/utils";
import { CircleCheck } from "lucide-react";
import { useRef } from "react";

const plans = [
  {
    name: "Starter",
    price: 0,
    description: "Try our AI tools for free",
    features: [
      "35 professional tools",
      "Basic functionality",
      "Limited usage per day",
      "Standard features only",
      "Personal use",
    ],
    buttonText: "Get Started",
  },
  {
    name: "Premium",
    price: 39,
    isRecommended: true,
    description: "Get a lifetime access to all professional tools",
    features: [
      "Free Everything granted",
      "50+ professional tools",
      "Unlimited usage - forever",
      "Premium options",
      "All export formats",
      "No watermarks",
      "Advanced settings",
    ],
    buttonText: "Get Lifetime Access",
    isPopular: true,
  },
];

export const HomePricing = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={sectionRef} id="pricing" className="max-w-(--breakpoint-lg) mx-auto py-12 sm:py-20 px-6">
      <h1 className="text-4xl sm:text-5xl font-bold text-center tracking-tight">Simple, Transparent Pricing</h1>
      <div className="mt-8 sm:mt-14 grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-0">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={cn(
              "relative bg-accent/50 border p-7 rounded-xl lg:rounded-none lg:first:rounded-l-xl lg:last:rounded-r-xl",
              {
                "bg-background border-2 border-primary py-12 rounded-xl!": plan.isPopular,
              }
            )}
          >
            {plan.isPopular && (
              <Badge className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2">Most Popular</Badge>
            )}
            <h3 className="text-lg font-medium">{plan.name}</h3>
            <p className="mt-2 text-4xl font-bold">${plan.price}</p>
            <p className="mt-4 font-medium text-muted-foreground">{plan.description}</p>
            <Separator className="my-6" />
            <ul className="space-y-2">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <CircleCheck className="h-4 w-4 mt-1 text-green-600" />
                  {feature}
                </li>
              ))}
            </ul>
            <Button variant={plan.isPopular ? "default" : "outline"} size="lg" className="w-full mt-6 rounded-full">
              {plan.buttonText}
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};

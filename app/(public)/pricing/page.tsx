import { Badge, Button, Separator } from "@/components/common";
import { cn } from "@/lib/utils";
import { CircleCheck } from "lucide-react";

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

const HomePricing = () => {
  return (
    <section className="max-w-(--breakpoint-lg) mx-auto py-16 px-4 sm:px-6">
      <p className="text-muted-foreground md:text-center uppercase font-semibold text-sm">Pricing</p>
      <h2 className="mt-3 text-4xl md:text-5xl md:text-center font-semibold tracking-tight">
        Simple, Transparent Pricing
      </h2>
      <p className="mt-3 text-base md:text-center sm:text-lg text-muted-foreground">
        Everything you need to boost your productivity.
      </p>
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

export default HomePricing;

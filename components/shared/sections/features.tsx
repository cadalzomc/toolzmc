"use client";

import { Card, CardContent, CardHeader } from "@/components/common";
import { BookCheck, ChartPie, FolderSync, Goal, Users, Zap } from "lucide-react";

const features = [
  {
    icon: Goal,
    title: "Converters",
    description: "Instantly convert files, formats, and data. (e.g., JSON ↔ CSV, Markdown ↔ HTML)",
  },
  {
    icon: BookCheck,
    title: "Annotators",
    description: "Edit, comment, or highlight code, text, and images directly online.",
  },
  {
    icon: ChartPie,
    title: "Generators",
    description: "Create fake data, UUIDs, lorem ipsum, or quick templates for development.",
  },
  {
    icon: Users,
    title: "Billing Tools",
    description: "Generate invoices, receipts, or subscription summaries easily.",
  },
  {
    icon: FolderSync,
    title: "AI-Assisted Utilities (coming soon)",
    description: "Use AI to generate, refactor, or summarize code snippets.",
  },
  {
    icon: Zap,
    title: "Accelerate Growth",
    description: "Supercharge your growth by implementing strategies that drive results quickly and efficiently.",
  },
];

export const HomeFeatures = () => {
  return (
    <section id="features" className="min-h-[calc(100vh-4rem)] max-w-(--breakpoint-xl) mx-auto w-full py-16 px-6">
      <h2 className="text-3xl md:text-5xl md:leading-14 font-bold tracking-tight sm:max-w-xl sm:text-center sm:mx-auto">
        Boost Your Strategy with Smart Features
      </h2>
      <div className="mt-8 sm:mt-14 w-full mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
        {features.map((feature) => (
          <Card key={feature.title} className="flex flex-col border rounded-xl overflow-hidden shadow-none">
            <CardHeader>
              <feature.icon />
              <h4 className="mt-3! text-xl font-bold tracking-tight">{feature.title}</h4>
              <p className="mt-1 text-muted-foreground text-sm sm:text-[17px]">{feature.description}</p>
            </CardHeader>
            <CardContent className="mt-auto px-0 pb-0">
              <div className="bg-muted h-52 ml-6 rounded-tl-xl" />
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

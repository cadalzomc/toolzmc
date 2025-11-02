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
    <section id="features" className="min-h-screen flex justify-center items-center py-16 px-4 sm:px-6">
      <div className="max-w-(--breakpoint-xl) mx-auto w-full">
        <h2 className="text-4xl sm:text-5xl font-semibold text-left sm:text-center tracking-[-0.03em]">Our Features</h2>
        <p className="mt-2 mb-16 text-left sm:text-center text-muted-foreground text-xl">
          Boost Your Strategy with Smart Features
        </p>
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
      </div>
    </section>
  );
};

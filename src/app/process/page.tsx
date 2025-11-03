"use client";
import {
  CheckCircle,
  FileText,
  Users,
  Beaker,
  Factory,
  Rocket,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useRouter } from "next/navigation";

const steps = [
  {
    id: 1,
    title: "Submit Brief",
    description:
      "SME กรอกแบบฟอร์ม Standardized Brief พร้อมรายละเอียดไอเดียและความต้องการ",
    icon: FileText,
  },
  {
    id: 2,
    title: "Consultation & Validation",
    description:
      "ทีมงานตรวจสอบความเป็นไปได้ วิเคราะห์ตลาด และให้คำแนะนำเบื้องต้น",
    icon: Users,
  },
  {
    id: 3,
    title: "Prototype & Costing",
    description: "พัฒนาต้นแบบ คำนวณต้นทุน และประเมินกำไร",
    icon: Beaker,
  },
  {
    id: 4,
    title: "OEM Matching",
    description: "จับคู่กับโรงงาน OEM ที่เหมาะสมที่สุดตามความต้องการและบริบท",
    icon: Factory,
  },
  {
    id: 5,
    title: "Launch & Feedback",
    description:
      "เริ่มผลิต ติดตามผล และรวบรวมข้อมูลเพื่อปรับปรุงอย่างต่อเนื่อง",
    icon: Rocket,
  },
];

export default function Process() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      {/* <header className="border-b border-black/10">
        <div className="container mx-auto px-4 py-4">
          <Button
            variant="ghost"
            onClick={() => router.push("/")}
            className="hover:bg-black hover:text-white"
          >
            ← Back to Home
          </Button>
        </div>
      </header> */}

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Process Milestones</h1>
          <p className="text-xl text-muted-foreground">
            จากไอเดียสู่สินค้าพร้อมขาย
          </p>
        </div>

        {/* Desktop Timeline - Horizontal */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-16 left-0 right-0 h-0.5 bg-black/20" />

            <div className="grid grid-cols-5 gap-4 relative">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={step.id} className="relative">
                    {/* Node */}
                    <div className="flex justify-center mb-6">
                      <div className="w-32 h-32 rounded-full bg-white border-4 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-300 group">
                        <Icon className="w-12 h-12" />
                      </div>
                    </div>

                    {/* Content */}
                    <Card className="border-black/20 hover:border-black transition-all duration-300 hover:shadow-lg">
                      <CardContent className="p-6">
                        <div className="text-center">
                          <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center mx-auto mb-3 text-sm font-bold">
                            {step.id}
                          </div>
                          <h3 className="font-bold mb-2">{step.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            {step.description}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile Timeline - Vertical */}
        <div className="md:hidden space-y-8">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.id} className="relative pl-16">
                {/* Icon Circle */}
                <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-black text-white flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>

                {/* Connecting Line */}
                {step.id !== steps.length && (
                  <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-black/20 -mb-8" />
                )}

                {/* Content */}
                <Card className="border-black/20">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-xs font-bold shrink-0">
                        {step.id}
                      </div>
                      <h3 className="font-bold">{step.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Button
            onClick={() => router.push("/brief")}
            className="bg-black text-white hover:bg-white hover:text-black border-2 border-black px-8 py-6 text-lg"
          >
            เริ่มต้นด้วย Standardized Brief
          </Button>
        </div>
      </main>
    </div>
  );
}

"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";

const services = [
  {
    id: 1,
    title: "Idea to Brief",
    description:
      "ช่วย SME ตกผลึกไอเดีา วิเคราะห์คู่แข่ง และกรอกแบบฟอร์มให้สมบูรณ์",
    icon: "💡",
  },
  {
    id: 2,
    title: "Cost & Margin Analysis",
    description: "วิเคราะห์ต้นทุน กำไร และจุดคุ้มทุนเบื้องต้น",
    icon: "📊",
  },
  {
    id: 3,
    title: "FDA & Legal Consultation",
    description: "แนะนำขั้นตอนเบื้องต้นเรื่อง อย. และเครื่องหมายการค้า",
    icon: "⚖️",
  },
];

export default function ServicesContent() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-4">
            The Readiness Package
          </h1>
          <p className="text-xl text-muted-foreground">
            เร่งความพร้อมให้ SME พร้อมผลิตภัณฑ์จริง
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card
              key={service.id}
              className="border-2 border-border hover:border-foreground transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group"
            >
              <CardHeader className="text-center pb-4">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-2xl font-bold text-foreground mb-2">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                <CardDescription className="text-base text-muted-foreground leading-relaxed min-h-20">
                  {service.description}
                </CardDescription>
                <Button
                  onClick={() => router.push(`/services/${service.id}`)}
                  className="w-full bg-primary text-primary-foreground hover:bg-background hover:text-foreground border-2 border-primary font-semibold py-6 transition-all duration-300"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="border-2 border-primary bg-primary/5 max-w-3xl mx-auto">
            <CardContent className="pt-8 pb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                พร้อมเริ่มต้นแล้วหรือยัง?
              </h2>
              <p className="text-muted-foreground mb-6">
                เราพร้อมช่วยคุณทุกขั้นตอน ตั้งแต่ไอเดียจนถึงผลิตภัณฑ์จริง
              </p>
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 py-6 text-lg transition-all hover:scale-105"
              >
                ติดต่อเราเลย
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

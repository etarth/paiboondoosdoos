"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { useRouter, useParams } from "next/navigation";

const serviceDetails = {
  "1": {
    title: "Idea to Brief",
    icon: "💡",
    description:
      "ช่วย SME ตกผลึกไอเดีย วิเคราะห์คู่แข่ง และกรอกแบบฟอร์มให้สมบูรณ์",
    fullDescription:
      "บริการนี้ออกแบบมาเพื่อช่วยเหลือธุรกิจ SME ในการพัฒนาไอเดียผลิตภัณฑ์ให้เป็นรูปธรรม โดยทีมงานผู้เชี่ยวชาญจะช่วยวิเคราะห์ตลาด คู่แข่ง และกลุ่มเป้าหมาย เพื่อสร้างแบบฟอร์ม Brief ที่สมบูรณ์และพร้อมนำไปผลิตจริง",
    duration: "2-3 สัปดาห์",
    price: "฿15,000 - ฿25,000",
    includes: [
      "Workshop ตกผลึกไอเดีย 1 ครั้ง (3 ชั่วโมง)",
      "การวิเคราะห์ตลาดและคู่แข่งเบื้องต้น",
      "การกำหนด Target Audience และ Positioning",
      "การช่วยกรอกแบบฟอร์ม Standardized Brief",
      "รายงานสรุปและข้อเสนอแนะ 1 ฉบับ",
    ],
    process: [
      "ปรึกษาเบื้องต้นและรับฟังไอเดีย",
      "Workshop ระดมสมองและวิเคราะห์ตลาด",
      "จัดทำ Brief และนำเสนอผล",
      "ปรับแก้ตามข้อเสนอแนะ (1 รอบ)",
    ],
    benefits: [
      "ลดความเสี่ยงจากการเริ่มต้นผลิตโดยไม่มีแผน",
      "มีข้อมูลครบถ้วนก่อนหา OEM",
      "เข้าใจตลาดและคู่แข่งอย่างชัดเจน",
      "ประหยัดเวลาในการสื่อสารกับ OEM",
    ],
  },
  "2": {
    title: "Cost & Margin Analysis",
    icon: "📊",
    description: "วิเคราะห์ต้นทุน กำไร และจุดคุ้มทุนเบื้องต้น",
    fullDescription:
      "บริการวิเคราะห์ทางการเงินเชิงลึกเพื่อให้ธุรกิจเข้าใจต้นทุนที่แท้จริง กำไรที่คาดหวัง และจุดคุ้มทุนของผลิตภัณฑ์ ช่วยในการตัดสินใจว่าควรผลิตจริงหรือไม่ และควรขายในราคาเท่าไหร่",
    duration: "1-2 สัปดาห์",
    price: "฿12,000 - ฿20,000",
    includes: [
      "การวิเคราะห์ต้นทุนการผลิตทั้งหมด (Material, Labor, Overhead)",
      "การคำนวณ Gross Margin และ Net Margin",
      "การหาจุดคุ้มทุน (Break-even Point)",
      "การเปรียบเทียบราคากับคู่แข่ง",
      "รายงานทางการเงินพร้อมกราฟและตาราง",
    ],
    process: [
      "รวบรวมข้อมูลต้นทุนและราคาขาย",
      "วิเคราะห์ข้อมูลและสร้างโมเดลทางการเงิน",
      "นำเสนอผลการวิเคราะห์",
      "ให้คำปรึกษาและข้อเสนอแนะเชิงกลยุทธ์",
    ],
    benefits: [
      "เห็นภาพรายได้-ค่าใช้จ่ายอย่างชัดเจน",
      "ตัดสินใจได้ว่าควรผลิตหรือไม่",
      "กำหนดราคาขายได้อย่างมีเหตุผล",
      "วางแผนการเงินระยะยาวได้",
    ],
  },
  "3": {
    title: "FDA & Legal Consultation",
    icon: "⚖️",
    description: "แนะนำขั้นตอนเบื้องต้นเรื่อง อย. และเครื่องหมายการค้า",
    fullDescription:
      "บริการให้คำปรึกษาด้านกฎหมายและการขึ้นทะเบียน อย. สำหรับผู้ประกอบการที่ต้องการผลิตสินค้าอาหาร เครื่องสำอาง หรือยา โดยทีมผู้เชี่ยวชาญจะแนะนำขั้นตอน เอกสาร และข้อกำหนดที่จำเป็น",
    duration: "1-2 สัปดาห์",
    price: "฿10,000 - ฿18,000",
    includes: [
      "ปรึกษาเรื่องประเภทสินค้าและข้อกำหนด อย.",
      "รายการเอกสารที่ต้องเตรียมทั้งหมด",
      "แนะนำขั้นตอนการยื่นขอใบอนุญาต",
      "ปรึกษาเรื่องเครื่องหมายการค้าเบื้องต้น",
      "รายการ Checklist และ Timeline",
    ],
    process: [
      "ประเมินประเภทสินค้าและข้อกำหนด",
      "วางแผนการยื่นขอใบอนุญาต",
      "จัดทำเอกสารและ Checklist",
      "ให้คำแนะนำเพิ่มเติมตามคำถาม",
    ],
    benefits: [
      "เข้าใจกฎหมายและข้อกำหนดอย่างถูกต้อง",
      "ลดความเสี่ยงจากการทำผิดกฎหมาย",
      "ประหยัดเวลาในการเตรียมเอกสาร",
      "มั่นใจว่าสินค้าผ่านมาตรฐานและขายได้ถูกต้อง",
    ],
  },
};

export default function ServicesDetail() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  console.log(id);
  const service = id ? serviceDetails[id as keyof typeof serviceDetails] : null;

  if (!service) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Service Not Found
          </h1>
          <Button onClick={() => router.push("/services")}>
            Back to Services
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-5xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-7xl mb-4">{service.icon}</div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            {service.title}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {service.description}
          </p>
        </div>

        {/* Overview */}
        <Card className="mb-8 border-2">
          <CardHeader>
            <CardTitle className="text-2xl">Overview</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              {service.fullDescription}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-muted/30 rounded-lg">
                <h3 className="font-semibold text-foreground mb-1">Duration</h3>
                <p className="text-muted-foreground">{service.duration}</p>
              </div>
              <div className="p-4 bg-muted/30 rounded-lg">
                <h3 className="font-semibold text-foreground mb-1">
                  Price Range
                </h3>
                <p className="text-muted-foreground">{service.price}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* What's Included */}
        <Card className="mb-8 border-2">
          <CardHeader>
            <CardTitle className="text-2xl">What's Included</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {service.includes.map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-0.5 shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Process */}
        <Card className="mb-8 border-2">
          <CardHeader>
            <CardTitle className="text-2xl">Our Process</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {service.process.map((step, index) => (
                <div key={index} className="flex items-start">
                  <div className="shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold mr-4">
                    {index + 1}
                  </div>
                  <div className="pt-1">
                    <p className="text-muted-foreground">{step}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Benefits */}
        <Card className="mb-8 border-2">
          <CardHeader>
            <CardTitle className="text-2xl">Key Benefits</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start p-4 bg-muted/30 rounded-lg"
                >
                  <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-0.5 shrink-0" />
                  <span className="text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <Card className="border-2 border-primary bg-primary/5">
          <CardContent className="pt-8 pb-8 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              สนใจบริการนี้หรือไม่?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              ติดต่อเราเพื่อขอรับคำปรึกษาเบื้องต้นฟรี
              และรับใบเสนอราคาที่เหมาะกับความต้องการของคุณ
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8"
              >
                ติดต่อเรา
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => router.push("/services")}
                className="font-semibold px-8"
              >
                ดูบริการอื่น
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

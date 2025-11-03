"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { TrendingUp, Users, Factory, CheckCircle, Clock } from "lucide-react";

const metrics = [
  {
    id: 1,
    title: "SMEs Onboarded",
    value: "120+",
    icon: Users,
    description: "Growing businesses trusted us",
  },
  {
    id: 2,
    title: "OEM Partners",
    value: "45+",
    icon: Factory,
    description: "Verified manufacturing facilities",
  },
  {
    id: 3,
    title: "Projects Matched",
    value: "80+",
    icon: CheckCircle,
    description: "Successful partnerships created",
  },
  {
    id: 4,
    title: "Avg Time-to-Match",
    value: "2 weeks",
    icon: Clock,
    description: "From brief to OEM connection",
  },
];

const growthData = [
  { month: "Jan", smes: 15, projects: 8, partners: 20 },
  { month: "Feb", smes: 25, projects: 15, partners: 25 },
  { month: "Mar", smes: 40, projects: 25, partners: 30 },
  { month: "Apr", smes: 55, projects: 35, partners: 35 },
  { month: "May", smes: 75, projects: 50, partners: 38 },
  { month: "Jun", smes: 95, projects: 65, partners: 42 },
  { month: "Jul", smes: 120, projects: 80, partners: 45 },
];

export default function TractionPage() {
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
          <div className="flex items-center justify-center gap-2 mb-4">
            <TrendingUp className="w-12 h-12" />
          </div>
          <h1 className="text-5xl font-bold mb-4">Our Traction</h1>
          <p className="text-xl text-muted-foreground">
            เติบโตอย่างต่อเนื่องด้วยข้อมูลจริง
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric) => {
            const Icon = metric.icon;
            return (
              <Card
                key={metric.id}
                className="border-black/20 hover:border-black transition-all duration-300 hover:shadow-xl group text-center"
              >
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-4xl font-bold mb-2">
                    {metric.value}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold mb-1">{metric.title}</p>
                  <p className="text-sm text-muted-foreground">
                    {metric.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Growth Chart */}
        <Card className="border-black/20 mb-16">
          <CardHeader>
            <CardTitle className="text-2xl">Growth Over Time</CardTitle>
            <p className="text-muted-foreground">
              Platform metrics tracking (Last 7 months)
            </p>
          </CardHeader>
          <CardContent>
            <div className="h-96">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={growthData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
                  <XAxis dataKey="month" stroke="#000" />
                  <YAxis stroke="#000" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "white",
                      border: "1px solid #000",
                      borderRadius: "4px",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="smes"
                    stroke="#000"
                    strokeWidth={3}
                    name="SMEs"
                    dot={{ fill: "#000", r: 4 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="projects"
                    stroke="#666"
                    strokeWidth={2}
                    name="Projects"
                    dot={{ fill: "#666", r: 4 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="partners"
                    stroke="#999"
                    strokeWidth={2}
                    name="Partners"
                    dot={{ fill: "#999", r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center gap-8 mt-6">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-black rounded-full" />
                <span className="text-sm font-medium">SMEs Onboarded</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-[#666] rounded-full" />
                <span className="text-sm font-medium">Projects Matched</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-[#999] rounded-full" />
                <span className="text-sm font-medium">OEM Partners</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center p-8 border-2 border-black/20 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">
            พร้อมเป็นส่วนหนึ่งของความสำเร็จ?
          </h2>
          <p className="text-muted-foreground mb-6">
            เข้าร่วมกับ SME กว่า 120+ รายที่เชื่อมั่นในแพลตฟอร์มของเรา
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button
              onClick={() => router.push("/brief")}
              className="bg-black text-white hover:bg-white hover:text-black border-2 border-black px-8 py-6 text-lg"
            >
              Start Your Journey
            </Button>
            <Button
              onClick={() => router.push("/services")}
              variant="outline"
              className="border-2 border-black hover:bg-black hover:text-white px-8 py-6 text-lg"
            >
              Explore Services
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}

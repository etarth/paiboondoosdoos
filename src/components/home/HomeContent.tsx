"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Factory,
  Search,
  GitCompare,
  TrendingUp,
  FileText,
  Package,
  ArrowRight,
  Users,
  Building2,
  BarChart3,
} from "lucide-react";

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center mb-6">
            <Factory className="h-16 w-16 text-primary" />
          </div>
          <h1 className="text-5xl font-bold mb-6">OEM Matching Platform</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Find, compare, and connect with the world's leading original
            equipment manufacturers. Make informed decisions with comprehensive
            data and side-by-side comparisons.
          </p>
          <Button size="lg" onClick={() => router.push("/oems")}>
            Explore OEMs
          </Button>
        </div>
      </div>

      {/* Features */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
          <Card>
            <CardHeader>
              <Search className="h-8 w-8 mb-2 text-primary" />
              <CardTitle>Advanced Search</CardTitle>
              <CardDescription>
                Filter by category, country, rating, and more to find the
                perfect manufacturing partner
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" onClick={() => router.push("/oems")}>
                Browse OEMs
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <GitCompare className="h-8 w-8 mb-2 text-primary" />
              <CardTitle>Side-by-Side Comparison</CardTitle>
              <CardDescription>
                Compare multiple OEMs on pricing, delivery time, certifications,
                and reliability
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" onClick={() => router.push("/oems")}>
                Start Comparing
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <TrendingUp className="h-8 w-8 mb-2 text-primary" />
              <CardTitle>Smart Recommendations</CardTitle>
              <CardDescription>
                Get AI-powered suggestions based on your priorities and
                requirements
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" onClick={() => router.push("/oems")}>
                Get Started
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* SME Services */}
      <div className="container mx-auto px-4 py-12 bg-muted/30">
        <h2 className="text-3xl font-bold text-center mb-12">
          For SME & Startups
        </h2>
        <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          <Card className="border-2 hover:border-primary transition-all">
            <CardHeader>
              <FileText className="h-8 w-8 mb-2 text-primary" />
              <CardTitle>Standardized Brief</CardTitle>
              <CardDescription>
                ช่วย SME ตอบคำถามหลักให้ครบก่อนเริ่มผลิต - Complete your product
                brief with guided questions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                variant="default"
                onClick={() => router.push("/blueprint")}
                className="w-full"
              >
                Start Your Brief
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary transition-all">
            <CardHeader>
              <Package className="h-8 w-8 mb-2 text-primary" />
              <CardTitle>Readiness Package</CardTitle>
              <CardDescription>
                เร่งความพร้อมให้ SME พร้อมผลิตภัณฑ์จริง - Get consulting
                services to prepare for manufacturing
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                variant="default"
                onClick={() => router.push("/services")}
                className="w-full"
              >
                View Services
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Platform Features */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-12">
          Explore the Platform
        </h2>
        <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
          <Card className="hover:shadow-lg transition-all">
            <CardHeader>
              <ArrowRight className="h-8 w-8 mb-2 text-primary" />
              <CardTitle>Process Milestones</CardTitle>
              <CardDescription>
                จากไอเดียสู่สินค้าพร้อมขาย - See our step-by-step process from
                idea to launch
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                variant="outline"
                onClick={() => router.push("/process")}
                className="w-full"
              >
                View Process
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all">
            <CardHeader>
              <Building2 className="h-8 w-8 mb-2 text-primary" />
              <CardTitle>OEM Partners</CardTitle>
              <CardDescription>
                รวมโรงงานพันธมิตรที่ผ่านการตรวจสอบแล้ว - Browse our verified
                manufacturing partners
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                variant="outline"
                onClick={() => router.push("/oems")}
                className="w-full"
              >
                View Partners
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all">
            <CardHeader>
              <BarChart3 className="h-8 w-8 mb-2 text-primary" />
              <CardTitle>Our Traction</CardTitle>
              <CardDescription>
                เติบโตอย่างต่อเนื่องด้วยข้อมูลจริง - See our growth and real
                metrics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                variant="outline"
                onClick={() => router.push("/traction")}
                className="w-full"
              >
                View Metrics
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <Card className="max-w-3xl mx-auto text-center bg-primary/5 border-primary/20">
          <CardHeader>
            <CardTitle className="text-3xl">
              Ready to Find Your OEM Partner?
            </CardTitle>
            <CardDescription className="text-base">
              Join hundreds of businesses making smarter manufacturing decisions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button size="lg" onClick={() => router.push("/oems")}>
              View All OEMs
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, AlertCircle } from "lucide-react";

const blueprintSchema = z.object({
  productConcept: z
    .string()
    .min(10, "กรุณาอธิบายแนวคิดสินค้าอย่างน้อย 10 ตัวอักษร"),
  targetAudience: z
    .string()
    .min(10, "กรุณาระบุกลุ่มเป้าหมายอย่างน้อย 10 ตัวอักษร"),
  costPerUnit: z.string().min(1, "กรุณาระบุต้นทุนต่อหน่วย"),
  retailPrice: z.string().min(1, "กรุณาระบุราคาขาย"),
  keyIngredients: z.string().min(5, "กรุณาระบุส่วนผสมหลัก"),
  packaging: z.string().min(1, "กรุณาเลือกประเภทบรรจุภัณฑ์"),
  expectedVolume: z.string().min(1, "กรุณาระบุปริมาณที่คาดหวัง"),
  businessStatus: z.string().min(1, "กรุณาเลือกสถานะการจดทะเบียน"),
  fdaKnowledge: z.string().min(1, "กรุณาเลือกความรู้เรื่อง อย."),
});

type BlueprintFormData = z.infer<typeof blueprintSchema>;

interface AnalysisResult {
  readinessScore: number;
  recommendedPackages: string[];
  strengths: string[];
  improvements: string[];
}

const calculateReadiness = (data: BlueprintFormData): AnalysisResult => {
  let score = 0;
  const strengths: string[] = [];
  const improvements: string[] = [];
  const recommendedPackages: string[] = [];

  // Business Status (20 points)
  if (data.businessStatus === "registered") {
    score += 20;
    strengths.push("Business is registered");
  } else {
    improvements.push("Consider registering your business");
  }

  // FDA Knowledge (20 points)
  if (data.fdaKnowledge === "has-knowledge") {
    score += 20;
    strengths.push("Has FDA/อย. knowledge");
  } else {
    improvements.push("Need FDA/อย. consultation");
    recommendedPackages.push("FDA & Legal Consultation");
  }

  // Product Concept Detail (15 points)
  if (data.productConcept.length > 100) {
    score += 15;
    strengths.push("Well-detailed product concept");
  } else if (data.productConcept.length > 50) {
    score += 10;
  } else {
    improvements.push("Product concept needs more detail");
    recommendedPackages.push("Idea to Brief");
  }

  // Target Audience Clarity (15 points)
  if (data.targetAudience.length > 80) {
    score += 15;
    strengths.push("Clear target audience definition");
  } else if (data.targetAudience.length > 40) {
    score += 10;
  } else {
    improvements.push("Define target audience more clearly");
  }

  // Cost/Price Analysis (10 points)
  const cost = parseFloat(data.costPerUnit);
  const price = parseFloat(data.retailPrice);
  if (!isNaN(cost) && !isNaN(price) && price > cost) {
    const margin = ((price - cost) / price) * 100;
    if (margin > 30) {
      score += 10;
      strengths.push("Healthy profit margin");
    } else {
      score += 5;
      improvements.push("Profit margin may be tight");
      recommendedPackages.push("Cost & Margin Analysis");
    }
  } else {
    improvements.push("Need proper cost-price analysis");
    recommendedPackages.push("Cost & Margin Analysis");
  }

  // Key Ingredients (10 points)
  if (data.keyIngredients.length > 50) {
    score += 10;
    strengths.push("Detailed ingredient specification");
  } else if (data.keyIngredients.length > 20) {
    score += 5;
  } else {
    improvements.push("Provide more ingredient details");
  }

  // Expected Volume (10 points)
  const volume = parseFloat(data.expectedVolume);
  if (!isNaN(volume) && volume > 0) {
    score += 10;
    if (volume >= 1000) {
      strengths.push("Good production volume planned");
    }
  }

  // Add general package recommendations based on score
  if (score < 50 && !recommendedPackages.includes("Idea to Brief")) {
    recommendedPackages.unshift("Idea to Brief");
  }

  return {
    readinessScore: Math.min(score, 100),
    recommendedPackages: [...new Set(recommendedPackages)], // Remove duplicates
    strengths,
    improvements,
  };
};

export default function Blueprint() {
  const [submittedData, setSubmittedData] = useState<BlueprintFormData | null>(
    null
  );
  const [analysis, setAnalysis] = useState<AnalysisResult | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<BlueprintFormData>({
    resolver: zodResolver(blueprintSchema),
  });

  const packaging = watch("packaging");
  const businessStatus = watch("businessStatus");
  const fdaKnowledge = watch("fdaKnowledge");

  const onSubmit = (data: BlueprintFormData) => {
    const analysisResult = calculateReadiness(data);
    setSubmittedData(data);
    setAnalysis(analysisResult);

    setTimeout(() => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            The Standardized Brief
          </h1>
          <p className="text-lg text-muted-foreground">
            ช่วย SME ตอบคำถามหลักให้ครบก่อนเริ่มผลิต
          </p>
        </div>

        <Card className="border-2 border-border shadow-lg">
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Product Concept */}
              <div className="space-y-2">
                <Label
                  htmlFor="productConcept"
                  className="text-foreground font-semibold"
                >
                  Product Concept
                </Label>
                <Textarea
                  id="productConcept"
                  {...register("productConcept")}
                  placeholder="อธิบายแนวคิดสินค้าของคุณ..."
                  className="min-h-[100px] border-input focus:border-foreground"
                />
                {errors.productConcept && (
                  <p className="text-sm text-destructive">
                    {errors.productConcept.message}
                  </p>
                )}
              </div>

              {/* Target Audience */}
              <div className="space-y-2">
                <Label
                  htmlFor="targetAudience"
                  className="text-foreground font-semibold"
                >
                  Target Audience
                </Label>
                <Textarea
                  id="targetAudience"
                  {...register("targetAudience")}
                  placeholder="กลุ่มลูกค้าเป้าหมายของคุณคือใคร..."
                  className="min-h-[100px] border-input focus:border-foreground"
                />
                {errors.targetAudience && (
                  <p className="text-sm text-destructive">
                    {errors.targetAudience.message}
                  </p>
                )}
              </div>

              {/* Target Cost/Price */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label
                    htmlFor="costPerUnit"
                    className="text-foreground font-semibold"
                  >
                    Cost per Unit (฿)
                  </Label>
                  <Input
                    id="costPerUnit"
                    type="number"
                    {...register("costPerUnit")}
                    placeholder="ต้นทุนต่อหน่วย"
                    className="border-input focus:border-foreground"
                  />
                  {errors.costPerUnit && (
                    <p className="text-sm text-destructive">
                      {errors.costPerUnit.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="retailPrice"
                    className="text-foreground font-semibold"
                  >
                    Retail Price (฿)
                  </Label>
                  <Input
                    id="retailPrice"
                    type="number"
                    {...register("retailPrice")}
                    placeholder="ราคาขาย"
                    className="border-input focus:border-foreground"
                  />
                  {errors.retailPrice && (
                    <p className="text-sm text-destructive">
                      {errors.retailPrice.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Key Ingredients */}
              <div className="space-y-2">
                <Label
                  htmlFor="keyIngredients"
                  className="text-foreground font-semibold"
                >
                  Key Ingredients
                </Label>
                <Textarea
                  id="keyIngredients"
                  {...register("keyIngredients")}
                  placeholder="ส่วนผสมหลักของสินค้า..."
                  className="min-h-[80px] border-input focus:border-foreground"
                />
                {errors.keyIngredients && (
                  <p className="text-sm text-destructive">
                    {errors.keyIngredients.message}
                  </p>
                )}
              </div>

              {/* Packaging */}
              <div className="space-y-2">
                <Label
                  htmlFor="packaging"
                  className="text-foreground font-semibold"
                >
                  Packaging
                </Label>
                <Select
                  onValueChange={(value) => setValue("packaging", value)}
                  value={packaging}
                >
                  <SelectTrigger className="border-input focus:border-foreground">
                    <SelectValue placeholder="เลือกประเภทบรรจุภัณฑ์" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bottle">ขวดแก้ว</SelectItem>
                    <SelectItem value="sachet">ซอง</SelectItem>
                    <SelectItem value="can">กระป๋อง</SelectItem>
                    <SelectItem value="other">อื่นๆ</SelectItem>
                  </SelectContent>
                </Select>
                {errors.packaging && (
                  <p className="text-sm text-destructive">
                    {errors.packaging.message}
                  </p>
                )}
              </div>

              {/* Expected Volume */}
              <div className="space-y-2">
                <Label
                  htmlFor="expectedVolume"
                  className="text-foreground font-semibold"
                >
                  Expected Volume (units)
                </Label>
                <Input
                  id="expectedVolume"
                  type="number"
                  {...register("expectedVolume")}
                  placeholder="ปริมาณที่คาดหวัง"
                  className="border-input focus:border-foreground"
                />
                {errors.expectedVolume && (
                  <p className="text-sm text-destructive">
                    {errors.expectedVolume.message}
                  </p>
                )}
              </div>

              {/* Business Status */}
              <div className="space-y-3">
                <Label className="text-foreground font-semibold">
                  Business Status
                </Label>
                <RadioGroup
                  onValueChange={(value) => setValue("businessStatus", value)}
                  value={businessStatus}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="registered" id="registered" />
                    <Label
                      htmlFor="registered"
                      className="font-normal cursor-pointer"
                    >
                      จดทะเบียนแล้ว
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="not-registered"
                      id="not-registered"
                    />
                    <Label
                      htmlFor="not-registered"
                      className="font-normal cursor-pointer"
                    >
                      ยังไม่จดทะเบียน
                    </Label>
                  </div>
                </RadioGroup>
                {errors.businessStatus && (
                  <p className="text-sm text-destructive">
                    {errors.businessStatus.message}
                  </p>
                )}
              </div>

              {/* FDA Knowledge */}
              <div className="space-y-3">
                <Label className="text-foreground font-semibold">
                  FDA Knowledge
                </Label>
                <RadioGroup
                  onValueChange={(value) => setValue("fdaKnowledge", value)}
                  value={fdaKnowledge}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="has-knowledge" id="has-knowledge" />
                    <Label
                      htmlFor="has-knowledge"
                      className="font-normal cursor-pointer"
                    >
                      มีความรู้เรื่อง อย.
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no-knowledge" id="no-knowledge" />
                    <Label
                      htmlFor="no-knowledge"
                      className="font-normal cursor-pointer"
                    >
                      ไม่มีความรู้เรื่อง อย.
                    </Label>
                  </div>
                </RadioGroup>
                {errors.fdaKnowledge && (
                  <p className="text-sm text-destructive">
                    {errors.fdaKnowledge.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold py-6 transition-all hover:scale-[1.02]"
              >
                Submit Brief
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Readiness Analysis Section */}
        {submittedData && analysis && (
          <>
            <Card className="mt-12 border-2 border-primary shadow-xl animate-fade-in">
              <CardHeader className="bg-primary text-primary-foreground">
                <CardTitle className="text-2xl">Readiness Analysis</CardTitle>
                <CardDescription className="text-primary-foreground/80">
                  วิเคราะห์ความพร้อมของโปรเจกต์คุณ
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6 space-y-6">
                {/* Readiness Score */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-foreground">
                      Readiness Score
                    </h3>
                    <Badge
                      variant={
                        analysis.readinessScore >= 70 ? "default" : "secondary"
                      }
                      className="text-lg px-4 py-1"
                    >
                      {analysis.readinessScore}%
                    </Badge>
                  </div>
                  <Progress value={analysis.readinessScore} className="h-3" />
                  <p className="text-sm text-muted-foreground">
                    {analysis.readinessScore >= 85 &&
                      "Excellent! You're ready to match with OEMs."}
                    {analysis.readinessScore >= 70 &&
                      analysis.readinessScore < 85 &&
                      "Good progress! A few improvements will make you production-ready."}
                    {analysis.readinessScore >= 50 &&
                      analysis.readinessScore < 70 &&
                      "You're on the right track, but need some preparation."}
                    {analysis.readinessScore < 50 &&
                      "Let's work together to strengthen your product foundation."}
                  </p>
                </div>

                {/* Strengths */}
                {analysis.strengths.length > 0 && (
                  <div className="space-y-2">
                    <h3 className="font-semibold text-foreground flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                      Strengths
                    </h3>
                    <ul className="space-y-1 ml-7">
                      {analysis.strengths.map((strength, index) => (
                        <li
                          key={index}
                          className="text-sm text-muted-foreground"
                        >
                          • {strength}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Areas for Improvement */}
                {analysis.improvements.length > 0 && (
                  <div className="space-y-2">
                    <h3 className="font-semibold text-foreground flex items-center gap-2">
                      <AlertCircle className="w-5 h-5 text-orange-500" />
                      Areas for Improvement
                    </h3>
                    <ul className="space-y-1 ml-7">
                      {analysis.improvements.map((improvement, index) => (
                        <li
                          key={index}
                          className="text-sm text-muted-foreground"
                        >
                          • {improvement}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Recommended Packages */}
                {analysis.recommendedPackages.length > 0 && (
                  <div className="space-y-3 pt-4 border-t border-border">
                    <h3 className="font-semibold text-foreground">
                      Recommended Packages
                    </h3>
                    <div className="grid gap-3">
                      {analysis.recommendedPackages.map(
                        (packageName, index) => (
                          <div
                            key={index}
                            className="p-4 border-2 border-border rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors"
                          >
                            <h4 className="font-semibold text-foreground mb-1">
                              {packageName}
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              {packageName === "Idea to Brief" &&
                                "ช่วย SME ตกผลึกไอเดีย วิเคราะห์คู่แข่ง และกรอกแบบฟอร์มให้สมบูรณ์"}
                              {packageName === "Cost & Margin Analysis" &&
                                "วิเคราะห์ต้นทุน กำไร และจุดคุ้มทุนเบื้องต้น"}
                              {packageName === "FDA & Legal Consultation" &&
                                "แนะนำขั้นตอนเบื้องต้นเรื่อง อย. และเครื่องหมายการค้า"}
                            </p>
                            <Button
                              variant="outline"
                              className="mt-3 w-full"
                              onClick={() =>
                                (window.location.href = "/services")
                              }
                            >
                              Learn More
                            </Button>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Summary Section */}
            <Card className="mt-8 border-2 border-border shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Brief Summary</CardTitle>
                <CardDescription>รายละเอียดที่คุณกรอก</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Product Concept
                    </h3>
                    <p className="text-muted-foreground">
                      {submittedData.productConcept}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Target Audience
                    </h3>
                    <p className="text-muted-foreground">
                      {submittedData.targetAudience}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Cost per Unit
                    </h3>
                    <p className="text-muted-foreground">
                      ฿{submittedData.costPerUnit}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Retail Price
                    </h3>
                    <p className="text-muted-foreground">
                      ฿{submittedData.retailPrice}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Key Ingredients
                    </h3>
                    <p className="text-muted-foreground">
                      {submittedData.keyIngredients}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Packaging
                    </h3>
                    <p className="text-muted-foreground">
                      {submittedData.packaging === "bottle" && "ขวดแก้ว"}
                      {submittedData.packaging === "sachet" && "ซอง"}
                      {submittedData.packaging === "can" && "กระป๋อง"}
                      {submittedData.packaging === "other" && "อื่นๆ"}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Expected Volume
                    </h3>
                    <p className="text-muted-foreground">
                      {submittedData.expectedVolume} units
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Business Status
                    </h3>
                    <p className="text-muted-foreground">
                      {submittedData.businessStatus === "registered"
                        ? "จดทะเบียนแล้ว"
                        : "ยังไม่จดทะเบียน"}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      FDA Knowledge
                    </h3>
                    <p className="text-muted-foreground">
                      {submittedData.fdaKnowledge === "has-knowledge"
                        ? "มีความรู้เรื่อง อย."
                        : "ไม่มีความรู้เรื่อง อย."}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </>
        )}
      </div>
    </div>
  );
}

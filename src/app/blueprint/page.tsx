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

export default function Blueprint() {
  const [submittedData, setSubmittedData] = useState<BlueprintFormData | null>(
    null
  );

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
    setSubmittedData(data);
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
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
                  className="min-h-20 border-input focus:border-foreground"
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

        {/* Summary Section */}
        {submittedData && (
          <Card className="mt-12 border-2 border-primary shadow-xl animate-fade-in">
            <CardHeader className="bg-primary text-primary-foreground">
              <CardTitle className="text-2xl">Brief Summary</CardTitle>
              <CardDescription className="text-primary-foreground/80">
                รายละเอียดที่คุณกรอก
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
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
        )}
      </div>
    </div>
  );
}

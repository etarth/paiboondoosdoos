"use client";
import { useMemo } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { mockOEMs } from "@/data/mockOEMs";
import { OEM } from "@/types/oem";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";
import {
  ArrowLeft,
  Crown,
  TrendingUp,
  Clock,
  DollarSign,
  Award,
} from "lucide-react";

export default function OEMComparison() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const oemIds = searchParams.get("ids")?.split(",") || [];

  const selectedOEMs = useMemo(() => {
    return mockOEMs.filter((oem) => oemIds.includes(oem.id));
  }, [oemIds]);

  const getBestValue = (metric: keyof OEM, isHigherBetter: boolean = true) => {
    if (selectedOEMs.length === 0) return null;

    if (metric === "rating" || metric === "reliability") {
      const values = selectedOEMs.map((oem) => Number(oem[metric]));
      return isHigherBetter ? Math.max(...values) : Math.min(...values);
    }

    if (metric === "deliveryTime") {
      const getWeeks = (time: string) => {
        const match = time.match(/(\d+)-(\d+)/);
        return match ? parseInt(match[1]) : 999;
      };
      const minWeeks = Math.min(
        ...selectedOEMs.map((oem) => getWeeks(oem.deliveryTime))
      );
      return selectedOEMs.find((oem) => getWeeks(oem.deliveryTime) === minWeeks)
        ?.deliveryTime;
    }

    return null;
  };

  const getRecommendation = () => {
    if (selectedOEMs.length === 0) return null;

    const scores = selectedOEMs.map((oem) => ({
      oem,
      score: oem.rating * 10 + oem.reliability * 0.5,
    }));

    scores.sort((a, b) => b.score - a.score);
    return scores[0].oem;
  };

  const recommendation = getRecommendation();

  const isBest = (oem: OEM, value: any, bestValue: any) => {
    return value === bestValue;
  };

  if (selectedOEMs.length === 0) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="max-w-md">
          <CardHeader>
            <CardTitle>No OEMs Selected</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Please select at least 2 OEMs from the list to compare.
            </p>
            <Button onClick={() => navigate("/oems")}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to OEM List
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Button
            variant="ghost"
            onClick={() => navigate("/oems")}
            className="mb-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to List
          </Button>
          <h1 className="text-4xl font-bold mb-2">OEM Comparison</h1>
          <p className="text-muted-foreground">
            Comparing {selectedOEMs.length} manufacturer
            {selectedOEMs.length !== 1 ? "s" : ""}
          </p>
        </div>

        {/* Recommendation Card */}
        {recommendation && (
          <Card className="mb-6 border-primary bg-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Crown className="h-5 w-5 text-primary" />
                Recommended Choice
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {recommendation.name}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {recommendation.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="default">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      {recommendation.rating} Rating
                    </Badge>
                    <Badge variant="default">
                      <Award className="h-3 w-3 mr-1" />
                      {recommendation.reliability}% Reliability
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Comparison Table */}
        <Card>
          <CardHeader>
            <CardTitle>Detailed Comparison</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[200px]">Metric</TableHead>
                    {selectedOEMs.map((oem) => (
                      <TableHead key={oem.id} className="text-center">
                        <div className="font-semibold">{oem.name}</div>
                        <div className="text-xs text-muted-foreground font-normal">
                          {oem.country}
                        </div>
                      </TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {/* Rating */}
                  <TableRow>
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="h-4 w-4" />
                        Rating
                      </div>
                    </TableCell>
                    {selectedOEMs.map((oem) => (
                      <TableCell key={oem.id} className="text-center">
                        <div
                          className={`font-semibold ${
                            isBest(
                              oem,
                              oem.rating,
                              getBestValue("rating", true)
                            )
                              ? "text-primary"
                              : ""
                          }`}
                        >
                          {oem.rating} / 5.0
                        </div>
                      </TableCell>
                    ))}
                  </TableRow>

                  {/* Reliability */}
                  <TableRow>
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-2">
                        <Award className="h-4 w-4" />
                        Reliability
                      </div>
                    </TableCell>
                    {selectedOEMs.map((oem) => (
                      <TableCell key={oem.id} className="text-center">
                        <div
                          className={`font-semibold ${
                            isBest(
                              oem,
                              oem.reliability,
                              getBestValue("reliability", true)
                            )
                              ? "text-primary"
                              : ""
                          }`}
                        >
                          {oem.reliability}%
                        </div>
                      </TableCell>
                    ))}
                  </TableRow>

                  {/* Price Range */}
                  <TableRow>
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-2">
                        <DollarSign className="h-4 w-4" />
                        Price Range
                      </div>
                    </TableCell>
                    {selectedOEMs.map((oem) => (
                      <TableCell key={oem.id} className="text-center">
                        {oem.priceRange}
                      </TableCell>
                    ))}
                  </TableRow>

                  {/* Delivery Time */}
                  <TableRow>
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        Delivery Time
                      </div>
                    </TableCell>
                    {selectedOEMs.map((oem) => (
                      <TableCell key={oem.id} className="text-center">
                        <div
                          className={`${
                            isBest(
                              oem,
                              oem.deliveryTime,
                              getBestValue("deliveryTime", false)
                            )
                              ? "text-primary font-semibold"
                              : ""
                          }`}
                        >
                          {oem.deliveryTime}
                        </div>
                      </TableCell>
                    ))}
                  </TableRow>

                  {/* MOQ */}
                  <TableRow>
                    <TableCell className="font-medium">
                      Minimum Order Quantity
                    </TableCell>
                    {selectedOEMs.map((oem) => (
                      <TableCell key={oem.id} className="text-center">
                        {oem.moq}
                      </TableCell>
                    ))}
                  </TableRow>

                  {/* Categories */}
                  <TableRow>
                    <TableCell className="font-medium">
                      Product Categories
                    </TableCell>
                    {selectedOEMs.map((oem) => (
                      <TableCell key={oem.id}>
                        <div className="flex flex-wrap gap-1 justify-center">
                          {oem.categories.map((cat) => (
                            <Badge
                              key={cat}
                              variant="secondary"
                              className="text-xs"
                            >
                              {cat}
                            </Badge>
                          ))}
                        </div>
                      </TableCell>
                    ))}
                  </TableRow>

                  {/* Certifications */}
                  <TableRow>
                    <TableCell className="font-medium">
                      Certifications
                    </TableCell>
                    {selectedOEMs.map((oem) => (
                      <TableCell key={oem.id}>
                        <div className="flex flex-wrap gap-1 justify-center">
                          {oem.certifications.map((cert) => (
                            <Badge
                              key={cert}
                              variant="outline"
                              className="text-xs"
                            >
                              {cert}
                            </Badge>
                          ))}
                        </div>
                      </TableCell>
                    ))}
                  </TableRow>

                  {/* Website */}
                  <TableRow>
                    <TableCell className="font-medium">Website</TableCell>
                    {selectedOEMs.map((oem) => (
                      <TableCell key={oem.id} className="text-center">
                        <Button
                          variant="link"
                          size="sm"
                          onClick={() => window.open(oem.website, "_blank")}
                        >
                          Visit Site
                        </Button>
                      </TableCell>
                    ))}
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Key Insights */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <DollarSign className="h-4 w-4" />
                Best Value
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Consider delivery time, MOQ, and certifications alongside price.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <Clock className="h-4 w-4" />
                Fastest Delivery
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm font-semibold">
                {getBestValue("deliveryTime", false) || "N/A"}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <Award className="h-4 w-4" />
                Highest Quality
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm font-semibold">
                {getBestValue("reliability", true)}% reliability
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

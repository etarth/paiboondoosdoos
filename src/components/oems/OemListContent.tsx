import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { mockOEMs } from "../../data/mockOEMs";
import { OEM } from "@/types/oem";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Star, Globe, MapPin, CheckCircle2 } from "lucide-react";
import { useRouter } from "next/navigation";

const OEMListContent = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedCountry, setSelectedCountry] = useState<string>("all");
  const [selectedOEMs, setSelectedOEMs] = useState<string[]>([]);

  const allCategories = useMemo(() => {
    const categories = new Set<string>();
    mockOEMs.map((oem: OEM) =>
      oem.categories.map((cat) => categories.add(cat))
    );
    return ["all", ...Array.from(categories)];
  }, []);

  const allCountries = useMemo(() => {
    const countries = new Set(mockOEMs.map((oem) => oem.country));
    return ["all", ...Array.from(countries)];
  }, []);

  const filteredOEMs = useMemo(() => {
    return mockOEMs.filter((oem) => {
      const matchesSearch =
        oem.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        oem.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === "all" || oem.categories.includes(selectedCategory);
      const matchesCountry =
        selectedCountry === "all" || oem.country === selectedCountry;
      return matchesSearch && matchesCategory && matchesCountry;
    });
  }, [searchQuery, selectedCategory, selectedCountry]);

  const toggleOEMSelection = (id: string) => {
    setSelectedOEMs((prev) =>
      prev.includes(id) ? prev.filter((oemId) => oemId !== id) : [...prev, id]
    );
  };

  const handleCompare = () => {
    if (selectedOEMs.length >= 2) {
      router.push(`/oems/compare?ids=${selectedOEMs.join(",")}`);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">OEM Directory</h1>
          <p className="text-muted-foreground">
            Find and compare original equipment manufacturers worldwide
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-6 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search by name or description..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Select
              value={selectedCategory}
              onValueChange={setSelectedCategory}
            >
              <SelectTrigger className="w-full sm:w-[200px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                {allCategories.map((cat) => (
                  <SelectItem key={cat} value={cat}>
                    {cat === "all" ? "All Categories" : cat}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedCountry} onValueChange={setSelectedCountry}>
              <SelectTrigger className="w-full sm:w-[200px]">
                <SelectValue placeholder="Country" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                {allCountries.map((country) => (
                  <SelectItem key={country} value={country}>
                    {country === "all" ? "All Countries" : country}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {selectedOEMs.length >= 2 && (
              <Button
                onClick={handleCompare}
                className="w-full sm:w-auto bg-black text-white"
              >
                Compare Selected ({selectedOEMs.length})
              </Button>
            )}
          </div>
        </div>

        {/* Results */}
        <div className="mb-4 text-sm text-muted-foreground">
          Showing {filteredOEMs.length} OEM
          {filteredOEMs.length !== 1 ? "s" : ""}
        </div>

        {/* OEM Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredOEMs.map((oem) => (
            <Card
              key={oem.id}
              className={`transition-all hover:shadow-lg ${
                selectedOEMs.includes(oem.id) ? "ring-2 ring-primary" : ""
              }`}
            >
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">{oem.name}</CardTitle>
                    <CardDescription className="line-clamp-2">
                      {oem.description}
                    </CardDescription>
                  </div>
                  {selectedOEMs.includes(oem.id) && (
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 ml-2" />
                  )}
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex items-center gap-2 text-sm">
                  <Star className="h-4 w-4 fill-primary text-primary" />
                  <span className="font-semibold">{oem.rating}</span>
                  <span className="text-muted-foreground">
                    ({oem.reliability}% reliability)
                  </span>
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>
                    {oem.country}, {oem.region}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {oem.categories.map((cat) => (
                    <Badge key={cat} variant="secondary">
                      {cat}
                    </Badge>
                  ))}
                </div>

                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Price Range:</span>
                    <span className="font-medium">{oem.priceRange}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Delivery:</span>
                    <span className="font-medium">{oem.deliveryTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">MOQ:</span>
                    <span className="font-medium">{oem.moq}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1">
                  {oem.certifications.map((cert) => (
                    <Badge key={cert} variant="outline" className="text-xs">
                      {cert}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1"
                  onClick={() => window.open(oem.website, "_blank")}
                >
                  <Globe className="h-4 w-4 mr-2" />
                  Website
                </Button>
                <Button
                  size="sm"
                  variant={
                    selectedOEMs.includes(oem.id) ? "default" : "outline"
                  }
                  className={`flex-1 ${
                    selectedOEMs.includes(oem.id)
                      ? "bg-black text-white"
                      : "bg-white"
                  }`}
                  onClick={() => toggleOEMSelection(oem.id)}
                >
                  {selectedOEMs.includes(oem.id) ? "Selected" : "Select"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredOEMs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No OEMs found matching your criteria
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default OEMListContent;

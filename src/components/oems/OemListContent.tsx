import { useState, useMemo } from "react";
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
import { Search, Star, MapPin, CheckCircle2 } from "lucide-react";
import { useRouter } from "next/navigation";

const OEMListContent = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedCountry, setSelectedCountry] = useState<string>("all");
  const [selectedOEMs, setSelectedOEMs] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<string>("rating_desc");

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

  const getWeeks = (time: string) => {
    const match = time.match(/(\d+)-(\d+)/);
    return match ? parseInt(match[1]) : 999;
  };

  const filteredOEMs = useMemo(() => {
    const filtered = mockOEMs.filter((oem) => {
      const matchesSearch =
        oem.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        oem.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === "all" || oem.categories.includes(selectedCategory);
      const matchesCountry =
        selectedCountry === "all" || oem.country === selectedCountry;
      return matchesSearch && matchesCategory && matchesCountry;
    });

    return filtered.sort((a, b) => {
      switch (sortBy) {
        case "rating_desc":
          return b.rating - a.rating;
        case "reliability_desc":
          return b.reliability - a.reliability;
        case "delivery_asc":
          return getWeeks(a.deliveryTime) - getWeeks(b.deliveryTime);
        default:
          return 0;
      }
    });
  }, [searchQuery, selectedCategory, selectedCountry, sortBy]);

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

  const getCoverUrl = (oem: OEM) => {
    const primary = oem.categories[0]?.toLowerCase() || "factory";
    return `https://picsum.photos/seed/${primary}-${oem.id}/800/400`;
  };

  return (
    <div className="min-h-screen">
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
            <Search className=" absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search by name or description..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 border-gray-300 text-foreground focus:ring-gray-400"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Select
              value={selectedCategory}
              onValueChange={setSelectedCategory}
            >
              <SelectTrigger className="w-full sm:w-[200px] border-gray-300 text-foreground focus:ring-gray-400">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent className="bg-white border-gray-300 text-foreground focus:ring-gray-400">
                {allCategories.map((cat) => (
                  <SelectItem key={cat} value={cat}>
                    {cat === "all" ? "All Categories" : cat}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedCountry} onValueChange={setSelectedCountry}>
              <SelectTrigger className="w-full sm:w-[200px] border-gray-300 text-foreground focus:ring-gray-400">
                <SelectValue placeholder="Country" />
              </SelectTrigger>
              <SelectContent className="bg-white border-gray-300 text-foreground focus:ring-gray-400">
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
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredOEMs.map((oem) => (
            <Card
              key={oem.id}
              className={`rounded-xl overflow-hidden border-0 bg-white transition-all hover:shadow-lg ${
                selectedOEMs.includes(oem.id) ? "ring-2 ring-primary" : ""
              }`}
            >
              {/* Image + header overlap wrapper */}
              <div className="relative">
                <div className="absolute top-2 right-2">
                  <CheckCircle2
                    onClick={() => toggleOEMSelection(oem.id)}
                    className={`h-6 w-6 text-primary flex-shrink-0 cursor-pointer ${
                      selectedOEMs.includes(oem.id)
                        ? "text-black"
                        : "text-white"
                    }`}
                  />
                </div>

                <div className="aspect-[16/12] w-full rounded-t-xl overflow-hidden">
                  <img
                    src={getCoverUrl(oem)}
                    alt={`${oem.name} cover`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  {/* Fade overlay sits below header */}
                  <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-white z-10" />
                </div>

                <CardHeader className="absolute inset-x-0 -bottom-12 z-20 px-6">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{oem.name}</CardTitle>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {oem.categories.map((cat: string) => (
                          <Badge
                            key={cat}
                            variant="secondary"
                            className="text-xs font-medium text-black bg-white"
                          >
                            {cat}
                          </Badge>
                        ))}
                      </div>
                      <CardDescription className="line-clamp-2">
                        {oem.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </div>

              <CardFooter className="flex flex-col gap-2 mt-16">
                <div className="flex flex-row gap-2 w-full justify-between">
                  <div className="flex justify-between gap-2 text-sm">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-primary text-primary" />
                      <span className="font-semibold">{oem.rating}</span>
                    </div>
{/* 
                    <span className=" text-xs text-gray-500">
                      {oem.reliability}% reliability
                    </span> */}
                  </div>

                  <div className="flex justify-between items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm text-black">{oem.country}</span>
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    className="w-32 py-3 text-base bg-black text-white"
                    onClick={() => router.push(`/oem/profile`)}
                  >
                    Explore
                  </Button>
                </div>
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

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Wifi,
  Coffee,
  Tv,
  Wind,
  Utensils,
  Car,
  Clock,
  Shield,
  Bed,
  Bath,
  Laptop,
  Droplet,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Amenities = () => {
  const amenityGroups = [
    {
      title: "Room Features",
      items: [
        { icon: Bed, name: "Comfortable Beds", description: "Premium mattresses and linens" },
        { icon: Wifi, name: "Free Wi-Fi", description: "High-speed internet throughout" },
        { icon: Tv, name: "Flat-screen TV", description: "Modern entertainment system" },
        { icon: Laptop, name: "Work Desk", description: "Spacious workspace with ergonomic chair" },
        { icon: Wind, name: "Air Conditioning", description: "Climate control in every room" },
        { icon: Coffee, name: "Nespresso Machine", description: "Premium coffee in your room" },
      ],
    },
    {
      title: "Bathroom Amenities",
      items: [
        { icon: Bath, name: "Modern Shower", description: "Walk-in shower with premium fixtures" },
        { icon: Droplet, name: "Premium Toiletries", description: "High-quality bath products" },
        { icon: Bath, name: "Fresh Towels", description: "Daily refreshed linens" },
      ],
    },
    {
      title: "Hotel Services",
      items: [
        { icon: Utensils, name: "Breakfast", description: "Continental breakfast included" },
        { icon: Car, name: "Parking", description: "Convenient parking available" },
        { icon: Clock, name: "24/7 Reception", description: "Round-the-clock assistance" },
        { icon: Shield, name: "Secure Access", description: "Electronic key card system" },
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-accent/20 to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Amenities</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need for a comfortable and convenient stay
          </p>
        </div>
      </section>

      {/* Amenities Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 space-y-16">
          {amenityGroups.map((group, groupIndex) => (
            <div key={groupIndex}>
              <h2 className="text-3xl font-bold text-center mb-12">{group.title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {group.items.map((item, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-medium transition-shadow border-border/50"
                  >
                    <CardHeader>
                      <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4">
                        <item.icon className="h-7 w-7" />
                      </div>
                      <CardTitle className="text-xl">{item.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Additional Information</h2>
            <div className="space-y-6 text-muted-foreground">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Check-in / Check-out</h3>
                <p>Check-in: from 3:00 PM | Check-out: until 11:00 AM</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Location Benefits</h3>
                <p>
                  Located in the heart of Bonn, HOTEL83 offers easy access to the city center,
                  shopping areas, restaurants, and major attractions. Public transportation is
                  readily available nearby.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Accessibility</h3>
                <p>
                  Our hotel is designed to be accessible to all guests. Please contact us in
                  advance if you have specific requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Amenities;

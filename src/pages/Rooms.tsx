import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wifi, Coffee, Tv, Wind, User, Users } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import room1 from "@/assets/room-1.jpg";
import room2 from "@/assets/room-2.jpg";
import room3 from "@/assets/room-3.jpg";

const Rooms = () => {
  const rooms = [
    {
      id: 1,
      name: "Single Room",
      image: room1,
      price: "€79",
      capacity: "1 Guest",
      size: "18 m²",
      icon: User,
      features: ["Single Bed", "Work Desk", "Private Bathroom", "Free Wi-Fi", "Flat-screen TV"],
    },
    {
      id: 2,
      name: "Double Room",
      image: room2,
      price: "€99",
      capacity: "2 Guests",
      size: "22 m²",
      icon: Users,
      features: [
        "Double Bed or Twin Beds",
        "Work Desk",
        "Private Bathroom",
        "Free Wi-Fi",
        "Flat-screen TV",
        "Nespresso Machine",
      ],
    },
    {
      id: 3,
      name: "Deluxe Room",
      image: room3,
      price: "€129",
      capacity: "2 Guests",
      size: "28 m²",
      icon: Users,
      features: [
        "King-size Bed",
        "Sitting Area",
        "Premium Bathroom",
        "Free Wi-Fi",
        "Flat-screen TV",
        "Nespresso Machine",
        "Air Conditioning",
      ],
    },
  ];

  const amenities = [
    { icon: Wifi, label: "Free Wi-Fi" },
    { icon: Coffee, label: "Nespresso" },
    { icon: Tv, label: "Flat-screen TV" },
    { icon: Wind, label: "Air Conditioning" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-accent/20 to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Rooms & Suites</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comfortable and stylish accommodations designed for your perfect stay
          </p>
        </div>
      </section>

      {/* Room Amenities Icons */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8">
            {amenities.map((item, index) => (
              <div key={index} className="flex items-center space-x-2 text-muted-foreground">
                <item.icon className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {rooms.map((room) => (
              <Card key={room.id} className="overflow-hidden hover:shadow-strong transition-shadow">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                    From {room.price}/night
                  </Badge>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl">{room.name}</CardTitle>
                    <room.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span>{room.capacity}</span>
                    <span>•</span>
                    <span>{room.size}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Features:</h4>
                    <ul className="space-y-1">
                      {room.features.map((feature, index) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-center">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button className="w-full" asChild>
                    <Link to="/reservations">Book Now</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Book Your Stay?</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Choose your perfect room and enjoy a comfortable stay in Bonn
          </p>
          <Button size="lg" asChild>
            <Link to="/reservations">Make a Reservation</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Rooms;

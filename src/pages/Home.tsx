import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Wifi, Coffee, MapPin, Star, Utensils } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import room1 from "@/assets/room-1.jpg";
import room2 from "@/assets/room-2.jpg";
import room3 from "@/assets/room-3.jpg";

const Home = () => {
  const highlights = [
    {
      icon: Wifi,
      title: "Free Wi-Fi",
      description: "High-speed internet throughout the hotel",
    },
    {
      icon: MapPin,
      title: "Central Location",
      description: "Close to Bonn city center and attractions",
    },
    {
      icon: Utensils,
      title: "Breakfast Included",
      description: "Fresh continental breakfast every morning",
    },
    {
      icon: Star,
      title: "Modern Rooms",
      description: "Comfortable and stylish accommodations",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-accent/20 to-background">
        <div className="container mx-auto px-4 text-center z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Stay in Style at HOTEL83 Bonn
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Experience modern comfort and excellent service in the heart of Bonn
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/reservations">Book Your Stay</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/rooms">Explore Rooms</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Welcome to HOTEL83 Bonn</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              HOTEL83 Bonn is a modern and cozy urban hotel offering comfort, simplicity, and
              excellent service near the city center. Our boutique hotel combines contemporary
              design with warm hospitality to create an unforgettable stay experience.
            </p>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-medium transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                  <item.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Rooms</h2>
            <p className="text-lg text-muted-foreground">
              Discover our comfortable and stylish accommodations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group relative overflow-hidden rounded-lg shadow-medium hover:shadow-strong transition-shadow">
              <img
                src={room1}
                alt="Hotel Room"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="group relative overflow-hidden rounded-lg shadow-medium hover:shadow-strong transition-shadow">
              <img
                src={room2}
                alt="Hotel Room"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="group relative overflow-hidden rounded-lg shadow-medium hover:shadow-strong transition-shadow">
              <img
                src={room3}
                alt="Hotel Room"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
          <div className="text-center mt-8">
            <Button size="lg" variant="outline" asChild>
              <Link to="/gallery">View Full Gallery</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-current" />
              ))}
            </div>
            <blockquote className="text-2xl md:text-3xl font-light mb-6 italic">
              "Fantastic stay! The rooms are modern, clean, and comfortable. Perfect location near
              the city center. Highly recommended!"
            </blockquote>
            <p className="text-lg opacity-90">— Guest Review</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;

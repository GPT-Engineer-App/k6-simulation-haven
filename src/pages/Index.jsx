import { useState } from "react";
import { Paw, Heart, Info, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const Index = () => {
  const [likeCount, setLikeCount] = useState(0);
  const popularBreeds = [
    { name: "Labrador Retriever", description: "Friendly and outgoing" },
    { name: "German Shepherd", description: "Intelligent and versatile" },
    { name: "Golden Retriever", description: "Loyal and gentle" },
    { name: "French Bulldog", description: "Adaptable and playful" },
    { name: "Bulldog", description: "Calm and courageous" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-4 flex items-center justify-center text-blue-800">
            <Paw className="mr-4 h-16 w-16" /> Pawsome Pals
          </h1>
          <p className="text-xl text-gray-600 mb-8">Discover the wonderful world of dogs!</p>
          <Button size="lg" onClick={() => setLikeCount(likeCount + 1)}>
            <Heart className="mr-2 h-4 w-4" /> Show Some Love ({likeCount})
          </Button>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-semibold mb-4 text-blue-800">Man's Best Friend</h2>
            <p className="text-lg mb-6 text-gray-700">
              Dogs have been our loyal companions for thousands of years, offering unconditional love,
              protection, and friendship. From working dogs to lap dogs, there's a perfect furry friend
              for every lifestyle and preference.
            </p>
            <img
              src="/placeholder.svg"
              alt="A cute dog"
              className="mx-auto object-cover w-full h-64 rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-semibold mb-4 text-blue-800">Popular Dog Breeds</h2>
            <div className="grid gap-4">
              {popularBreeds.map((breed) => (
                <Card key={breed.name}>
                  <CardHeader>
                    <CardTitle>{breed.name}</CardTitle>
                    <CardDescription>{breed.description}</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="outline" size="icon">
                            <Info className="h-4 w-4" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Learn more about {breed.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-semibold mb-4 text-blue-800">Ready to Find Your Perfect Companion?</h2>
          <p className="text-lg mb-6 text-gray-700">
            Whether you're a first-time dog owner or a seasoned pet parent, dogs can bring
            joy, laughter, and a sense of purpose to your life. Remember, adopting a dog is
            a big responsibility, but the rewards are immeasurable!
          </p>
          <Button size="lg" variant="secondary">
            <Award className="mr-2 h-4 w-4" /> Explore Adoption Options
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;

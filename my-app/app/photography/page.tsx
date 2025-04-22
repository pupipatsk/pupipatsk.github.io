import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, Instagram, Mail } from "lucide-react";

export default function PhotographyPage() {
  // Photography categories
  const categories = [
    { id: "all", name: "All Work" },
    { id: "events", name: "Events" },
    { id: "portrait", name: "Portrait" },
    { id: "landscape", name: "Landscape" },
  ];

  // Photography items (placeholder data)
  const photos = [
    { id: 1, title: "School Event", category: "events" },
    { id: 2, title: "Urban Portrait", category: "portrait" },
    { id: 3, title: "Mountain View", category: "landscape" },
    { id: 4, title: "Graduation Ceremony", category: "events" },
    { id: 5, title: "Environmental Portrait", category: "portrait" },
    { id: 6, title: "Coastal Sunset", category: "landscape" },
    { id: 7, title: "University Fair", category: "events" },
    { id: 8, title: "Studio Portrait", category: "portrait" },
    { id: 9, title: "City Skyline", category: "landscape" },
  ];

  return (
    <div className="container py-12">
      <div className="mb-8 space-y-2">
        <h1 className="text-3xl font-bold">Photography Portfolio</h1>
        <p className="text-muted-foreground">
          A selection of my photographic work
        </p>
        <div className="mt-4">
          <Link
            href="https://www.instagram.com/pupick.sk/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm hover:text-foreground"
          >
            <Instagram className="mr-2 h-4 w-4" />
            Follow me on Instagram
            <span>&nbsp;</span>
            <span className="font-semibold">@pupick.sk</span>
            <ExternalLink className="ml-1 h-3 w-3" />
          </Link>
        </div>
      </div>

      <Tabs defaultValue="all" className="mb-8">
        <TabsList className="mb-6">
          {categories.map((category) => (
            <TabsTrigger key={category.id} value={category.id}>
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((category) => (
          <TabsContent key={category.id} value={category.id} className="mt-0">
            <div className="photo-grid">
              {photos
                .filter(
                  (photo) =>
                    category.id === "all" || photo.category === category.id
                )
                .map((photo) => (
                  <div key={photo.id} className="photo-item">
                    <Image
                      src={`/placeholder.svg?height=500&width=500`}
                      alt={photo.title}
                      width={500}
                      height={500}
                      className="rounded-md"
                    />
                    <div className="mt-2">
                      <h3 className="font-medium">{photo.title}</h3>
                      <p className="text-sm capitalize text-muted-foreground">
                        {photo.category}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <Card className="mt-12">
        <CardHeader>
          <CardTitle>Photography Experience</CardTitle>
          <CardDescription>My background in photography</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              My photography journey began during my time at Triam Udom Suksa
              School, where I was an active member and staff of the Triam Udom
              Photo Club. I captured photos at various school events, developing
              my skills in event and portrait photography.
            </p>
            <p className="text-muted-foreground">
              Since then, I've continued to pursue photography as a freelancer,
              working on various projects including:
            </p>
            <ul className="ml-5 list-disc text-muted-foreground">
              <li>Portrait sessions for individuals and groups</li>
              <li>Event photography</li>
              <li>Landscape photography during travels</li>
            </ul>
            <p className="font-medium">Interested in working together?</p>
            <p className="text-muted-foreground">
              I'm available for photography projects and collaborations. Feel
              free to reach out to discuss your needs.
            </p>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-start">
          <Button asChild>
            <Link
              href="https://www.instagram.com/pupick.sk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="mr-2 h-4 w-4" /> DM me on Instagram
            </Link>
          </Button>
          {/* <Button asChild variant="secondary">
            <Link href="mailto:pupipat.sk@gmail.com">
              <Mail className="mr-2 h-4 w-4" />
              Email
            </Link>
          </Button> */}
        </CardFooter>
      </Card>
    </div>
  );
}

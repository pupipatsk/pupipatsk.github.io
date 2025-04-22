import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Award, Code, Linkedin, Github } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 md:py-28">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_450px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Pupipat Singkhorn</h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Computer Engineering Student & Data Scientist
                </p>
              </div>
              <p className="max-w-[600px] text-muted-foreground">
                I'm a Computer Engineering student at Chulalongkorn University with a passion for data science, machine
                learning, and financial technology. Currently focused on developing skills in risk management and
                quantitative analysis.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild>
                  <Link href="/resume">
                    View Resume <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/photography">
                    View Photography <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="mx-auto aspect-square overflow-hidden rounded-full border border-border">
              <Image
                src="/profile/profile-photo.png"
                width={450}
                height={450}
                alt="Portrait of Pupipat Singkhorn"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="border-t border-border py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Achievements</h2>
              <p className="max-w-[600px] text-muted-foreground">Recent accomplishments and notable projects</p>
            </div>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <Award className="h-10 w-10 text-primary" />
                  <div>
                    <h3 className="font-serif text-lg font-medium">Aihack Thailand 2023</h3>
                    <p className="text-sm text-muted-foreground">1st Prize & Best Performance Prize</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  Created a machine learning model to forecast credit default risk.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <Code className="h-10 w-10 text-primary" />
                  <div>
                    <h3 className="font-serif text-lg font-medium">Stock Return Forecasting</h3>
                    <p className="text-sm text-muted-foreground">Portfolio Optimization Project</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  Developed an alpha factor model to forecast stock returns using ML and LSTM networks.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <Award className="h-10 w-10 text-primary" />
                  <div>
                    <h3 className="font-serif text-lg font-medium">SAS x CBS Hackathon</h3>
                    <p className="text-sm text-muted-foreground">4th Place</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  Built a 2-stage ensemble model for targeted donor outreach in fundraising campaigns.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills & Education Section */}
      <section className="border-t border-border py-12 md:py-16 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Education</h2>
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Chulalongkorn University</h3>
                  <p className="text-sm text-muted-foreground">2022 - Present</p>
                  <p className="font-medium">Bachelor of Engineering - Computer Engineering Major</p>
                  <p className="text-muted-foreground">GPA: 3.48</p>
                  <p className="text-sm text-muted-foreground">
                    Relevant Coursework: Pattern Recognition (Deep Learning), Natural Language Processing Systems (NLP),
                    Algorithm & Data Structures, Database Systems, Optimization, Statistics, Signal Processing.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Triam Udom Suksa School</h3>
                  <p className="text-sm text-muted-foreground">2019 - 2022</p>
                  <p className="font-medium">Science-Mathematics Major</p>
                  <p className="text-muted-foreground">GPA: 3.85</p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>• Thailand Physics Olympiad (TPhO): Bronze Medal (19th TPhO)</li>
                    <li>• Triam Udom Photo Club (Staff and Member)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Technical Skills</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium">Languages</h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {["Python", "SQL", "C++", "C", "HTML", "CSS", "LaTeX", "Markdown"].map((skill) => (
                      <Badge key={skill} variant="outline" className="rounded-full">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium">Libraries & Tools</h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {["PyTorch", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Plotly", "Streamlit"].map(
                      (skill) => (
                        <Badge key={skill} variant="outline" className="rounded-full">
                          {skill}
                        </Badge>
                      ),
                    )}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium">Applications</h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {["Excel", "Power BI", "Tableau", "Git", "GitHub"].map((skill) => (
                      <Badge key={skill} variant="outline" className="rounded-full">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium">Certifications</h3>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>• Financial Engineering and Risk Management Specialization — Columbia University (Nov 2024)</li>
                    <li>• Machine Learning Specialization — DeepLearning.AI & Stanford University (Aug 2024)</li>
                    <li>• Google Data Analytics Professional Certificate — Google (Jul 2023)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="border-t border-border py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Get in Touch</h2>
              <p className="max-w-[600px] text-muted-foreground">
                Interested in working together or have any questions?
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild>
                <Link href="mailto:pupipat.sk@gmail.com">Email Me</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="https://www.linkedin.com/in/pupipatsk" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="https://github.com/pupipatsk" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" /> GitHub
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

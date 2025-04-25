import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Download, ExternalLink } from "lucide-react";

export default function ResumePage() {
  return (
    <div className="container max-w-4xl py-12">
      <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-3xl font-bold">Pupipat Singkhorn</h1>
          <div className="mt-2 flex flex-col space-y-1 text-muted-foreground sm:flex-row sm:items-center sm:space-x-4 sm:space-y-0">
            <span>📧 pupipat.sk@gmail.com</span>
            <span className="hidden sm:inline">•</span>
            <span>📍 Bangkok, Thailand</span>
          </div>
          <div className="mt-2 flex flex-wrap gap-2">
            <Link
              href="https://www.linkedin.com/in/pupipatsk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
            >
              LinkedIn <ExternalLink className="ml-1 h-3 w-3" />
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link
              href="https://github.com/pupipatsk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
            >
              GitHub <ExternalLink className="ml-1 h-3 w-3" />
            </Link>
          </div>
        </div>
        <Button variant="outline" className="shrink-0" asChild>
          <Link href="/files/resume.pdf" download>
            <Download className="mr-2 h-4 w-4" /> Download CV
          </Link>
        </Button>
      </div>

      <Separator className="my-8" />

      {/* Education Section */}
      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-bold">Education</h2>
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
              <h3 className="font-bold">Chulalongkorn University</h3>
              <span className="text-sm text-muted-foreground">
                2022 - Present
              </span>
            </div>
            <p className="font-medium">
              Bachelor of Engineering - Computer Engineering Major
            </p>
            {/* <p className="text-muted-foreground">GPA: 3.48</p> */}
            <div className="mt-2 flex flex-wrap gap-2 text-sm text-muted-foreground">
              {[
                "Pattern Recognition (Deep Learning)",
                "Natural Language Processing Systems (NLP)",
                "Algorithm & Data Structures",
                "Database Systems",
                "Optimization",
                "Statistics",
                "Signal Processing",
              ].map((course) => (
                <Badge
                  key={course}
                  variant="outline"
                  className="rounded-full font-mono text-sm font-light text-muted-foreground"
                >
                  {course}
                </Badge>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
              <h3 className="font-bold">Triam Udom Suksa School</h3>
              <span className="text-sm text-muted-foreground">2019 - 2022</span>
            </div>
            <p className="font-medium">Science-Mathematics Major</p>
            <p className="text-muted-foreground">GPA: 3.85</p>
            <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
              <li>
                • Thailand Physics Olympiad (TPhO): Bronze Medal (19th TPhO),
                Participated (18th TPhO)
              </li>
              <li>
                • Triam Udom Photo Club (Staff and Member): Captured photos at
                various school events
              </li>
            </ul>
            <div className="mt-2 flex flex-wrap gap-2">
              <Badge
                variant="outline"
                className="rounded-full font-mono text-sm font-light text-muted-foreground"
              >
                Physics Olympiad
              </Badge>
              <Link
                href="./photography"
                className="rounded-full font-mono text-sm font-light text-muted-foreground"
              >
                <Badge
                  variant="secondary"
                  className="rounded-full font-mono text-sm font-light text-muted-foreground"
                >
                  Photography
                </Badge>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Separator className="my-8" />

      {/* Work Experience Section */}
      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-bold">Work Experience</h2>
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
              <h3 className="font-bold">
                Risk Management Analyst Intern — SCBX
              </h3>
              <span className="text-sm text-muted-foreground">
                (Upcoming summer internship) May 2025 - July 2025
              </span>
            </div>
            <p className="text-muted-foreground">
              Upcoming internship with one of Thailand's leading financial
              technology conglomerates. More details to be added upon
              completion.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
              <h3 className="font-bold">
                Data Scientist Intern — Kiatnakin Phatra Bank
              </h3>
              <span className="text-sm text-muted-foreground">
                June 2024 - July 2024
              </span>
            </div>
            <div className="space-y-2">
              <div>
                <h4 className="font-medium">Used Car Price Forecasting</h4>
                <ul className="ml-5 list-disc text-sm text-muted-foreground">
                  <li>
                    Developed ensemble machine learning models to forecast used
                    car prices, aiding strategic decisions for automotive loan
                    approvals.
                  </li>
                  <li>
                    Collected and cleaned real-world business data,
                    incorporating macro- and micro-economic factors.
                  </li>
                  <li>
                    Leveraged time-series analysis and Bayesian optimization
                    techniques for enhanced accuracy.
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium">
                  Loss On Sale Forecasting for NPLs
                </h4>
                <ul className="ml-5 list-disc text-sm text-muted-foreground">
                  <li>
                    Built predictive models to estimate losses on Non-Performing
                    Loans (NPLs), improving the bank's credit risk management.
                  </li>
                  <li>
                    Applied techniques like coarse classing, binning, and memory
                    optimization to improve performance.
                  </li>
                </ul>
                <div className="mt-2 flex flex-wrap gap-2">
                  <Badge
                    variant="outline"
                    className="rounded-full font-mono text-sm font-light text-muted-foreground"
                  >
                    Machine Learning
                  </Badge>
                  <Badge
                    variant="outline"
                    className="rounded-full font-mono text-sm font-light text-muted-foreground"
                  >
                    Time-Series
                  </Badge>
                  <Badge
                    variant="outline"
                    className="rounded-full font-mono text-sm font-light text-muted-foreground"
                  >
                    Credit Risk Analytics
                  </Badge>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="font-bold">Freelance</h3>
            <div className="space-y-2">
              <div>
                <h4 className="font-medium">Physics & Mathematics Tutor</h4>
                <p className="text-sm text-muted-foreground">
                  Tutored for Physics Olympiad camp and university admissions.
                </p>
              </div>
              <div>
                <h4 className="font-medium">Photographer</h4>
                <p className="text-sm text-muted-foreground">
                  Photographed various events and private sessions.
                  <Link
                    href="https://www.instagram.com/pupick.sk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-1 inline-flex items-center text-sm hover:text-foreground"
                  >
                    Instagram Portfolio{" "}
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator className="my-8" />

      {/* Extracurricular Activities & Achievements Section */}
      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-bold">
          Extracurricular Activities & Achievements
        </h2>
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
              <h3 className="font-bold">Aihack Thailand 2023 - AI Hackathon</h3>
              <span className="text-sm text-muted-foreground">
                December 2023
              </span>
            </div>
            <p className="font-medium">🏆 1st Prize & Best Performance Prize</p>
            <p className="text-sm text-muted-foreground">
              Created a machine learning model to forecast credit default risk.
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              <Badge
                variant="outline"
                className="rounded-full font-mono text-sm font-light text-muted-foreground"
              >
                Credit Risk Modeling
              </Badge>
              <Badge
                variant="outline"
                className="rounded-full font-mono text-sm font-light text-muted-foreground"
              >
                Hackathon Winner
              </Badge>
              <Badge
                variant="outline"
                className="rounded-full font-mono text-sm font-light text-muted-foreground"
              >
                Optimization
              </Badge>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
              <h3 className="font-bold">
                Stock Return Forecasting with Portfolio Optimization Project
              </h3>
              <span className="text-sm text-muted-foreground">
                April - May 2024
              </span>
            </div>
            <ul className="ml-5 list-disc text-sm text-muted-foreground">
              <li>
                Developed an alpha factor model to forecast stock returns using
                classical ML and LSTM networks.
              </li>
              <li>
                Designed and implemented quantitative trading strategies using
                historical data for backtesting.
              </li>
              <li>
                Integrated portfolio optimization techniques to maximize returns
                and minimize risks.
              </li>
            </ul>
            <div className="mt-2 flex flex-wrap gap-2">
              <Badge
                variant="outline"
                className="rounded-full font-mono text-sm font-light text-muted-foreground"
              >
                Quantitative Finance
              </Badge>
              <Badge
                variant="outline"
                className="rounded-full font-mono text-sm font-light text-muted-foreground"
              >
                Factor Modeling
              </Badge>
              <Badge
                variant="outline"
                className="rounded-full font-mono text-sm font-light text-muted-foreground"
              >
                Alpha Modeling
              </Badge>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
              <h3 className="font-bold">
                Machine Learning for Fundraising Campaigns — SAS x CBS Hackathon
                Season 4
              </h3>
              <span className="text-sm text-muted-foreground">
                October 2024
              </span>
            </div>
            <p className="font-medium">🎖️ 4th Place</p>
            <ul className="ml-5 list-disc text-sm text-muted-foreground">
              <li>
                Built a 2-stage ensemble model for targeted donor outreach.
              </li>
              <li>
                Achieved high-precision donor predictions and effective cost
                management.
              </li>
            </ul>
            <div className="mt-2 flex flex-wrap gap-2">
              <Badge
                variant="outline"
                className="rounded-full font-mono text-sm font-light text-muted-foreground"
              >
                Targeted Marketing Models
              </Badge>
              <Badge
                variant="outline"
                className="rounded-full font-mono text-sm font-light text-muted-foreground"
              >
                Ensemble Learning
              </Badge>
              <Badge
                variant="outline"
                className="rounded-full font-mono text-sm font-light text-muted-foreground"
              >
                Cost management
              </Badge>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
              <h3 className="font-bold">Investment Experience</h3>
              <span className="text-sm text-muted-foreground">April 2024</span>
            </div>
            <ul className="ml-5 list-disc text-sm text-muted-foreground">
              <li>
                Managed a self-directed investment portfolio with a TWRR of
                15.46%, MWRR of 34.34%, and ROI of 14.47%, achieving an AUM of
                B119,240.51 (as of February 28, 2025).
              </li>
              <li>
                Evaluated risk-adjusted performance, maintaining a Sharpe Ratio
                of 0.54 (ifi ~ 4%, CBOE-10Y-TNX).
              </li>
              <li>
                Monitored portfolio risk, with an MDD of 11.95%, VaR of 3.25%,
                and CVaR of 4.64%.
              </li>
            </ul>
            <div className="mt-2 flex flex-wrap gap-2">
              <Badge
                variant="outline"
                className="rounded-full font-mono text-sm font-light text-muted-foreground"
              >
                Portfolio Management
              </Badge>
              <Badge
                variant="outline"
                className="rounded-full font-mono text-sm font-light text-muted-foreground"
              >
                Risk Metrics
              </Badge>
              <Badge
                variant="outline"
                className="rounded-full font-mono text-sm font-light text-muted-foreground"
              >
                Performance Analytics
              </Badge>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
              <h3 className="font-bold">
                Investment Portfolio Analytics Dashboard Web App
                <Link
                  href="https://investment-portfoliogit-kan92h8iyt5covyupaxqo7.streamlit.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
                >
                  <ExternalLink className="ml-1 h-4 w-4" />
                </Link>
              </h3>
              <span className="text-sm text-muted-foreground">
                November 2024
              </span>
            </div>
            <ul className="ml-5 list-disc text-sm text-muted-foreground">
              <li>
                Developed an OCR/LLM-powered system to extract and organize
                investment data.
              </li>
              <li>
                Built and deployed a dashboard with key performance metrics
                (ROI, Sharpe Ratio, Volatility, CVaR).
              </li>
            </ul>
            <div className="mt-2 flex flex-wrap gap-2">
              <Badge
                variant="outline"
                className="rounded-full font-mono text-sm font-light text-muted-foreground"
              >
                Investment Tracker
              </Badge>
              <Badge
                variant="outline"
                className="rounded-full font-mono text-sm font-light text-muted-foreground"
              >
                Interactive Dashboard
              </Badge>
              <Badge
                variant="outline"
                className="rounded-full font-mono text-sm font-light text-muted-foreground"
              >
                LLM + OCR
              </Badge>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
              <h3 className="font-bold">CUVI Stock Pitching</h3>
              <span className="text-sm text-muted-foreground">
                March - April 2025
              </span>
            </div>
            <p className="font-medium">⭕ Finalist</p>
            <ul className="ml-5 list-disc text-sm text-muted-foreground">
              <li>
                Conducted equity research and valuation of a SET-listed company;
                presented investment thesis and risk assessment to a panel of
                industry professionals and fund managers.
              </li>
            </ul>
            <div className="mt-2 flex flex-wrap gap-2">
              <Badge
                variant="outline"
                className="rounded-full font-mono text-sm font-light text-muted-foreground"
              >
                Equity Research
              </Badge>
              <Badge
                variant="outline"
                className="rounded-full font-mono text-sm font-light text-muted-foreground"
              >
                Valuation Analysis
              </Badge>
              <Badge
                variant="outline"
                className="rounded-full font-mono text-sm font-light text-muted-foreground"
              >
                Investment Thesis
              </Badge>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
              <h3 className="font-bold">
                Participation in Business Case Competitions
              </h3>
              {/* <span className="text-sm text-muted-foreground">2023</span> */}
            </div>
            <ul className="ml-5 list-disc text-sm text-muted-foreground">
              <li>
                <div className="flex justify-between">
                  <span>
                    <span className="font-serif text-base not-italic text-foreground">
                      Intania Case Competition
                    </span>{" "}
                    — Built UAM strategy using AI/cloud for 200K trips/year
                    goal.
                  </span>
                  <span className="ml-4 whitespace-nowrap">March 2025</span>
                </div>
              </li>
              <li>
                <div className="flex justify-between">
                  <span>
                    <span className="font-serif text-base not-italic text-foreground">
                      Hult Prize at Chulalongkorn
                    </span>{" "}
                    — Developed a social enterprise idea aligned with UN SDGs.
                  </span>
                  <span className="ml-4 whitespace-nowrap">2023</span>
                </div>
              </li>
              <li>
                <div className="flex justify-between">
                  <span>
                    <span className="font-serif text-base not-italic text-foreground">
                      Chulalongkorn Case Discovery x Ascend Money
                    </span>{" "}
                    — Formulated a strategic plan for financial services
                    application.
                  </span>
                  <span className="ml-4 whitespace-nowrap">2023</span>
                </div>
              </li>
            </ul>
            <div className="mt-2 flex flex-wrap gap-2">
              <Badge
                variant="outline"
                className="rounded-full font-mono text-sm font-light text-muted-foreground"
              >
                Strategic Planning
              </Badge>
              <Badge
                variant="outline"
                className="rounded-full font-mono text-sm font-light text-muted-foreground"
              >
                Business Innovation
              </Badge>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
              <h3 className="font-bold">
                Final round in Space Youth Challenge by NARIT
              </h3>
              <span className="text-sm text-muted-foreground">
                December 2021
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Presented ideas on meteor prevention at the National Science and
              Technology Fair 2021.
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              <Badge
                variant="outline"
                className="rounded-full font-mono text-sm font-light text-muted-foreground"
              >
                Rocket Equation
              </Badge>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
              <h3 className="font-bold">
                The 2nd Kibo Robot Programming Challenge by NSTDA x JAXA
              </h3>
              <span className="text-sm text-muted-foreground">July 2021</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Programmed a robot to move in a specified direction while on the
              International Space Station (ISS).
            </p>
          </div>
        </div>
      </section>

      <Separator className="my-8" />

      {/* Skills & Certifications Section */}
      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-bold">Skills & Certifications</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Technical Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-sans font-medium">
                    Programming languages
                  </h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {[
                      "Python",
                      "SQL",
                      "C++",
                      "C",
                      "HTML",
                      "CSS",
                      "LaTeX",
                      "Markdown",
                    ].map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="rounded-full font-mono text-sm font-light text-muted-foreground"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-sans font-medium">Libraries & Tools</h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {[
                      "PyTorch",
                      "Scikit-learn",
                      "Pandas",
                      "NumPy",
                      "Matplotlib",
                      "Plotly",
                      "Streamlit",
                    ].map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="rounded-full font-mono text-sm font-light text-muted-foreground"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-sans font-medium">Applications</h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {["Excel", "Power BI", "Tableau", "Git", "GitHub"].map(
                      (skill) => (
                        <Badge
                          key={skill}
                          variant="outline"
                          className="rounded-full font-mono text-sm font-light text-muted-foreground"
                        >
                          {skill}
                        </Badge>
                      )
                    )}
                  </div>
                </div>

                <div>
                  <h3 className="font-sans font-medium">Languages</h3>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>• Thai (Native)</li>
                    <li>• English</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Certifications</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-6">
                <li className="space-y-1">
                  <div className="font-serif font-medium">
                    Financial Engineering and Risk Management Specialization
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Columbia University (Nov 2024)
                  </div>
                </li>
                <li className="space-y-1">
                  <div className="font-serif font-medium">
                    Machine Learning Specialization
                  </div>
                  <div className="text-sm text-muted-foreground">
                    DeepLearning.AI & Stanford University (Aug 2024)
                  </div>
                </li>
                <li className="space-y-1">
                  <div className="font-serif font-medium">
                    Google Data Analytics Professional Certificate
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Google (Jul 2023)
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Interests Section */}
      <section>
        <h2 className="mb-4 text-2xl font-bold">Interests</h2>
        <div className="flex flex-wrap gap-2">
          {[
            "Business",
            "Economics",
            "Politics",
            "Books",
            "History",
            "Philosophy",
          ].map((interest) => (
            <Badge
              key={interest}
              variant="secondary"
              className="rounded-full font-mono text-sm font-light text-muted-foreground"
            >
              {interest}
            </Badge>
          ))}
        </div>
      </section>
    </div>
  );
}

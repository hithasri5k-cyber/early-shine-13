import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BookOpen, Heart, Phone, Users, ExternalLink, Download } from "lucide-react";

export const ResourcesSection = () => {
  const resources = [
    {
      icon: BookOpen,
      title: "Educational Guides",
      description: "Comprehensive guides on dementia prevention, symptoms, and care",
      items: [
        "Understanding Dementia Types",
        "Brain-Healthy Lifestyle Guide",
        "Early Warning Signs Checklist",
        "Family Care Planning"
      ]
    },
    {
      icon: Heart,
      title: "Wellness Tips",
      description: "Evidence-based lifestyle recommendations for brain health",
      items: [
        "Mediterranean Diet Guide",
        "Cognitive Exercise Routines",
        "Sleep Optimization Tips",
        "Stress Management Techniques"
      ]
    },
    {
      icon: Users,
      title: "Support Groups",
      description: "Connect with others facing similar challenges",
      items: [
        "Online Support Communities",
        "Local Caregiver Groups",
        "Family Education Sessions",
        "Peer Counseling Programs"
      ]
    },
    {
      icon: Phone,
      title: "Emergency Resources",
      description: "Important contacts and crisis support information",
      items: [
        "24/7 Dementia Helpline",
        "Crisis Intervention Services",
        "Emergency Care Planning",
        "Legal Aid Resources"
      ]
    }
  ];

  const organizations = [
    { name: "Alzheimer's Association", url: "https://www.alz.org" },
    { name: "World Health Organization", url: "https://www.who.int" },
    { name: "National Institute on Aging", url: "https://www.nia.nih.gov" },
    { name: "Dementia Care Central", url: "https://www.dementiacarecentral.com" }
  ];

  return (
    <section id="resources" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Educational Resources</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Access comprehensive information, support, and tools to help you and your 
            loved ones navigate cognitive health challenges.
          </p>
        </div>

        {/* Resource Categories */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {resources.map((resource, index) => (
            <Card key={index} className="p-6 hover:shadow-soft transition-shadow duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
                  <resource.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                  <p className="text-muted-foreground">{resource.description}</p>
                </div>
              </div>
              
              <div className="space-y-2 mb-6">
                {resource.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              
              <Button variant="outline" className="w-full">
                <Download className="h-4 w-4 mr-2" />
                Access Resources
              </Button>
            </Card>
          ))}
        </div>

        {/* Brain Health Tips */}
        <Card className="p-8 mb-16 bg-gradient-trust border-0">
          <div className="text-center space-y-6">
            <h3 className="text-2xl font-bold">5 Daily Habits for Brain Health</h3>
            <div className="grid md:grid-cols-5 gap-6">
              <div className="text-center space-y-2">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">🧠</span>
                </div>
                <h4 className="font-semibold">Mental Exercise</h4>
                <p className="text-sm text-muted-foreground">Puzzles, reading, learning new skills</p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">🏃</span>
                </div>
                <h4 className="font-semibold">Physical Activity</h4>
                <p className="text-sm text-muted-foreground">30 minutes of exercise daily</p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">🥗</span>
                </div>
                <h4 className="font-semibold">Healthy Diet</h4>
                <p className="text-sm text-muted-foreground">Mediterranean-style nutrition</p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">😴</span>
                </div>
                <h4 className="font-semibold">Quality Sleep</h4>
                <p className="text-sm text-muted-foreground">7-9 hours per night</p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">👥</span>
                </div>
                <h4 className="font-semibold">Social Connection</h4>
                <p className="text-sm text-muted-foreground">Regular social interaction</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Trusted Organizations */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-8">Trusted Organizations</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {organizations.map((org, index) => (
              <Button
                key={index}
                variant="outline"
                className="justify-between h-auto p-4"
                asChild
              >
                <a href={org.url} target="_blank" rel="noopener noreferrer">
                  <span>{org.name}</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
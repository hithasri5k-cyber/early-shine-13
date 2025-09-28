import { Card } from "@/components/ui/card";
import { Brain, AlertTriangle, TrendingDown, Users } from "lucide-react";
import symptomsImage from "@/assets/dementia-symptoms.jpg";

export const AboutSection = () => {
  const symptoms = [
    {
      icon: Brain,
      title: "Memory Loss",
      description: "Difficulty remembering recent events, names, or conversations"
    },
    {
      icon: AlertTriangle,
      title: "Confusion",
      description: "Problems with time, place, or familiar people and situations"
    },
    {
      icon: TrendingDown,
      title: "Mood Changes",
      description: "Personality shifts, depression, anxiety, or social withdrawal"
    },
    {
      icon: Users,
      title: "Language Issues",
      description: "Trouble finding words, following conversations, or reading"
    }
  ];

  const statistics = [
    { number: "55M", label: "People worldwide live with dementia" },
    { number: "10M", label: "New cases diagnosed each year" },
    { number: "40%", label: "Cases could be prevented or delayed" }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Understanding Dementia</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Dementia affects millions worldwide, but early detection can significantly improve 
            quality of life and treatment outcomes. Knowledge is the first step to prevention.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Early Warning Signs</h3>
              <p className="text-muted-foreground mb-6">
                Recognizing the early symptoms of dementia can lead to better care planning, 
                treatment options, and improved quality of life for patients and families.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {symptoms.map((symptom, index) => (
                <Card key={index} className="p-4 hover:shadow-soft transition-shadow duration-300">
                  <div className="flex items-start gap-3">
                    <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg">
                      <symptom.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">{symptom.title}</h4>
                      <p className="text-sm text-muted-foreground">{symptom.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src={symptomsImage}
              alt="Early dementia symptoms infographic"
              className="w-full rounded-xl shadow-medical"
            />
          </div>
        </div>

        {/* Statistics */}
        <div className="text-center mb-16">
          <h3 className="text-2xl font-semibold mb-8">The Impact of Early Detection</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {statistics.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-4xl font-bold text-primary">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Early Detection Matters */}
        <Card className="p-8 bg-gradient-trust border-0">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-semibold">Why Early Detection Matters</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Early detection of dementia allows for better treatment planning, lifestyle 
              modifications that can slow progression, and more time for families to prepare 
              and make important decisions together.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center space-y-2">
                <div className="text-lg font-semibold text-primary">Better Treatment</div>
                <p className="text-sm text-muted-foreground">Access to medications and therapies that work best in early stages</p>
              </div>
              <div className="text-center space-y-2">
                <div className="text-lg font-semibold text-primary">Lifestyle Changes</div>
                <p className="text-sm text-muted-foreground">Implement brain-healthy habits that may slow cognitive decline</p>
              </div>
              <div className="text-center space-y-2">
                <div className="text-lg font-semibold text-primary">Family Planning</div>
                <p className="text-sm text-muted-foreground">Time to discuss preferences and plan for future care needs</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
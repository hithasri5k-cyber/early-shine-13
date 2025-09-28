import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Brain, Mic, ClipboardList, BarChart3, ArrowRight, Clock, Shield, Play, CheckCircle } from "lucide-react";
import screeningImage from "@/assets/ai-screening-interface.jpg";

const ScreeningModal = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isStarted, setIsStarted] = useState(false);

  const steps = [
    {
      title: "Getting Started",
      description: "Welcome to the AI cognitive screening assessment. This will take about 5 minutes.",
      content: (
        <div className="text-center space-y-4">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
            <Brain className="h-10 w-10 text-primary" />
          </div>
          <h3 className="text-xl font-semibold">Cognitive Health Assessment</h3>
          <p className="text-muted-foreground">
            This assessment includes memory tests, attention tasks, and speech analysis. 
            Your privacy is protected and results are confidential.
          </p>
          <div className="bg-muted/50 p-4 rounded-lg">
            <p className="text-sm">
              <strong>Note:</strong> This is a demonstration interface. In a real implementation, 
              this would connect to actual cognitive assessment tools and AI analysis.
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Memory Assessment",
      description: "Please remember these words. You'll be asked to recall them later.",
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            {["Apple", "Chair", "Ocean", "Guitar", "Sunlight", "Mountain"].map((word, index) => (
              <div key={index} className="bg-primary/10 p-4 rounded-lg text-center font-medium">
                {word}
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground text-center">
            Study these words for 30 seconds, then click Next
          </p>
        </div>
      )
    },
    {
      title: "Attention Test",
      description: "Click the blue circles as they appear, ignore the red ones.",
      content: (
        <div className="text-center space-y-4">
          <div className="bg-muted/50 p-8 rounded-lg">
            <p className="text-muted-foreground mb-4">Interactive attention test would appear here</p>
            <div className="flex justify-center gap-4">
              <div className="w-12 h-12 bg-primary rounded-full"></div>
              <div className="w-12 h-12 bg-destructive rounded-full"></div>
              <div className="w-12 h-12 bg-primary rounded-full"></div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Speech Analysis",
      description: "Please read the following sentence aloud when you're ready.",
      content: (
        <div className="space-y-4">
          <div className="bg-gradient-trust p-6 rounded-lg text-center">
            <p className="text-lg font-medium">
              "The quick brown fox jumps over the lazy dog while the rain falls gently on the roof."
            </p>
          </div>
          <div className="flex justify-center">
            <Button variant="secondary" className="flex items-center gap-2">
              <Mic className="h-4 w-4" />
              Start Recording
            </Button>
          </div>
          <p className="text-sm text-muted-foreground text-center">
            Click the button above and read the sentence clearly
          </p>
        </div>
      )
    },
    {
      title: "Assessment Complete",
      description: "Thank you for completing the cognitive assessment.",
      content: (
        <div className="text-center space-y-6">
          <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle className="h-10 w-10 text-accent" />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Assessment Results</h3>
            <div className="bg-gradient-trust p-6 rounded-lg">
              <div className="text-3xl font-bold text-primary mb-2">Low Risk</div>
              <p className="text-muted-foreground">
                Based on your responses, no immediate concerns were detected. 
                Continue maintaining healthy lifestyle habits.
              </p>
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <p className="font-medium">Recommendations:</p>
            <ul className="text-muted-foreground space-y-1">
              <li>• Continue regular physical exercise</li>
              <li>• Maintain social connections</li>
              <li>• Follow a brain-healthy diet</li>
              <li>• Consider annual cognitive check-ups</li>
            </ul>
          </div>
        </div>
      )
    }
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleStart = () => {
    setIsStarted(true);
    setCurrentStep(1);
  };

  return (
    <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
      <DialogHeader>
        <DialogTitle className="flex items-center gap-2">
          <Brain className="h-5 w-5 text-primary" />
          AI Cognitive Assessment
        </DialogTitle>
      </DialogHeader>
      
      <div className="space-y-6">
        {/* Progress Bar */}
        {isStarted && (
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Step {currentStep} of {steps.length - 1}</span>
              <span>{Math.round((currentStep / (steps.length - 1)) * 100)}% Complete</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div 
                className="bg-primary h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* Current Step Content */}
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">{steps[currentStep].title}</h3>
            <p className="text-muted-foreground">{steps[currentStep].description}</p>
          </div>
          
          {steps[currentStep].content}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between pt-4 border-t">
          {!isStarted ? (
            <div className="flex gap-2 ml-auto">
              <Button variant="hero" onClick={handleStart}>
                <Play className="h-4 w-4 mr-2" />
                Begin Assessment
              </Button>
            </div>
          ) : (
            <>
              <Button 
                variant="outline" 
                onClick={handlePrevious}
                disabled={currentStep <= 1}
              >
                Previous
              </Button>
              <Button 
                variant="hero" 
                onClick={handleNext}
                disabled={currentStep >= steps.length - 1}
              >
                {currentStep === steps.length - 1 ? "Download Report" : "Next"}
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </>
          )}
        </div>
      </div>
    </DialogContent>
  );
};

export const ScreeningSection = () => {
  const screeningSteps = [
    {
      icon: Brain,
      title: "Cognitive Tests",
      description: "Memory recall, attention tasks, and visuospatial assessments",
      duration: "2-3 min"
    },
    {
      icon: Mic,
      title: "Speech Analysis",
      description: "AI analyzes speech patterns, fluency, and language complexity",
      duration: "1-2 min"
    },
    {
      icon: ClipboardList,
      title: "Health Questionnaire",
      description: "Questions about daily functioning and behavioral changes",
      duration: "1-2 min"
    },
    {
      icon: BarChart3,
      title: "Risk Assessment",
      description: "AI generates comprehensive risk score and recommendations",
      duration: "Instant"
    }
  ];

  const features = [
    "Evidence-based cognitive assessments",
    "Advanced speech pattern analysis",
    "Secure data processing",
    "Instant risk evaluation",
    "Downloadable clinical reports",
    "Progress tracking over time"
  ];

  return (
    <section id="screening" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">AI-Powered Screening Tool</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive 5-minute assessment combines multiple cognitive tests with 
            advanced AI analysis to provide accurate early detection insights.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Screening Process */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">How It Works</h3>
              <p className="text-muted-foreground mb-8">
                Our AI screening tool uses clinically validated assessments combined with 
                cutting-edge machine learning to detect early signs of cognitive decline.
              </p>
            </div>

            <div className="space-y-4">
              {screeningSteps.map((step, index) => (
                <Card key={index} className="p-6 hover:shadow-soft transition-all duration-300 hover:border-primary/20">
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
                      <step.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold">{step.title}</h4>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          {step.duration}
                        </div>
                      </div>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Interface Preview */}
          <div className="relative">
            <img
              src={screeningImage}
              alt="AI screening interface preview"
              className="w-full rounded-xl shadow-medical"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-xl" />
            
            {/* Floating accuracy badge */}
            <div className="absolute top-4 right-4 bg-background rounded-lg p-3 shadow-soft border border-border">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-accent" />
                <div>
                  <div className="text-sm font-semibold">95% Accuracy</div>
                  <div className="text-xs text-muted-foreground">Clinically Validated</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center mb-8">Assessment Features</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-background rounded-lg border border-border">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <Card className="p-8 bg-gradient-hero border-0 text-center">
          <div className="space-y-6 text-white">
            <h3 className="text-2xl font-bold">Ready to Take Control of Your Cognitive Health?</h3>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Start your confidential screening today. Takes just 5 minutes and could provide 
              valuable insights into your cognitive health.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="secondary" size="lg" className="group">
                    Begin Screening Now
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </DialogTrigger>
                <ScreeningModal />
              </Dialog>
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-white/10 text-white border-white/20 hover:bg-white/20"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Watch Demo
              </Button>
            </div>
            <div className="text-sm opacity-75">
              ✓ Completely confidential ✓ No personal data stored ✓ Results in 5 minutes
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, Heart, Play } from "lucide-react";
import heroImage from "@/assets/hero-brain.jpg";

export const HeroSection = () => {
  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-trust">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                AI-Powered
                <span className="bg-gradient-hero bg-clip-text text-transparent"> Early Detection</span>
                <br />
                for Dementia
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Take control of your cognitive health with our advanced AI screening tool. 
                Early detection can make all the difference in planning and treatment.
              </p>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <span>Clinically Validated</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                <span>5-Minute Assessment</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-primary" />
                <span>Privacy Protected</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="lg" 
                className="group"
                onClick={() => document.getElementById('screening')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Start Your Screening
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <div className="flex flex-col sm:flex-row gap-2">
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Learn More
                </Button>
                <Button 
                  variant="medical" 
                  size="lg"
                  className="group"
                  onClick={() => {
                    // Create and show demo modal
                    const modal = document.createElement('div');
                    modal.className = 'fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4';
                    modal.innerHTML = `
                      <div class="bg-background rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                        <div class="p-6">
                          <div class="flex justify-between items-center mb-4">
                            <h3 class="text-2xl font-bold">Screening Demo</h3>
                            <button class="text-muted-foreground hover:text-foreground" onclick="this.closest('.fixed').remove()">✕</button>
                          </div>
                          <div class="aspect-video bg-gradient-calm rounded-lg flex items-center justify-center mb-4">
                            <div class="text-center text-white">
                              <div class="text-6xl mb-4">🧠</div>
                              <h4 class="text-xl font-semibold mb-2">AI Screening Demo</h4>
                              <p class="opacity-90">Interactive walkthrough of the 5-minute assessment</p>
                            </div>
                          </div>
                          <div class="grid md:grid-cols-3 gap-4 text-sm">
                            <div class="bg-card p-4 rounded-lg">
                              <h5 class="font-semibold mb-2">📝 Memory Test</h5>
                              <p class="text-muted-foreground">Remember and recall word lists</p>
                            </div>
                            <div class="bg-card p-4 rounded-lg">
                              <h5 class="font-semibold mb-2">🎯 Attention Tasks</h5>
                              <p class="text-muted-foreground">Focus and concentration exercises</p>
                            </div>
                            <div class="bg-card p-4 rounded-lg">
                              <h5 class="font-semibold mb-2">🗣️ Speech Analysis</h5>
                              <p class="text-muted-foreground">AI analyzes speech patterns</p>
                            </div>
                          </div>
                          <div class="mt-6 text-center">
                            <button class="bg-primary text-primary-foreground px-6 py-2 rounded-md hover:bg-primary/90" onclick="this.closest('.fixed').remove(); document.getElementById('screening')?.scrollIntoView({ behavior: 'smooth' })">
                              Start Real Screening
                            </button>
                          </div>
                        </div>
                      </div>
                    `;
                    document.body.appendChild(modal);
                  }}
                >
                  Watch Demo
                </Button>
              </div>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50M+</div>
                <div className="text-sm text-muted-foreground">People at Risk</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">Lives Improved</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-medical">
              <img
                src={heroImage}
                alt="AI brain analysis for dementia detection"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-background rounded-lg p-4 shadow-soft border border-border">
              <div className="text-sm font-medium text-primary">Early Detection</div>
              <div className="text-xs text-muted-foreground">Changes Everything</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
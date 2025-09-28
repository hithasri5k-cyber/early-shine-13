import { Brain, Shield, Heart, Globe, Phone } from "lucide-react";

export const Footer = () => {
  const footerLinks = {
    "Product": [
      "AI Screening Tool",
      "How It Works",
      "Accuracy & Validation",
      "Privacy & Security"
    ],
    "Resources": [
      "About Dementia",
      "Educational Guides",
      "Support Groups",
      "Healthcare Providers"
    ],
    "Support": [
      "24/7 Helpline",
      "Contact Us",
      "FAQs",
      "Technical Support"
    ],
    "Company": [
      "About Us",
      "Our Mission",
      "Clinical Partners",
      "Research"
    ]
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-semibold">CogniCare</span>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Empowering early dementia detection through AI-powered screening tools and comprehensive support resources.
            </p>
            <div className="flex gap-2">
              <div className="flex items-center gap-1 text-xs bg-primary/20 px-2 py-1 rounded">
                <Shield className="h-3 w-3" />
                <span>HIPAA Compliant</span>
              </div>
              <div className="flex items-center gap-1 text-xs bg-accent/20 px-2 py-1 rounded">
                <Heart className="h-3 w-3" />
                <span>FDA Informed</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="space-y-4">
              <h4 className="font-semibold text-lg">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-background/70 hover:text-background transition-colors duration-300 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Emergency Banner */}
        <div className="bg-health-orange/20 border border-health-orange/30 rounded-lg p-4 mb-8">
          <div className="flex items-center gap-3">
            <Phone className="h-5 w-5 text-health-orange" />
            <div>
              <div className="font-medium text-health-orange">Crisis Support Available 24/7</div>
              <div className="text-sm text-background/70">
                If you or someone you know is in crisis, call 988 (Suicide & Crisis Lifeline) or 
                1-800-272-3900 (Alzheimer's Association Helpline)
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-background/70">
              © 2024 CogniCare. All rights reserved. This tool is for educational purposes and is not a substitute for professional medical advice.
            </div>
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-background/70 hover:text-background transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-background/70 hover:text-background transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-background/70 hover:text-background transition-colors">
                Accessibility
              </a>
              <div className="flex items-center gap-1 text-background/70">
                <Globe className="h-4 w-4" />
                <span>English</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
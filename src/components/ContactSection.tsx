import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, Shield } from "lucide-react";

export const ContactSection = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "24/7 Support Helpline",
      info: "1-800-DEMENTIA (336-3684)",
      description: "Immediate support and crisis intervention"
    },
    {
      icon: Mail,
      title: "Email Support",
      info: "support@cognicare.com",
      description: "General inquiries and technical support"
    },
    {
      icon: MapPin,
      title: "Clinical Partners",
      info: "Nationwide Network",
      description: "Find certified healthcare providers near you"
    },
    {
      icon: Clock,
      title: "Response Time",
      info: "< 24 hours",
      description: "We respond to all inquiries promptly"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Get Support & Contact Us</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you need immediate support, have questions about our screening tool, 
            or want to learn more about cognitive health resources, we're here to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">How to Reach Us</h3>
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <Card key={index} className="p-6 hover:shadow-soft transition-shadow duration-300">
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
                        <contact.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{contact.title}</h4>
                        <div className="text-lg font-medium text-primary mb-1">{contact.info}</div>
                        <p className="text-sm text-muted-foreground">{contact.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Emergency Resources */}
            <Card className="p-6 bg-health-orange/10 border-health-orange/20">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 bg-health-orange/20 rounded-lg">
                  <Phone className="h-6 w-6 text-health-orange" />
                </div>
                <div>
                  <h4 className="font-semibold text-health-orange mb-2">Emergency Resources</h4>
                  <div className="space-y-2 text-sm">
                    <div>Crisis Text Line: Text HOME to 741741</div>
                    <div>National Suicide Prevention Lifeline: 988</div>
                    <div>Alzheimer's Association 24/7 Helpline: 1-800-272-3900</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Send Us a Message</h3>
                  <p className="text-muted-foreground">
                    Have questions? We'd love to hear from you. Send us a message and we'll respond within 24 hours.
                  </p>
                </div>

                <form className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Enter your first name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Enter your last name" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="What's this about?" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us how we can help you..." 
                      rows={5}
                    />
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                    <Shield className="h-5 w-5 text-primary mt-0.5" />
                    <div className="text-sm text-muted-foreground">
                      <strong>Privacy Notice:</strong> Your information is encrypted and never shared with third parties. 
                      We use it only to respond to your inquiry and provide relevant support resources.
                    </div>
                  </div>

                  <Button variant="hero" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
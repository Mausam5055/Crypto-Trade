
import { Button } from '@/components/ui/button';

export const ContactSection = () => {
  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 bg-secondary/5 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-20">
          <div className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-2 mb-4 sm:mb-6 backdrop-blur-xl">
            <span className="text-sm text-success font-semibold">CONTACT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8">
            <span className="bg-gradient-to-r from-foreground to-success bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Have questions? We're here to help you succeed in your crypto trading journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Form */}
          <div className="glass-card p-6 sm:p-8 rounded-2xl backdrop-blur-xl">
            <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
            <form className="space-y-4 sm:space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg bg-background/50 border border-secondary/30 focus:border-success/50 focus:outline-none transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg bg-background/50 border border-secondary/30 focus:border-success/50 focus:outline-none transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 rounded-lg bg-background/50 border border-secondary/30 focus:border-success/50 focus:outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-lg bg-background/50 border border-secondary/30 focus:border-success/50 focus:outline-none transition-colors"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea 
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-background/50 border border-secondary/30 focus:border-success/50 focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your question or feedback..."
                ></textarea>
              </div>
              <Button 
                type="submit"
                className="w-full bg-success hover:bg-success/90 text-background py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            <div className="glass-card p-6 sm:p-8 rounded-2xl backdrop-blur-xl">
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-success/20 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">mausamkumkar@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-muted-foreground">+91 863-854-5574</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-warning/20 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-warning" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-muted-foreground">123 Crypto Street, Digital City, 12345</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 sm:p-8 rounded-2xl backdrop-blur-xl">
              <h3 className="text-xl font-bold mb-4">Support Hours</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="text-muted-foreground">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="text-muted-foreground">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-muted-foreground">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

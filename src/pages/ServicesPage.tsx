"use client";
import { Code, Smartphone, Cloud, Cpu, Shield, Zap, Building2, ArrowRight, Palette, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const servicesData = {
  "custom-software": {
    icon: Code,
    title: "Custom Software Development",
    description: "Tailored applications built from the ground up to solve your unique business challenges.",
    longDescription: "We specialize in building custom software solutions that perfectly align with your business processes and goals. Our experienced team uses modern technologies and agile methodologies to deliver high-quality, scalable applications.",
    features: [
      "Full-stack web application development",
      "Enterprise software solutions",
      "Legacy system modernization",
      "API development and integration",
      "Database design and optimization",
      "Maintenance and support",
    ],
    benefits: [
      { title: "Tailored Solutions", description: "Software designed specifically for your business needs" },
      { title: "Scalable Architecture", description: "Built to grow with your business" },
      { title: "Ongoing Support", description: "Continuous maintenance and updates" },
    ],
  },
  "mobile-development": {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Native and cross-platform apps that deliver seamless experiences across all devices.",
    longDescription: "We create mobile applications that users love. Whether you need a native iOS app, an Android app, or a cross-platform solution, we deliver polished, performant mobile experiences.",
    features: [
      "iOS app development (Swift)",
      "Android app development (Kotlin)",
      "Cross-platform development (React Native, Flutter)",
      "App Store optimization",
      "Push notifications and analytics",
      "Offline-first architecture",
    ],
    benefits: [
      { title: "Cross-Platform", description: "Reach users on both iOS and Android" },
      { title: "Native Performance", description: "Smooth, responsive user experience" },
      { title: "App Store Ready", description: "Optimized for app store success" },
    ],
  },
  "erp-solutions": {
    icon: Building2,
    title: "ERP Operations Hub",
    description: "Comprehensive operations hub for mid-sized businesses covering accounting, HR, sales & CRM.",
    longDescription: "Our ERP solutions provide mid-sized businesses with a unified operations hub to manage all critical business functions. From financial management to human resources, sales pipelines to customer relationships—everything in one powerful, integrated platform built by our qualified personnel.",
    features: [
      "Financial management & accounting",
      "Human resources & payroll",
      "Sales pipeline & forecasting",
      "Customer relationship management (CRM)",
      "Inventory & supply chain management",
      "Business intelligence & reporting",
      "Multi-branch/location support",
      "Role-based access control",
    ],
    benefits: [
      { title: "Unified Operations", description: "All business functions in one integrated platform" },
      { title: "Real-time Insights", description: "Data-driven decisions with live dashboards" },
      { title: "Cost Reduction", description: "Eliminate redundant systems and manual processes" },
      { title: "Qualified Support", description: "Backed by CAC-registered professionals in Nigeria" },
    ],
  },
  "branding": {
    icon: Palette,
    title: "Branding & Identity",
    description: "Strategic brand identity design that captures your essence and resonates with your audience.",
    longDescription: "We create compelling brand identities that tell your story and connect with your target audience. From logo design to comprehensive brand guidelines, we help businesses establish a memorable and consistent brand presence across all touchpoints.",
    features: [
      "Logo design & visual identity",
      "Brand strategy & positioning",
      "Brand guidelines & style guides",
      "Marketing collateral design",
      "Social media branding",
      "Packaging design",
      "Brand voice & messaging",
      "Rebranding & brand refresh",
    ],
    benefits: [
      { title: "Memorable Identity", description: "Stand out with a distinctive brand presence" },
      { title: "Consistency", description: "Unified brand experience across all channels" },
      { title: "Customer Connection", description: "Build emotional bonds with your audience" },
      { title: "Market Positioning", description: "Clearly differentiate from competitors" },
    ],
  },
  "growth-hacking": {
    icon: TrendingUp,
    title: "Growth Hacking",
    description: "Data-driven strategies to accelerate user acquisition, engagement, and revenue growth.",
    longDescription: "We deploy rapid experimentation techniques across marketing, product development, and sales to identify the most effective ways to grow your business. Our growth hacking strategies combine creativity, analytical thinking, and data-driven decision making.",
    features: [
      "User acquisition strategy",
      "Conversion rate optimization (CRO)",
      "A/B testing & experimentation",
      "Viral & referral marketing",
      "Product-led growth tactics",
      "Analytics & attribution tracking",
      "Funnel optimization",
      "Retention & engagement strategies",
    ],
    benefits: [
      { title: "Rapid Growth", description: "Accelerate user and revenue growth" },
      { title: "Data-Driven", description: "Decisions backed by real metrics" },
      { title: "Cost Efficient", description: "Maximum impact with minimal spend" },
      { title: "Scalable Tactics", description: "Strategies that grow with your business" },
    ],
  },
  "cloud-solutions": {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable infrastructure and cloud-native applications for modern businesses.",
    longDescription: "We help businesses leverage the power of cloud computing. From migration to cloud-native development, we design and implement infrastructure that's secure, scalable, and cost-effective.",
    features: [
      "AWS, Azure, and GCP expertise",
      "Cloud migration and optimization",
      "Serverless architecture",
      "Containerization with Docker and Kubernetes",
      "CI/CD pipeline setup",
      "Infrastructure as Code",
    ],
    benefits: [
      { title: "Scalability", description: "Automatically scale with demand" },
      { title: "Cost Efficiency", description: "Pay only for what you use" },
      { title: "High Availability", description: "99.9% uptime guarantee" },
    ],
  },
  "ai-automation": {
    icon: Cpu,
    title: "AI & Automation",
    description: "Intelligent systems that automate processes and unlock new possibilities.",
    longDescription: "We implement AI and automation solutions that transform how businesses operate. From machine learning models to robotic process automation, we help you work smarter.",
    features: [
      "Machine learning model development",
      "Natural language processing",
      "Computer vision solutions",
      "Robotic process automation (RPA)",
      "Predictive analytics",
      "Chatbot and virtual assistant development",
    ],
    benefits: [
      { title: "Increased Efficiency", description: "Automate repetitive tasks" },
      { title: "Data-Driven Insights", description: "Make smarter decisions" },
      { title: "24/7 Operations", description: "AI never sleeps" },
    ],
  },
  "cybersecurity": {
    icon: Shield,
    title: "Cybersecurity",
    description: "Robust security solutions to protect your digital assets and data.",
    longDescription: "In today's digital landscape, security is paramount. We provide comprehensive cybersecurity solutions to protect your business from threats and ensure compliance with industry standards.",
    features: [
      "Security audits and assessments",
      "Penetration testing",
      "Security architecture design",
      "Compliance consulting (GDPR, HIPAA, SOC 2)",
      "Incident response planning",
      "Security awareness training",
    ],
    benefits: [
      { title: "Risk Mitigation", description: "Identify and address vulnerabilities" },
      { title: "Compliance", description: "Meet regulatory requirements" },
      { title: "Peace of Mind", description: "Focus on business, not threats" },
    ],
  },
  "digital-transformation": {
    icon: Zap,
    title: "Digital Transformation",
    description: "End-to-end modernization strategies to future-proof your business.",
    longDescription: "We guide organizations through their digital transformation journey. From strategy to implementation, we help you leverage technology to improve operations, enhance customer experiences, and drive growth.",
    features: [
      "Digital strategy consulting",
      "Business process reengineering",
      "Change management",
      "Technology roadmap development",
      "Integration architecture",
      "Performance optimization",
    ],
    benefits: [
      { title: "Competitive Advantage", description: "Stay ahead of the curve" },
      { title: "Improved Efficiency", description: "Streamlined operations" },
      { title: "Better CX", description: "Enhanced customer experiences" },
    ],
  },
};

const allServices = Object.entries(servicesData).map(([slug, data]) => ({
  slug,
  ...data,
}));

const ServicesPage = () => {
  const { slug } = useParams();
  const service = slug ? servicesData[slug as keyof typeof servicesData] : null;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  // All Services listing page
  if (!slug) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main className="pt-32 pb-20">
          <div className="container-max px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
                What We Do
              </span>
              <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
                Our
                <span className="text-gradient"> Services</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Comprehensive technology solutions designed to help your business thrive in the digital age.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {allServices.map((service) => (
                <motion.div key={service.slug} variants={itemVariants}>
                  <Link to={`/services/${service.slug}`}>
                    <div className="group p-8 rounded-2xl bg-gradient-card border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-glow h-full cursor-pointer">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all duration-300">
                        <service.icon className="w-7 h-7 text-primary" />
                      </div>
                      <h3 className="font-display font-semibold text-xl mb-3 text-foreground group-hover:text-gradient transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {service.description}
                      </p>
                      <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-4 transition-all duration-300">
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  // Individual service page
  if (!service) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-32 pb-20">
          <div className="container-max px-6 text-center">
            <h1 className="font-display font-bold text-4xl mb-4">Service Not Found</h1>
            <p className="text-muted-foreground mb-8">The service you're looking for doesn't exist.</p>
            <Link to="/services">
              <Button variant="hero">View All Services</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container-max px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Icon className="w-10 h-10 text-primary" />
            </div>
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
              {service.title}
            </h1>
            <p className="text-muted-foreground text-lg">
              {service.longDescription}
            </p>
          </motion.div>

          {/* Features & Benefits */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 rounded-2xl bg-gradient-card border border-border/50"
            >
              <h2 className="font-display font-bold text-2xl mb-6 text-foreground">
                What We Offer
              </h2>
              <ul className="space-y-4">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <h2 className="font-display font-bold text-2xl text-foreground">
                Why Choose Us
              </h2>
              {service.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-gradient-card border border-border/50 hover:border-primary/30 transition-all duration-300"
                >
                  <h3 className="font-display font-semibold text-lg mb-2 text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <Link to="/get-started">
              <Button variant="hero" size="xl" className="group">
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ServicesPage;

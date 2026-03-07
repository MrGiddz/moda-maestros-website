"use client";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const projectsData = {
  "hauteapp": {
    title: "HauteApp",
    category: "Fashion Tech",
    description: "A comprehensive app for tailors and fashion designers to manage their creative processes, clients, and orders",
    color: "from-red-500/20 to-pink-500/20",
    client: "Fashion Industry Startup",
    duration: "8 months",
    technologies: ["React Native", "Node.js", "PostgreSQL", "AWS", "Stripe"],
    challenge: "Tailors and fashion designers needed a unified platform to manage client measurements, design iterations, order tracking, and payments. The existing workflow involved scattered spreadsheets, WhatsApp messages, and manual invoicing, leading to lost orders and frustrated customers.",
    solution: "We built HauteApp, a mobile-first application that digitizes the entire fashion design workflow. The app includes a measurement database, design portfolio management, order tracking with client notifications, integrated invoicing, and a customer-facing portal for approvals and feedback.",
    results: [
      "85% reduction in order management time",
      "60% decrease in measurement errors",
      "3x increase in customer satisfaction scores",
      "Used by 500+ fashion designers",
    ],
  },
  "brium": {
    title: "Brium",
    category: "Transportation",
    description: "On-demand ride booking service with a powerful fleet management backend for operators",
    color: "from-red-600/20 to-orange-500/20",
    client: "Regional Transport Company",
    duration: "10 months",
    technologies: ["React", "React Native", "Go", "PostgreSQL", "Google Maps API", "Redis"],
    challenge: "The transport company needed a modern ride-hailing solution that could compete with major players while providing better fleet management capabilities for their operators. They required real-time tracking, dynamic pricing, and comprehensive analytics.",
    solution: "We developed Brium with three interconnected apps: a passenger app for booking rides, a driver app for accepting and completing trips, and an admin dashboard for fleet management. The system includes real-time GPS tracking, surge pricing algorithms, driver performance analytics, and automated dispatch.",
    results: [
      "20,000+ rides completed monthly",
      "Average driver wait time reduced by 40%",
      "Fleet utilization improved by 35%",
      "99.5% uptime achieved",
    ],
  },
  "serve": {
    title: "Serve",
    category: "Hospitality",
    description: "Complete restaurant management system for orders, inventory, staff, and customer engagement",
    color: "from-red-500/20 to-rose-500/20",
    client: "Restaurant Chain",
    duration: "6 months",
    technologies: ["Next.js", "Node.js", "MongoDB", "Socket.io", "Square API"],
    challenge: "A growing restaurant chain struggled with disconnected systems for POS, inventory, staff scheduling, and customer loyalty. This led to stockouts, scheduling conflicts, and missed opportunities for customer engagement.",
    solution: "Serve unifies all restaurant operations in one platform. It includes a modern POS system with table management, real-time inventory tracking with automatic reorder alerts, staff scheduling with shift swapping, a customer loyalty program, and detailed analytics for menu optimization.",
    results: [
      "30% reduction in food waste",
      "25% increase in repeat customers",
      "Serving 50+ restaurant locations",
      "Average order processing time reduced by 45%",
    ],
  },
  "tenantplug": {
    title: "TenantPlug",
    category: "PropTech",
    description: "Property management platform with end-to-end payment flows for rent and services",
    color: "from-red-700/20 to-red-500/20",
    client: "Property Management Firm",
    duration: "9 months",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe Connect", "Twilio", "AWS"],
    challenge: "Property managers handling multiple units faced challenges with rent collection, maintenance request tracking, lease management, and tenant communication. Manual processes led to delayed payments, unresolved maintenance issues, and tenant dissatisfaction.",
    solution: "TenantPlug provides a complete property management solution with automated rent collection via multiple payment methods, maintenance request ticketing with contractor dispatch, digital lease signing, tenant screening integration, and a tenant portal for self-service. Property owners get real-time financial dashboards and vacancy tracking.",
    results: [
      "95% on-time rent collection rate",
      "70% faster maintenance resolution",
      "Managing 2,000+ units",
      "Reduced administrative overhead by 50%",
    ],
  },
};

const allProjects = Object.entries(projectsData).map(([slug, data]) => ({
  slug,
  ...data,
}));

const PortfolioPage = () => {
  const { slug } = useParams();
  const project = slug ? projectsData[slug as keyof typeof projectsData] : null;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  // All Projects listing page
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
                Our Work
              </span>
              <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
                Featured
                <span className="text-gradient"> Projects</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Explore our portfolio of successful projects across various industries.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid md:grid-cols-2 gap-8"
            >
              {allProjects.map((project) => (
                <motion.div key={project.slug} variants={itemVariants}>
                  <Link to={`/portfolio/${project.slug}`}>
                    <div className="group relative rounded-2xl overflow-hidden bg-card border border-border/50 hover:border-primary/30 transition-all duration-500 cursor-pointer">
                      <div className={`h-64 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                        <div 
                          className="absolute inset-0 opacity-10"
                          style={{
                            backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--foreground)) 1px, transparent 0)`,
                            backgroundSize: "32px 32px",
                          }}
                        />
                        <motion.div 
                          className="absolute top-8 right-8 w-24 h-24 border border-primary/20 rounded-xl"
                          animate={{ rotate: [12, 6, 12] }}
                          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <motion.div 
                          className="absolute bottom-12 left-8 w-16 h-16 bg-primary/20 rounded-lg"
                          animate={{ rotate: [-6, 0, -6] }}
                          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        />
                      </div>

                      <div className="p-8">
                        <span className="text-primary text-sm font-medium mb-2 block">
                          {project.category}
                        </span>
                        <h3 className="font-display font-semibold text-2xl mb-3 text-foreground group-hover:text-gradient transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground mb-6">
                          {project.description}
                        </p>
                        <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-4 transition-all duration-300">
                          View Case Study
                          <ArrowUpRight className="w-5 h-5" />
                        </div>
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

  // Individual project page
  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-32 pb-20">
          <div className="container-max px-6 text-center">
            <h1 className="font-display font-bold text-4xl mb-4">Project Not Found</h1>
            <p className="text-muted-foreground mb-8">The project you're looking for doesn't exist.</p>
            <Link to="/portfolio">
              <Button variant="hero">View All Projects</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container-max px-6">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link to="/portfolio" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
              {project.category}
            </span>
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
              {project.title}
            </h1>
            <p className="text-muted-foreground text-xl max-w-3xl">
              {project.description}
            </p>
          </motion.div>

          {/* Project Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`h-80 md:h-[500px] rounded-2xl bg-gradient-to-br ${project.color} relative overflow-hidden mb-16`}
          >
            <div 
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--foreground)) 1px, transparent 0)`,
                backgroundSize: "32px 32px",
              }}
            />
            <motion.div 
              className="absolute top-12 right-12 w-32 h-32 border-2 border-primary/20 rounded-xl"
              animate={{ rotate: [12, 0, 12] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute bottom-16 left-12 w-24 h-24 bg-primary/20 rounded-lg"
              animate={{ rotate: [-6, 6, -6] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          {/* Project Details */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-6 rounded-xl bg-gradient-card border border-border/50"
            >
              <h3 className="font-display font-semibold text-lg mb-2 text-foreground">Client</h3>
              <p className="text-muted-foreground">{project.client}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="p-6 rounded-xl bg-gradient-card border border-border/50"
            >
              <h3 className="font-display font-semibold text-lg mb-2 text-foreground">Duration</h3>
              <p className="text-muted-foreground">{project.duration}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-6 rounded-xl bg-gradient-card border border-border/50"
            >
              <h3 className="font-display font-semibold text-lg mb-2 text-foreground">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="px-2 py-1 text-xs rounded bg-primary/10 text-primary">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Challenge & Solution */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h2 className="font-display font-bold text-2xl mb-4 text-foreground">The Challenge</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">{project.challenge}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
            >
              <h2 className="font-display font-bold text-2xl mb-4 text-foreground">Our Solution</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">{project.solution}</p>
            </motion.div>
          </div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="p-8 rounded-2xl bg-gradient-card border border-border/50 mb-16"
          >
            <h2 className="font-display font-bold text-2xl mb-6 text-foreground text-center">Results</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {project.results.map((result, index) => (
                <div key={index} className="text-center p-4">
                  <div className="w-3 h-3 rounded-full bg-primary mx-auto mb-3" />
                  <p className="text-foreground font-medium">{result}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-center"
          >
            <h3 className="font-display font-bold text-2xl mb-4">Ready to start your project?</h3>
            <Link to="/get-started">
              <Button variant="hero" size="xl" className="group">
                Get Started
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PortfolioPage;

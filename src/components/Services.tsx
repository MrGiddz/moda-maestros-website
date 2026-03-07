"use client";
import { Code, Smartphone, Cloud, Cpu, Shield, Zap, Building2, Palette, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Code,
    title: "Custom Software",
    description: "Tailored applications built from the ground up to solve your unique business challenges.",
    slug: "custom-software",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Native and cross-platform apps that deliver seamless experiences across all devices.",
    slug: "mobile-development",
  },
  {
    icon: Building2,
    title: "ERP Solutions",
    description: "Comprehensive operations hub for mid-sized businesses covering accounting, HR, sales & CRM.",
    slug: "erp-solutions",
  },
  {
    icon: Palette,
    title: "Branding",
    description: "Strategic brand identity design that captures your essence and resonates with your audience.",
    slug: "branding",
  },
  {
    icon: TrendingUp,
    title: "Growth Hacking",
    description: "Data-driven strategies to accelerate user acquisition, engagement, and revenue growth.",
    slug: "growth-hacking",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable infrastructure and cloud-native applications for modern businesses.",
    slug: "cloud-solutions",
  },
  {
    icon: Cpu,
    title: "AI & Automation",
    description: "Intelligent systems that automate processes and unlock new possibilities.",
    slug: "ai-automation",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Robust security solutions to protect your digital assets and data.",
    slug: "cybersecurity",
  },
  {
    icon: Zap,
    title: "Digital Transformation",
    description: "End-to-end modernization strategies to future-proof your business.",
    slug: "digital-transformation",
  },
];

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section id="services" className="section-padding relative">
      <div className="absolute inset-0 bg-glow opacity-30" />
      
      <div className="container-max relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
            What We Do
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
            Services That
            <span className="text-gradient"> Drive Growth</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We combine cutting-edge technology with strategic thinking to deliver 
            solutions that make a real impact on your bottom line.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <Link to={`/services/${service.slug}`}>
                <div className="group p-8 rounded-2xl bg-gradient-card border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-glow h-full cursor-pointer">
                  <motion.div 
                    className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <service.icon className="w-7 h-7 text-primary" />
                  </motion.div>
                  <h3 className="font-display font-semibold text-xl mb-3 text-foreground group-hover:text-gradient transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

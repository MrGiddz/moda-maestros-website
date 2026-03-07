"use client";
import { Target, Users, Award, TrendingUp, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "Every project starts with understanding your goals and ends with measurable success.",
  },
  {
    icon: Users,
    title: "Collaborative",
    description: "We work as an extension of your team, fostering transparent communication.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We don't ship until we're proud of it. Quality is non-negotiable.",
  },
  {
    icon: TrendingUp,
    title: "Growth-Focused",
    description: "Solutions designed to scale with your business as it evolves.",
  },
];

const team = [
  { name: "Alex Chen", role: "CEO & Founder", image: "AC" },
  { name: "Sarah Johnson", role: "CTO", image: "SJ" },
  { name: "Michael Park", role: "Head of Design", image: "MP" },
  { name: "Emily Davis", role: "VP of Engineering", image: "ED" },
];

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "25+", label: "Expert Engineers" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "8", label: "Years Experience" },
];

const AboutPage = () => {
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
            className="text-center mb-20"
          >
            <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
              About Us
            </span>
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
              Technology Partners
              <br />
              <span className="text-gradient">You Can Trust</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Moda Maestro was founded with a singular vision: to bridge the gap between 
              innovative technology and real-world business impact. We believe that great 
              software is not just about code—it's about understanding the problems worth solving.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="p-6 rounded-xl bg-gradient-card border border-border/50 text-center"
              >
                <div className="font-display font-bold text-4xl text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Our Story */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display font-bold text-3xl md:text-4xl mb-6 text-center">
                Our <span className="text-gradient">Story</span>
              </h2>
              <div className="prose prose-lg prose-invert mx-auto">
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Based in Abuja, Nigeria, Moda Maestro was founded with a singular vision: to bridge 
                  the gap between innovative technology and real-world business impact. What began as 
                  a passionate team of engineers has grown into a full-service digital transformation 
                  partner serving clients across various industries.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Today, our team of 25+ qualified engineers, designers, and strategists works with 
                  businesses of all sizes—from ambitious startups to established enterprises. 
                  We've delivered over 50 successful projects across 15+ industries, always 
                  with the same commitment to quality and innovation that defined our early days.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Our approach is simple: we listen first, plan carefully, and execute with 
                  precision. We don't believe in one-size-fits-all solutions. Every project 
                  we undertake is tailored to the unique needs and goals of our clients.
                </p>
                <div className="p-6 rounded-xl bg-primary/5 border border-primary/20 mt-8">
                  <p className="text-muted-foreground text-base leading-relaxed">
                    <span className="text-primary font-semibold">✓ Officially Registered</span> — Moda Maestro is registered 
                    under the Corporate Affairs Commission (CAC) of Nigeria, with qualified personnel ready to deliver 
                    excellence on every tech project.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-12 text-center">
              Our <span className="text-gradient">Values</span>
            </h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {values.map((value) => (
                <motion.div
                  key={value.title}
                  variants={itemVariants}
                  className="p-6 rounded-xl bg-gradient-card border border-border/50 hover:border-primary/30 transition-all duration-300 group text-center"
                >
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-2 text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Leadership Team */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-12 text-center">
              Leadership <span className="text-gradient">Team</span>
            </h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {team.map((member) => (
                <motion.div
                  key={member.name}
                  variants={itemVariants}
                  className="text-center group"
                >
                  <div className="w-32 h-32 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all duration-300">
                    <span className="text-3xl font-display font-bold text-primary-foreground">
                      {member.image}
                    </span>
                  </div>
                  <h3 className="font-display font-semibold text-lg text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">{member.role}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center p-12 rounded-2xl bg-gradient-card border border-border/50"
          >
            <h2 className="font-display font-bold text-3xl mb-4">Ready to work with us?</h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your ideas into powerful digital solutions.
            </p>
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

export default AboutPage;

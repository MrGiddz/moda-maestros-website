"use client";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "HauteApp",
    category: "Fashion Tech",
    description: "A comprehensive app for tailors and fashion designers to manage their creative processes, clients, and orders",
    image: "hauteapp",
    color: "from-red-500/20 to-pink-500/20",
    slug: "hauteapp",
  },
  {
    title: "Brium",
    category: "Transportation",
    description: "On-demand ride booking service with a powerful fleet management backend for operators",
    image: "brium",
    color: "from-red-600/20 to-orange-500/20",
    slug: "brium",
  },
  {
    title: "Serve",
    category: "Hospitality",
    description: "Complete restaurant management system for orders, inventory, staff, and customer engagement",
    image: "serve",
    color: "from-red-500/20 to-rose-500/20",
    slug: "serve",
  },
];

const Portfolio = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section id="portfolio" className="section-padding bg-secondary/30">
      <div className="container-max">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
            Our Work
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
            Featured
            <span className="text-gradient"> Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore some of our most impactful work across various industries.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <Link to={`/portfolio/${project.slug}`}>
                <div className="group relative rounded-2xl overflow-hidden bg-card border border-border/50 hover:border-primary/30 transition-all duration-500 cursor-pointer">
                  {/* Project Image/Visual */}
                  <div className={`h-64 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                    <div 
                      className="absolute inset-0 opacity-10"
                      style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--foreground)) 1px, transparent 0)`,
                        backgroundSize: "32px 32px",
                      }}
                    />
                    
                    {/* Floating Elements */}
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

                  {/* Project Info */}
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
                    <motion.div 
                      className="flex items-center gap-2 text-primary font-medium"
                      whileHover={{ x: 8 }}
                      transition={{ duration: 0.2 }}
                    >
                      View Case Study
                      <ArrowUpRight className="w-5 h-5" />
                    </motion.div>
                  </div>

                  {/* Hover Glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;

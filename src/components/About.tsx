"use client";
import { Target, Users, Award, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

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

const About = () => {
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
    hidden: { opacity: 0, y: 30 },
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
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-glow opacity-20" />
      
      <div className="container-max relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
              About Us
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-6 leading-tight">
              Technology Partners
              <br />
              <span className="text-gradient">You Can Trust</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Moda Maestro was founded with a singular vision: to bridge the gap between 
              innovative technology and real-world business impact. We believe that great 
              software is not just about code—it's about understanding the problems worth solving.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our team of engineers, designers, and strategists work together to craft 
              solutions that are not only technically excellent but also deeply aligned 
              with your business objectives.
            </p>

            {/* Team Stats */}
            <motion.div 
              className="grid grid-cols-2 gap-6 mt-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <motion.div 
                className="p-6 rounded-xl bg-gradient-card border border-border/50"
                whileHover={{ scale: 1.02, borderColor: "hsl(var(--primary) / 0.3)" }}
                transition={{ duration: 0.2 }}
              >
                <div className="font-display font-bold text-3xl text-gradient mb-1">25+</div>
                <div className="text-muted-foreground text-sm">Expert Engineers</div>
              </motion.div>
              <motion.div 
                className="p-6 rounded-xl bg-gradient-card border border-border/50"
                whileHover={{ scale: 1.02, borderColor: "hsl(var(--primary) / 0.3)" }}
                transition={{ duration: 0.2 }}
              >
                <div className="font-display font-bold text-3xl text-gradient mb-1">8 Years</div>
                <div className="text-muted-foreground text-sm">Industry Experience</div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Content - Values */}
          <motion.div 
            className="grid sm:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                variants={itemVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="p-6 rounded-xl bg-gradient-card border border-border/50 hover:border-primary/30 transition-all duration-300 group"
              >
                <motion.div 
                  className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <value.icon className="w-6 h-6 text-primary" />
                </motion.div>
                <h3 className="font-display font-semibold text-lg mb-2 text-foreground">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

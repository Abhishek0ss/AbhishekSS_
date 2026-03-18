"use client";
import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="w-full bg-[#121212] py-40 px-6 md:px-12 relative z-20">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center items-center mb-20"
        >
          <div className="mb-8 inline-block">
            <span className="font-mono text-xs tracking-[0.2em] text-blue-400 uppercase border border-blue-500/30 bg-blue-500/10 px-6 py-2 rounded-full">
              About Me
            </span>
          </div>

          <h3 className="text-5xl md:text-7xl font-black text-white mb-10 tracking-tighter leading-tight">
            Building Intelligent <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 to-zinc-400">
              Future Systems.
            </span>
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full p-10 md:p-16 rounded-[2.5rem] bg-white/[0.02] border border-white/10 relative overflow-hidden group hover:border-blue-500/20 transition-all text-left"
        >
          {/* Subtle Background Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[100px] pointer-events-none group-hover:bg-blue-500/10 transition-colors" />
          
          <div className="space-y-8 relative">
            <p className="text-zinc-400 text-xl md:text-2xl leading-relaxed font-light">
              AI-ML undergraduate with hands-on experience in machine learning, statistical analysis, and real-world problem solving. I've built projects like face recognition systems and genetic disorder prediction models, focusing on accuracy, optimization, and practical deployment.
            </p>
            
            <p className="text-zinc-400 text-xl md:text-2xl leading-relaxed font-light">
              I believe data is the most valuable asset in the modern world. My passion lies in uncovering the hidden patterns within that data to solve complex problems and create predictive systems that drive meaningful impact. 
            </p>

            <p className="text-zinc-400 text-xl md:text-2xl leading-relaxed font-light border-l-2 border-blue-500/30 pl-8 md:pl-12 mt-12 py-2 italic bg-blue-500/[0.02] rounded-r-2xl">
              My ambition is to lead the development of next-generation AI infrastructure, designing scalable, data-driven systems that push the boundaries of what's possible.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

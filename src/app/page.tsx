"use client";

import { motion } from "framer-motion";
import { Mail, ExternalLink, Award, Briefcase, GraduationCap } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Profile() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-blue-500/30 font-sans">
      {/* Navigation */}
      <nav className="p-6 flex justify-between items-center max-w-5xl mx-auto">
        <span className="font-bold text-xl tracking-tighter text-blue-400">PANGAL.DEV</span>
        <div className="space-x-8 text-sm font-medium text-slate-400 hidden sm:block flex items-center">
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a 
            href="mailto:pangaliotos@gmail.com" 
            className="inline-block bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-500 transition-colors ml-4"
          >
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-5xl mx-auto px-6 pt-16 pb-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-8 border border-blue-500/20">
            <GraduationCap size={16} />
            <span>Τελειόφοιτος Πληροφορικής & Τηλεπικοινωνιών, Παν. Πελοποννήσου</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight">
            Full Stack Developer. <br /> 
            <span className="text-slate-500">Δημιουργώντας λύσεις.</span>
          </h1>
          
          <p className="max-w-2xl text-lg text-slate-400 leading-relaxed mb-10">
            Γεια, είμαι ο Παναγιώτης. Εξειδικεύομαι στην ανάπτυξη σύγχρονων εφαρμογών με <strong>Laravel, Vue3Js, React-Native (Expo) και Java Spring Boot</strong>. 
            Συνδυάζω τεχνική κατάρτιση με καινοτόμες ιδέες για τη δημιουργία ψηφιακών οικοσυστημάτων που λύνουν πραγματικά προβλήματα.
          </p>

          <div className="flex gap-4">
            <a href="https://github.com/pangal02" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-900 border border-slate-800 rounded-xl hover:bg-slate-800 hover:border-blue-500/50 transition-all text-slate-300 hover:text-blue-400 cursor-pointer">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/panagiotis-galiotos-gal/" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-900 border border-slate-800 rounded-xl hover:bg-slate-800 hover:border-blue-500/50 transition-all text-slate-300 hover:text-blue-400 cursor-pointer">
              <FaLinkedin size={24} />
            </a>
            <a href="mailto:pangaliotos@gmail.com" className="p-3 bg-slate-900 border border-slate-800 rounded-xl hover:bg-slate-800 hover:border-blue-500/50 transition-all text-slate-300 hover:text-blue-400 cursor-pointer">
              <Mail size={24} />
            </a>
          </div>
        </motion.div>

        {/* Bento Grid Projects & Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20" id="projects">
          
          {/* Project 1: myAigoprov (Πτυχιακή) */}
          <div className="md:col-span-2 bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-blue-500/30 transition-colors group flex flex-col justify-between min-h-[16rem]">
            <div className="flex justify-between items-start mb-6">
              <span className="text-xs font-mono text-blue-400 uppercase tracking-wider bg-blue-500/10 px-3 py-1 rounded-full">Πτυχιακη Εργασια</span>
              <ExternalLink size={20} className="text-slate-500 group-hover:text-blue-400 transition-colors cursor-pointer" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-100">myAigoprov Mobile App</h3>
              <p className="text-slate-400 mt-3 leading-relaxed">
                Μια mobile εφαρμογή αφιερωμένη στους κτηνοτρόφους, σχεδιασμένη για τη βελτιστοποίηση της παραγωγής και τη διαχείριση δεδομένων στο οικοσύστημα παραγωγής γάλακτος. 
              </p>
              <div className="mt-4 flex gap-2 flex-wrap">
                <span className="text-xs font-medium text-slate-300 bg-slate-800 px-2 py-1 rounded-md">React-Native</span>
                <span className="text-xs font-medium text-slate-300 bg-slate-800 px-2 py-1 rounded-md">Java Spring Boot</span>
              </div>
            </div>
          </div>

          {/* Hackathon Award */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-900 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden min-h-[16rem]">
            <div className="absolute top-0 right-0 p-6 opacity-20 transform translate-x-4 -translate-y-4">
              <Award size={100} />
            </div>
            <div className="flex justify-between items-start mb-4 relative z-10">
              <span className="text-xs font-mono text-blue-200 uppercase tracking-wider">Διακριση</span>
            </div>
            <div className="relative z-10">
              <Award className="text-blue-300 mb-3" size={32} />
              <h3 className="text-xl font-bold text-white mb-2">PROVATO Hackathon</h3>
              <p className="text-blue-100 text-sm leading-relaxed">
                Διάκριση στο "Hack the Flock", αναπτύσσοντας λύσεις και αναλύοντας πραγματικά κτηνοτροφικά δεδομένα.
              </p>
            </div>
          </div>

          {/* Project 2: CRM */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-blue-500/30 transition-colors group flex flex-col justify-between">
             <div className="flex justify-between items-start mb-4">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">Ομαδικο Project</span>
              <Briefcase size={20} className="text-slate-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-100 mb-2">Fire Safety CRM</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Σύστημα διαχείρισης πελατών και καταγραφής εξοπλισμού για κατάστημα πυροσβεστήρων.
              </p>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="md:col-span-2 bg-slate-900 border border-slate-800 rounded-3xl p-8 flex flex-col justify-center items-center text-center">
            <h3 className="text-sm font-mono text-slate-500 uppercase tracking-wider mb-6">Τεχνολογιες & Εργαλεια</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {['Laravel', 'Vue3Js', 'React-Native', 'Java Spring Boot', 'Docker', 'Next.js', 'Tailwind CSS'].map((tech) => (
                <span key={tech} className="px-4 py-2 bg-slate-950 border border-slate-800 rounded-full text-sm text-slate-300 hover:border-blue-500/50 hover:text-blue-400 transition-colors cursor-default">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
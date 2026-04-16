"use client";

import { motion } from "framer-motion";
import { Mail, ExternalLink, Award, Briefcase, GraduationCap, Cloud } from "lucide-react";
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
            href="/CV_Panagiotis_Galiotos.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            CV
          </a>
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
          // Responsive flex layout: Φωτογραφία πάνω/κέντρο σε κινητά, φωτογραφία αριστερά/κείμενο δεξιά σε υπολογιστές
          className="flex flex-col md:flex-row items-center gap-10 md:gap-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Profile Picture (Circular Container) */}
          <div className="shrink-0 w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-slate-800 overflow-hidden shadow-2xl">
            <img
              src="/20230318_135333-01.jpeg" // Path από τον public φάκελο
              alt="Παναγιώτης Γαλιώτος - Profile Picture"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Text Content Block - Responsive text-align: center to left */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            {/* badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-6 border border-blue-500/20">
              <GraduationCap size={16} />
              <span>Τελειόφοιτος Πληροφορικής & Τηλεπικοινωνιών, Παν. Πελοποννήσου</span>
            </div>

            {/* h1 */}
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
              Full Stack Developer. <br />
              <span className="text-slate-500">Δημιουργώντας λύσεις.</span>
            </h1>

            {/* intro paragraph text */}
            <p className="max-w-2xl text-lg text-slate-400 leading-relaxed mb-8">
              Γεια, είμαι ο Παναγιώτης. Εξειδικεύομαι στην ανάπτυξη σύγχρονων εφαρμογών με <strong>Laravel, Vue3Js, React-Native (Expo) και Java Spring Boot</strong>.
              Συνδυάζω τεχνική κατάρτιση με καινοτόμες ιδέες για τη δημιουργία ψηφιακών οικοσυστημάτων που λύνουν πραγματικά προβλήματα.
            </p>

            {/* social links remain exact same */}
            <div className="flex gap-4">
              <a
                href="/CV_Panagiotis_Galiotos.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-500 transition-colors font-medium"
              >
                CV
              </a>
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
          </div>
        </motion.div>

        {/* Bento Grid Projects & Info (Remains exact same as existing fullText code) */}
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

          {/* Hackathon Award (Now Clickable) */}
          <a href="https://hackathlon.provato.uop.gr/" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-br from-blue-600 to-blue-900 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden min-h-[16rem] group hover:scale-[1.02] transition-transform cursor-pointer">
            <div className="absolute top-0 right-0 p-6 opacity-20 transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform">
              <Award size={100} />
            </div>
            <div className="flex justify-between items-start mb-4 relative z-10">
              <span className="text-xs font-mono text-blue-200 uppercase tracking-wider">Διακριση</span>
              <ExternalLink size={20} className="text-blue-300 group-hover:text-white transition-colors" />
            </div>
            <div className="relative z-10">
              <Award className="text-blue-300 mb-3" size={32} />
              <h3 className="text-xl font-bold text-white mb-2">PROVATO Hackathon</h3>
              <p className="text-blue-100 text-sm leading-relaxed">
                Διάκριση στο "Hack the Flock", αναπτύσσοντας λύσεις και αναλύοντας πραγματικά κτηνοτροφικά δεδομένα.
              </p>
            </div>
          </a>

          {/* Project 2: CRM */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-blue-500/30 transition-colors group flex flex-col justify-between min-h-[14rem]">
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

          {/* Code.Hub Certification (New Card) */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-blue-500/30 transition-colors group flex flex-col justify-between min-h-[14rem]">
            <div className="flex justify-between items-start mb-4">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">Πιστοποιηση</span>
              <Cloud size={20} className="text-slate-600 group-hover:text-blue-400 transition-colors" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-100 mb-2">Cloud Engineering</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Πιστοποιημένη εκπαίδευση από την Code.Hub πάνω σε σύγχρονες τεχνολογίες και αρχιτεκτονικές Cloud.
              </p>
              <span className="text-xs font-medium text-blue-400 bg-blue-500/10 px-3 py-1 rounded-md">Code.Hub</span>
            </div>
          </div>

          {/* Tech Stack maintain standardized names as per fullText codeProvided from prompt turn */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 flex flex-col justify-center items-center text-center min-h-[14rem]">
            <h3 className="text-sm font-mono text-slate-500 uppercase tracking-wider mb-6">Τεχνολογιες & Εργαλεια</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {['Laravel', 'Vue3Js', 'React-Native', 'Java Spring Boot', 'Docker', 'Next.js', 'Tailwind CSS'].map((tech) => (
                <span key={tech} className="px-3 py-1.5 bg-slate-950 border border-slate-800 rounded-full text-xs text-slate-300 hover:border-blue-500/50 hover:text-blue-400 transition-colors cursor-default">
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
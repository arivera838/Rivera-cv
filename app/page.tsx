import Hero from '@/components/Hero';
import Dashboard from '@/components/Dashboard';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Chatbot from '@/components/Chatbot';
import Navbar from '@/components/Navbar';
export default function Home() {
  return (
    <main className="relative selection:bg-primary/30 selection:text-foreground">
      <Navbar />

      <Hero />
      <Dashboard />
      <Skills />
      <Experience />
      <Projects />
      <Blog />
      <Contact />


      <footer className="mt-20 py-8 flex flex-col justify-between items-center border-t border-border px-6 gap-4 sm:flex-row">
        <span className="text-[9px] text-muted-foreground uppercase font-mono tracking-widest">Social Interface</span>
        <p className="text-[10px] font-mono text-zinc-700 uppercase tracking-widest">© {new Date().getFullYear()} / ARCHIVE_00.A1 / BUILD: 9a3f2b</p>
      </footer>
    </main>
  );
}

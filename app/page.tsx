import HeroSection from '@/components/HeroSection';
import MarqueeSection from '@/components/MarqueeSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ServicesSection from '@/components/ServicesSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function Home() {
  return (
    <main className="main-wrapper relative">
      <LanguageSwitcher />
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <SkillsSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}

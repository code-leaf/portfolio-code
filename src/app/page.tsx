import { Contact } from '@/components/contact/Contact';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/header/Header';
import { Introduction } from '@/components/intro/Introduction';
import { Portfolio } from '@/components/portfolio/Portfolio';
import { Skills } from '@/components/skills/Skills';

export default function Home() {
  return (
    <div>
      <Header />
      <Introduction />
      <Portfolio />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

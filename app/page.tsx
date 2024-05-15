import { Header } from '@/app/ui/main/header';
import { TradePartners } from '@/app/ui/main/trade-partners';
import { Partners } from '@/app/ui/main/partners';
import { Services } from '@/app/ui/main/services';
import { Contact } from '@/app/ui/main/contact';
import { Footer } from '@/app/ui/main/footer';

export default function Page() {
  return (
    <main>
      <Header />
      <TradePartners />
      <Partners />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}

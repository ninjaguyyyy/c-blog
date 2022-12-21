import { ReactNode } from 'react';

import Footer from 'components/organisms/Footer';
import Header from 'components/organisms/Header';

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="grow">{children}</main>
      <Footer />
    </div>
  );
}

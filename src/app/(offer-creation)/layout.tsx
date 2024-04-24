import {CreateOfferProvider} from '~/components/providers/CreateOfferProvider';
import '~/styles/globals.css';

interface OfferCreationLayoutProps {
  children: React.ReactNode;
}

export default async function OfferCreationLayout({
  children,
}: OfferCreationLayoutProps) {
  return <CreateOfferProvider>{children}</CreateOfferProvider>;
}

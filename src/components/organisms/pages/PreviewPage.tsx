import Link from 'next/link';

import CreateOfferSteps from '~/components/molecules/OfferComponents/CreateOfferSteps';
import OfferCreatePreview from '~/components/molecules/OfferComponents/OfferCreatePreview';
import {Button} from '~/components/ui/button';

const PreviewPage = () => {
  return (
    <div className="min-h-[100vh] flex flex-col items-center bg-slate-100 py-16">
      <div className="w-[70%] flex flex-col gap-8">
        <CreateOfferSteps activeStep={2} />
        <div className="flex justify-between">
          <div className="text-2xl font-medium">{'Preview'}</div>
          <Link href={'/offer-create/checkout'}>
            <Button>{'Confirm'}</Button>
          </Link>
        </div>
        <OfferCreatePreview />
      </div>
    </div>
  );
};

export default PreviewPage;

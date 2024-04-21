import MaxWidthWrapper from '~/components/atoms/MaxWidthWrapper';
import PricingCard from '~/components/molecules/PricingComponents/PricingCard';
import {pricingCards} from '~/config/pricing';

const PricingPage = () => {
  return (
    <div className="bg-slate-100 min-h-screen-minus-64">
      <MaxWidthWrapper className="flex flex-col items-center">
        <div className="max-w-[620px] my-16">
          <div className="font-medium text-3xl text-center">
            {
              'Find and hire the best sales talent with ease. Start boosting your sales team today!'
            }
          </div>
        </div>
        <div className="flex w-full justify-around">
          {pricingCards.map((item, inedx) => {
            return <PricingCard key={inedx} {...item} />;
          })}
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default PricingPage;

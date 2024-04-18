import Link from 'next/link';
import {Button} from '~/components/ui/button';

const PricingPage = () => {
    return (
        <div>
            <div>{'Pricing'}</div>
            <div>
                <div>{'49$'}</div>
                <div>{'text'}</div>
                <Link href={'/offer-create'}>
                    <Button>{'Post a job'}</Button>
                </Link>
            </div>
        </div>
    );
};

export default PricingPage;

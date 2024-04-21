import Link from 'next/link';

import MaxWidthWrapper from '~/components/atoms/MaxWidthWrapper';
import {Button} from '~/components/ui/button';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white z-50 shadow-sm">
      <MaxWidthWrapper className="flex justify-between  items-center py-3">
        <Link href={'/'} className="text-2xl font-bold">
          {'SALEJOBS'}
        </Link>
        <div className="flex gap-4">
          <Link href={'/pricing'}>
            <Button variant="outline" className="rounded-full px-6 py-2">
              {'Post a job'}
            </Button>
          </Link>
          <Button className="rounded-full px-6 py-2">{'Sign in'}</Button>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;

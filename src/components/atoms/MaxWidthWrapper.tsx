import {PropsWithChildren} from 'react';

import {cn} from '~/lib/utils';

const MaxWidthWrapper = ({
  children,
  className,
}: PropsWithChildren & PropsWithClassname) => {
  return (
    <div className={cn(className, 'max-w-[1432px] m-auto px-4')}>{children}</div>
  );
};
export default MaxWidthWrapper;

import {PropsWithChildren} from 'react';
import {cn} from '~/lib/utils';

const MaxWidthWrapper = ({
    children,
    className,
}: PropsWithChildren & PropsWithClassname) => {
    return <div className={cn(className, 'max-w-[1200px] m-auto')}>{children}</div>;
};
export default MaxWidthWrapper;

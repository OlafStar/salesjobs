import {PropsWithChildren} from 'react';

import {
  Tooltip as SCNTooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '~/components/ui/tooltip';

export function Tooltip({children, text}: PropsWithChildren & {text: string}) {
  return (
    <TooltipProvider>
      <SCNTooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent>
          <p>{text}</p>
        </TooltipContent>
      </SCNTooltip>
    </TooltipProvider>
  );
}

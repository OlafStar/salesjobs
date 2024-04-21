import {cn} from '~/lib/utils';

type CreateOfferStepsProps = {
  activeStep: number;
};

const genearateClassNames = (step: number, activeStep: number) => {
  if (step < activeStep) {
    return 'bg-black text-white rounded-full';
  } else if (step > activeStep) {
    return 'border-[1.5px] border-black rounded-full';
  } else {
    return 'bg-black text-white rounded-full';
  }
};

const CreateOfferSteps = ({activeStep}: CreateOfferStepsProps) => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-1 items-center gap-8 max-w-[700px]">
        <div className={cn(activeStep !== 1 && 'opacity-60', 'flex gap-2')}>
          <div
            className={cn(
              genearateClassNames(1, activeStep),
              'w-[24px] h-[24px] flex items-center justify-center',
            )}
          >
            <div className="font-medium">{'1'}</div>
          </div>
          <div className="font-medium">{'Create'}</div>
        </div>
        <div className="flex-1 h-[2px] bg-slate-400" />
        <div className={cn(activeStep !== 2 && 'opacity-60', 'flex gap-2')}>
          <div
            className={cn(
              genearateClassNames(2, activeStep),
              'w-[24px] h-[24px] flex items-center justify-center',
            )}
          >
            <div className="font-medium">{'2'}</div>
          </div>
          <div className="font-medium">{'Preview'}</div>
        </div>
        <div className="flex-1 h-[2px] bg-slate-400" />
        <div className={cn(activeStep !== 3 && 'opacity-60', 'flex gap-2')}>
          <div
            className={cn(
              genearateClassNames(3, activeStep),
              'w-[24px] h-[24px] flex items-center justify-center',
            )}
          >
            <div className="font-medium">{'3'}</div>
          </div>
          <div className="font-medium">{'Summary'}</div>
        </div>
      </div>
    </div>
  );
};

export default CreateOfferSteps;

import CreateJobPostingForm from '~/components/molecules/FormComponents/CreateOfferForm';
import CreateOfferSteps from '~/components/molecules/OfferComponents/CreateOfferSteps';

const CreateOfferPage = () => {
  return (
    <div className="min-h-[100vh] flex flex-col items-center bg-slate-100 py-16">
      <div className="w-[70%] flex flex-col gap-8">
        <CreateOfferSteps activeStep={1} />
        <div className="text-2xl font-medium">{'Create'}</div>
        <CreateJobPostingForm />
      </div>
    </div>
  );
};

export default CreateOfferPage;

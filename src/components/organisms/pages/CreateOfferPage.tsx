import CreateJobPostingForm from '~/components/molecules/FormComponents/CreateOfferForm';

const CreateOfferPage = () => {
    return (
        <div className="min-h-[100vh] flex flex-col items-center bg-slate-100 p-4">
            <div className="w-[70%]">
                <div>{'Create'}</div>

                <CreateJobPostingForm />
            </div>
        </div>
    );
};

export default CreateOfferPage;

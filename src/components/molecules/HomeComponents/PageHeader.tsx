import {Input} from '~/components/ui/input';

const PageHeader = () => {
    return (
        <div className="w-full bg-[#f1f1f1]">
            <div className="max-w-[596px] py-16 m-auto flex flex-col justify-center items-center gap-6">
                <div className="text-6xl font-bold">{'SALEJOBS'}</div>
                <div className="text-2xl text-center">
                    {
                        'Empowering Your Sales Career with Top Opportunities Across Leading Industries'
                    }
                </div>
                <div className="rounded-full bg-white border border-solid border-[#DEDEDE] w-full flex justify-between overflow-hidden items-center px-5">
                    <Input
                        placeholder="Search"
                        className="h-fit py-3 px-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0 border-none"
                    />
                    <div>{'Loop'}</div>
                </div>
            </div>
        </div>
    );
};

export default PageHeader;

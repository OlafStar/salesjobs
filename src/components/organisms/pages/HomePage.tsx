import MaxWidthWrapper from '~/components/atoms/MaxWidthWrapper';
import PageHeader from '~/components/molecules/HomeComponents/PageHeader';
import {Tabs, TabsContent, TabsList, TabsTrigger} from '~/components/ui/tabs';

const HomePage = () => {
    return (
        <div>
            <Tabs defaultValue="all">
                <PageHeader>
                    <MaxWidthWrapper>
                        <TabsList className="p-0 h-auto">
                            <TabsTrigger
                                value="salary"
                                className="px-5 rounded-none rounded-t-lg data-[state=active]:shadow-none text-base"
                            >
                                {'With salary'}
                            </TabsTrigger>
                            <TabsTrigger
                                value="all"
                                className="px-5 rounded-none rounded-t-lg data-[state=active]:shadow-none text-base"
                            >
                                {'All offers 192 offers'}
                            </TabsTrigger>
                            <TabsTrigger
                                value="latest"
                                className="px-5 rounded-none rounded-t-lg data-[state=active]:shadow-none text-base"
                            >
                                {'Latest'}
                            </TabsTrigger>
                        </TabsList>
                    </MaxWidthWrapper>
                </PageHeader>
                <MaxWidthWrapper>
                    <TabsContent value="salary">
                        Make changes to your account here.
                    </TabsContent>
                    <TabsContent value="all">Change your password here.</TabsContent>
                    <TabsContent value="latest">
                        Change your password here.
                    </TabsContent>
                </MaxWidthWrapper>
            </Tabs>
        </div>
    );
};

export default HomePage;

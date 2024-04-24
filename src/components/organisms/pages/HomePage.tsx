import AllOffersText from '~/components/atoms/AllOffersText';
import MaxWidthWrapper from '~/components/atoms/MaxWidthWrapper';
import LatestOffersList from '~/components/molecules/HomeComponents/LatestOffersList';
import OfferList from '~/components/molecules/HomeComponents/OfferList';
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
                <AllOffersText />
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
            {'Make changes to your account here.'}
          </TabsContent>
          <TabsContent value="all">
            <OfferList />
          </TabsContent>
          <TabsContent value="latest">
            <LatestOffersList />
          </TabsContent>
        </MaxWidthWrapper>
      </Tabs>
    </div>
  );
};

export default HomePage;

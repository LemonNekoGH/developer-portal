import React, { useState } from 'react';
import { endOfWeek } from 'date-fns';
import {
  Footer,
  FeaturedArticleSlider,
  SocialLinksSignup,
  Callout,
  TabMenu,
  NetworkDetailsCard,
  Pagination,
} from '../../Components';
import SporksCard from '../../Components/SporksCard';
import { ReactComponent as ChevronLeftIcon } from '../../../../images/arrows/chevron-left.svg';
import { Article } from '../../interfaces';
// @ts-ignore
import data from '../NetworkPage/sample';

export type NetworkDetailPageProps = {
  networkName: string;
};

const NetworkDetailPage = () => {
  const [selectedNetworkIndex, setSelectedNetworkIndex] = useState(0);
  const tabs = data.map((network: any) => network.name);
  const currentNetwork = data[selectedNetworkIndex];
  const article = {
    heading: 'Node operator callout',
    description:
      'Everything you need to start building on Flow verything you need to start building on Flow everything you need to start building on Flow',
    ctaText: 'Learn more',
    ctaLink: 'https://flow.com',
    imageUrl:
      'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
  } as Article;

  return (
    <div className="w-full p-6 bg-primary-gray-50 dark:bg-black">
      <div className="flex-col items-center">
        <div className="relative">
          <a
            href="/network"
            className="dark:text-primary-blue-dark absolute top-[110px] right-0 flex max-w-fit text-primary-blue md:top-0 md:left-0"
          >
            <ChevronLeftIcon /> Network
          </a>
          <TabMenu tabs={tabs} onTabChange={setSelectedNetworkIndex} />
          <div className="text-h3 md:text-h1 mt-[50px] mb-3 md:mt-[100px]  md:mb-[50px] md:text-center md:text-5xl">
            {currentNetwork.name}
          </div>
        </div>
        <NetworkDetailsCard
          status={
            currentNetwork.status === 'operational'
              ? 'Healthy'
              : 'Under Maintenance'
          }
          statusLink="https://google.com"
          version="33"
          lastSporkDate="April, 2022"
          nextSporkDate="April, 2022"
          rssFeed="/link"
        />

        <div className="text-h2 xs:font-md mb-8 mt-[50px] md:mt-[100px]">
          Upcoming Spork
        </div>
        <SporksCard
          heading={currentNetwork.name}
          timestamp={endOfWeek(new Date())}
          sporkMetadata={{
            accessNode: 'access-001.mainnet15.nodes.onflow.org:9000',
            date: new Date(),
            rootHeight: '19050753',
            rootParentId:
              'ac4dbf344ce96e39e15081f1dc3fbbf6dc80532e402de9a57af847d3b35df596',
            rootStateCommit:
              '641eb088e3ce1a01ff56df2d3a14372c65a7fef44c08799eb92cd7759d1d1d2a',
            gitCommit: 'f019c1dbd778ce9f92dea61349ca36003678a9ad',
            branchOrTag: 'v0.22.9-patch-1-epoch-view-check-hotfix',
            dockerTag: 'v0.22.9-patch-1-epoch-view-check-hotfix',
          }}
          upcoming
        />

        <div className="text-h2 xs:font-md mt-[50px] mb-8 md:mt-[100px]">
          Past Sporks
        </div>
        <SporksCard
          heading={currentNetwork.name}
          timestamp={endOfWeek(new Date())}
          sporkMetadata={{
            accessNode: 'access-001.mainnet15.nodes.onflow.org:9000',
            date: new Date(),
            rootHeight: '19050753',
            rootParentId:
              'ac4dbf344ce96e39e15081f1dc3fbbf6dc80532e402de9a57af847d3b35df596',
            rootStateCommit:
              '641eb088e3ce1a01ff56df2d3a14372c65a7fef44c08799eb92cd7759d1d1d2a',
            gitCommit: 'f019c1dbd778ce9f92dea61349ca36003678a9ad',
            branchOrTag: 'v0.22.9-patch-1-epoch-view-check-hotfix',
            dockerTag: 'v0.22.9-patch-1-epoch-view-check-hotfix',
          }}
        />
        {[1, 2, 3, 4].map((_) => (
          <div className="my-6">
            <SporksCard
              heading={currentNetwork.name}
              timestamp={endOfWeek(new Date())}
              sporkMetadata={{
                accessNode: 'access-001.mainnet15.nodes.onflow.org:9000',
                date: new Date(),
                rootHeight: '19050753',
                rootParentId:
                  'ac4dbf344ce96e39e15081f1dc3fbbf6dc80532e402de9a57af847d3b35df596',
                rootStateCommit:
                  '641eb088e3ce1a01ff56df2d3a14372c65a7fef44c08799eb92cd7759d1d1d2a',
                gitCommit: 'f019c1dbd778ce9f92dea61349ca36003678a9ad',
                branchOrTag: 'v0.22.9-patch-1-epoch-view-check-hotfix',
                dockerTag: 'v0.22.9-patch-1-epoch-view-check-hotfix',
              }}
              isDefaultExpanded={false}
            />
          </div>
        ))}
        <Pagination
          itemCount={40}
          pageSize={4}
          onPageChange={() => {}}
          currentPage={1}
        />

        <div className="self-center my-36">
          <FeaturedArticleSlider articles={[article]} />
        </div>

        <div className="self-center mb-36">
          <Callout
            heading="Spork FAQ"
            description="Lorem ipsum dolor sit amet proin gravida lorem ipsum"
            ctaText="View FAQ"
            ctaLink="https://flow.com"
          />
        </div>

        <div className="my-24">
          <SocialLinksSignup />
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default NetworkDetailPage;

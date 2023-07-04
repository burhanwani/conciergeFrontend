import React from 'react';
import { RecoilRoot } from 'recoil';
import SearchBox from '../components/Searchbox';
import { ItineraryPage } from '@/src/components/itineraryPage';

const Home: React.FC = () => {
  return (
      <div>
        <SearchBox />
        <ItineraryPage />
      </div>
  );
};

export default Home;

import { atom } from 'recoil';

export interface Activity {
  id: string;
  name: string;
  image: string;
  time: string;
  timeOfDay: string;
  allocatedTime: number;
  description: string;
  transportationTime: string;
  directionsLink: string;
}

export interface Day {
  id: string;
  activities: Activity[];
}

const day1 = { id: '1', 
    activities:[
    {
        id: '1',
        name: 'Visit the Eiffel Tower',
        image: '/images/EiffelTowerImage',
        /*image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg/800px-Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg',*/
        time: '10:00 AM',
        timeOfDay: "morning",
        allocatedTime: 2,
        description: 'Visit the iconic Eiffel Tower in Paris.',
        transportationTime: '30 minutes',
        directionsLink: 'https://maps.google.com/eiffel_tower_directions',
      },
      {
        id: '2',
        name: 'Visit the Eiffel Tower again ',
        image: '/images/EiffelTowerImage',
        /*image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg/800px-Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg',*/
        time: '12:00 PM',
        timeOfDay: "afternoon",
        allocatedTime: 2,
        description: 'Visit the tower again you fool.',
        transportationTime: '30 minutes',
        directionsLink: 'https://maps.google.com/eiffel_tower_directions',
    },
    ] 
}

export const itineraryState = atom<Day[]>({
  key: 'itineraryState',
  default: [day1],
});




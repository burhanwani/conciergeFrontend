// ItineraryPage.tsx
import { FC, useState } from 'react';
import { useRecoilState } from 'recoil';
import { Box, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import { itineraryState, Day } from '../atoms/itineraryStateAtom';
import { DaySchedule } from './daySchedule';

export const ItineraryPage: FC = () => {
  const [itinerary, setItinerary] = useRecoilState(itineraryState);
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabsChange = (index: number) => {
    setTabIndex(index);
  };
  const handleAddActivity = (dayId: string, time: string) => {
    // Add your logic for adding an activity here.
  };

  
  const handleDeleteActivity = (dayId: string, activityId: string) => {
      // Create a new itinerary array by mapping over the existing one.
      const newItinerary = itinerary.map(day => {
        // If this is the day from which we want to delete the activity...
        if (day.id === dayId) {
          // ...filter out the activity with the given ID.
          const newActivities = day.activities.filter(activity => activity.id !== activityId);
          // Return a new day object with the new activities array.
          return { ...day, activities: newActivities };
        } else {
          // If this is not the day from which we want to delete the activity, return the day as is.
          return day;
        }
      });
  
      // Update the itinerary state with the new itinerary array.
      setItinerary(newItinerary);
    };

  return (
    <Box>
      <Tabs index={tabIndex} onChange={handleTabsChange}>
        <TabList>
          <Tab>Overview</Tab>
          {itinerary.map((day, index) => (
            <Tab key={day.id}>{`Day ${index + 1}`}</Tab>
          ))}
        </TabList>

        <TabPanels>
          <TabPanel>
            <h2>Overview</h2>
            {/* Display overview here */}
          </TabPanel>
          {itinerary.map(day => (
            <TabPanel key={day.id}>
              <DaySchedule activities={day.activities} 
               onAddActivity={() => handleAddActivity(day.id, 'morning')} 
               onDeleteActivity={() => handleDeleteActivity(day.id, 'activityId')}
             />
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Box>
  );
};

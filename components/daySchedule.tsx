// DaySchedule.tsx
import { FC } from 'react';
import { Box, Button } from '@chakra-ui/react';
import { Activity as ActivityType } from '../atoms/itineraryStateAtom';
import { Activity } from './activity';

interface DayScheduleProps {
  activities: ActivityType[];
  onAddActivity: (time: string) => void;
  onDeleteActivity: (id: string) => void;
}

export const DaySchedule: FC<DayScheduleProps> = ({ activities, onAddActivity, onDeleteActivity }) => {
  const morningActivities = activities.filter(a => a.timeOfDay === 'morning');
  const afternoonActivities = activities.filter(a => a.timeOfDay === 'afternoon');
  const eveningActivities = activities.filter(a => a.timeOfDay === 'evening');

  return (
    <Box>
      <h2>Morning</h2>
      <Button onClick={() => onAddActivity('morning')}>Add Activity</Button>
      {morningActivities.map((activity) => (
        <Activity
          key={activity.id}
          activity={activity}
          onDelete={() => onDeleteActivity(activity.id)}
        />
      ))}
      <h2>Afternoon</h2>
      <Button onClick={() => onAddActivity('afternoon')}>Add Activity</Button>
      {afternoonActivities.map((activity) => (
        <Activity
          key={activity.id}
          activity={activity}
          onDelete={() => onDeleteActivity(activity.id)}
        />
      ))}
      <h2>Evening</h2>
      <Button onClick={() => onAddActivity('evening')}>Add Activity</Button>
      {eveningActivities.map((activity) => (
        <Activity
          key={activity.id}
          activity={activity}
          onDelete={() => onDeleteActivity(activity.id)}
        />
      ))}
    </Box>
  );
};

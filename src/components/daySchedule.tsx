// DaySchedule.tsx
import { FC, useEffect, useState } from 'react';
import { Box, Button } from '@chakra-ui/react';
import { Activity as ActivityType, itineraryState } from '../atoms/itineraryStateAtom';
import { Activity } from './activity';
import { useRecoilState } from 'recoil';
import { DragDropContext, Draggable, DropResult, Droppable } from 'react-beautiful-dnd';


interface DayScheduleProps {
  activities: ActivityType[];
  onAddActivity: (time: string) => void;
  onDeleteActivity: (id: string) => void;
}

export const DaySchedule: FC<DayScheduleProps> = ({
  activities,
  onAddActivity,
  onDeleteActivity,
}) => {
  
  const [itinerary, setItinerary] = useRecoilState(itineraryState);

  const handleDragEnd = (result: DropResult) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const { source, destination } = result;

    // find the day
    const day = itinerary.find((day) => day.id === source.droppableId);
    if (!day) {
      return;
    }

    const reorderedActivities = Array.from(day.activities);
    const [removed] = reorderedActivities.splice(source.index, 1);
    reorderedActivities.splice(destination.index, 0, removed);

    const newDay = {
      ...day,
      activities: reorderedActivities,
    };

    const newItinerary = itinerary.map((day) =>
      day.id === source.droppableId ? newDay : day
    );

    setItinerary(newItinerary);
  };

  const morningActivities = activities.filter((a) => a.timeOfDay === "morning");
  const lenMorningActivities = morningActivities.length
  const afternoonActivities = activities.filter(
    (a) => a.timeOfDay === "afternoon"
  );
  const lenAfternoonActivities = afternoonActivities.length
  const eveningActivities = activities.filter((a) => a.timeOfDay === "evening");



  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div style={{ overflow: 'auto', height: '100vh' }}>
      <Droppable droppableId="day">
        {(provided) => (
          <Box ref={provided.innerRef} {...provided.droppableProps}>
            <h2>Morning</h2>
            <Button onClick={() => onAddActivity("morning")}>
              Add Activity
            </Button>
            {morningActivities.map((activity, index) => (
              <Activity
                  key={activity.id}
                  activity={activity}
                  index={index}
                  onDelete={() => onDeleteActivity(activity.id)}
                />
            ))}
            <h2>Afternoon</h2>
            <Button onClick={() => onAddActivity("afternoon")}>
              Add Activity
            </Button>
            {afternoonActivities.map((activity, index) => (
             <Activity
                  key={activity.id}
                  activity={activity}
                  index={lenMorningActivities+ index}
                  onDelete={() => onDeleteActivity(activity.id)}
                />
            ))}
            <h2>Evening</h2>
            <Button onClick={() => onAddActivity("evening")}>
              Add Activity
            </Button>
            {eveningActivities.map((activity, index) => (
             <Activity
                 key={activity.id}
                 activity={activity}
                 index={lenMorningActivities + lenAfternoonActivities+ index}
                 onDelete={() => onDeleteActivity(activity.id)}
               />
            ))}
            {provided.placeholder}
          </Box>
        )}
      </Droppable>
      </div>
    </DragDropContext>
  );
};
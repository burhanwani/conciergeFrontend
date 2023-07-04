// Activity.tsx
import { FC } from 'react';
import { Box, Editable, EditableInput, EditablePreview, Button } from '@chakra-ui/react';
import { Activity as ActivityType } from '../atoms/itineraryStateAtom';
import Image from 'next/image';
import { IconButton, Text, Input, Link, VStack } from '@chakra-ui/react';
import { DeleteIcon, CalendarIcon, TimeIcon, ExternalLinkIcon } from '@chakra-ui/icons';
import EiffelTowerImage from '../../images/EiffelTower.png'


import { Draggable } from 'react-beautiful-dnd';
// other imports...

interface ActivityProps {
  activity: ActivityType;
  index: number;
  onDelete: (id: string) => void;
}

export const Activity: FC<ActivityProps> = ({ activity, index, onDelete }) => (
  <Draggable draggableId={activity.id} index={index}>
    {(provided) => (
      <Box
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        p={4}
      >
        <IconButton
          aria-label="Delete activity"
          icon={<DeleteIcon />}
          onClick={() => onDelete(activity.id)}
        />
        <Text fontSize="xl">{activity.name}</Text>
        <Box>
          <Image src={EiffelTowerImage} alt="" width={200} height={100} />
        </Box>
        <Box display="flex" alignItems="center">
          <CalendarIcon />
          <Text ml={2}>{activity.time}</Text>
        </Box>
        <Box display="flex" alignItems="center">
          <TimeIcon />
          <Text ml={2}>Allocated time (~1 hr avg):</Text>
          <Input
            type="number"
            defaultValue={activity.allocatedTime}
            w="50px"
            ml={2}
          />
          <Text>hrs</Text>
        </Box>
        <Text>{activity.description}</Text>
        <Box display="flex" alignItems="center">
          <ExternalLinkIcon />
          <Link href={activity.directionsLink} isExternal ml={2}>
            Directions
          </Link>
        </Box>
      </Box>
    )}
  </Draggable>
);



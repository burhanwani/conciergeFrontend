import React, { useEffect } from "react";
import { Box, Button, HStack } from "@chakra-ui/react";
import { activeTabState } from "@/src/atoms/layoutAtom";
import { useRecoilState } from "recoil";


const ScrollMenu: React.FC = () => {
  const [activeTab, setActiveTab] = useRecoilState(activeTabState);

  const tabs: string[] = ["Trip Overview", "Day 1", "Day 2", "Day 3", "Day 4"];

  useEffect(() => {
    // Set the default active tab
    setActiveTab("Trip Overview");
  }, []);

  return (
    <Box overflowX="scroll" whiteSpace="nowrap">
      <HStack spacing={4}>
        {tabs.map((tab: string, index: number) => (
          <Button
            key={index}
            onClick={() => setActiveTab(tab)}
            fontWeight={activeTab === tab ? "bold" : "normal"}
            textDecoration={activeTab === tab ? "underline" : "none"}
            textUnderlineOffset="0.25em"
            textDecorationColor="rgb(101, 183, 144)"
          >
            {tab}
          </Button>
        ))}
      </HStack>
    </Box>
  );
};

export default ScrollMenu;

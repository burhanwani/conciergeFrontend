import { atom} from "recoil";

// Define a Recoil atom to manage the active tab state
export const activeTabState = atom<string>({
  key: "activeTabState",
  default: "Trip Overview",
});
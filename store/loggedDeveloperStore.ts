import { DeveloperInfo } from "@/src/domain/entities/developer";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

type LoggedDeveloperStore = {
    developer: DeveloperInfo | null;
    setDeveloper: (developer: DeveloperInfo) => void;
};

// @ts-ignore
const loggedDeveloperStore = create<LoggedDeveloperStore>(devtools((set) => ({
    developer: null,
    setDeveloper: (developer: DeveloperInfo) => {
        set({ developer });
    },
}), {name: 'loggedDeveloperStore', enabled: true}));

export default loggedDeveloperStore;

import { DeveloperInfo } from "@/src/domain/entities/developer";
import { create } from "zustand";

export const profileStore = create((set) => ({
    developer: undefined,
    setDeveloper: (developer: DeveloperInfo) => {
        set(() => ({
            developer,
        }));
    },
}));

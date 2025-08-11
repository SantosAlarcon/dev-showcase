import { Models } from "appwrite";
import { create } from "zustand";

interface AuthState {
    user: Models.Preferences | null;
    session: Models.Session | null;
	setUser: (user: Models.Preferences) => void;
	setSession: (session: Models.Session) => void;
}

const authStore = create<AuthState>((set) => ({
    user: null,
    session: null,
	setUser: (user: Models.Preferences) => set({ user }),
	setSession: (session: Models.Session) => set({ session }),
}));

export default authStore;

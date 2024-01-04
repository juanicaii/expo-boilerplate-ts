import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { persist, devtools, createJSONStorage } from "zustand/middleware";

interface GlobalState {
	count: number;
	increase: (by: number) => void;
}

const useGlobalStore = create<GlobalState>()(
	devtools(
		persist(
			(set) => ({
				count: 0,
				increase: (by) => set((state) => ({ count: state.count + by })),
			}),
			{
				name: "global-storage",
				storage: createJSONStorage(() => AsyncStorage),
			},
		),
	),
);

export default useGlobalStore;

import { create } from "zustand";

type CursorVariant = "default" | "view" | "close" | "drag";

type CursorState = {
  variant: CursorVariant;
  label: string;
  set: (variant: CursorVariant, label?: string) => void;
  reset: () => void;
};

export const useCursorStore = create<CursorState>((set) => ({
  variant: "default",
  label: "",
  set: (variant, label = "") => set({ variant, label }),
  reset: () => set({ variant: "default", label: "" }),
}));

export type ViewModeTypes = "grid" | "list";

export type ColorMode = "light" | "dark" | "system";

export type Period = {
    years: number;
    months: number;
    days: number;
};

export type Province = {
    name: string;
    short: string;
    alias?: string[];
};

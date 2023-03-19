export interface Window {
    pid: number;
    windowName: string;
    process: string;
}

declare module 'processAddon' {
    export function focusWindow(pid: number): void;
    export function getWindows(): Window[];
}

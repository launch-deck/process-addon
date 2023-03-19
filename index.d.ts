declare module '@launch-deck/process-addon' {
    export function focusWindow(pid: number): void;
    export function getWindows(): Window[];
    export interface Window {
        pid: number;
        windowName: string;
        process: string;
    }
}

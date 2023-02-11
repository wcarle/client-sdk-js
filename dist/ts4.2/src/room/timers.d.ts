/// <reference types="node" />
/**
 * Timers that can be overridden with platform specific implementations
 * that ensure that they are fired. These should be used when it is critical
 * that the timer fires on time.
 */
export default class CriticalTimers {
    static setTimeout: (callback: (args: void) => void, ms?: number | undefined) => NodeJS.Timeout;
    static setInterval: (callback: (args: void) => void, ms?: number | undefined) => NodeJS.Timer;
    static clearTimeout: (timeoutId: NodeJS.Timeout) => void;
    static clearInterval: (intervalId: NodeJS.Timeout) => void;
}
//# sourceMappingURL=timers.d.ts.map

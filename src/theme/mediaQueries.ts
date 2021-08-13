import {Breakpoints, tokens} from './tokens';
/**
 * Media query function which will return a min-width media query with the breakpoint provided
 */
export const mq = (level: Breakpoints) =>
  `@media (min-width: ${tokens.breakpoints[level]})`;

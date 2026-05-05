import { setupWorker } from 'msw/browser';
import { handlers } from './handlers';

// Set up requests interception using the given handlers.
export const worker = setupWorker(...handlers);
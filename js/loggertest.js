import { logger } from "./js/debug.js";

if (logger) {
  logger.info('Imported!');
} else {
  console.error('Logger failed to import.');
}

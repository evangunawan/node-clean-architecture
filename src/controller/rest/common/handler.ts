import { Router } from 'express';

/**
 * CommonHandler
 * We are creating an abstract class that will be extended by all our handlers.
 * With this, we'll have cleaner implementation on our handlers.
 * You can add specific/required functions in the abstract class.
 */
export abstract class CommonHandler {
  abstract routes(router: Router): Router;
}

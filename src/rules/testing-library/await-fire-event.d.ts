import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface AwaitFireEventRule {
  /**
   * Enforce promises from `fireEvent` methods to be handled.
   *
   * @see [await-fire-event](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/await-fire-event.md)
   */
  'testing-library/await-fire-event': Rule<[RuleLevel]>;
}

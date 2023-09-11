import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PreferMockPromiseShorthandRule {
  /**
   * Prefer mock resolved/rejected shorthands for promises.
   *
   * @see [prefer-mock-promise-shorthand](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-mock-promise-shorthand.md)
   */
  'vitest/prefer-mock-promise-shorthand': Rule<[RuleLevel]>;
}

import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PreferMockPromiseShorthandRule {
  /**
   * Prefer mock resolved/rejected shorthands for promises.
   *
   * @see [preferMockPromiseShorthand](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/preferMockPromiseShorthand.md)
   */
  'vitest/preferMockPromiseShorthand': Rule<[RuleLevel]>;
}

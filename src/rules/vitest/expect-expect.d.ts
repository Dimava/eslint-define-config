import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface ExpectExpectRule {
  /**
   * Enforce having expectation in test body.
   *
   * @see [expect-expect](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/expect-expect.md)
   */
  'vitest/expect-expect': Rule<[RuleLevel]>;
}

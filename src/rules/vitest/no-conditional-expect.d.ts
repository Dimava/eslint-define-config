import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoConditionalExpectRule {
  /**
   * Disallow conditional expects.
   *
   * @see [no-conditional-expect](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-conditional-expect.md)
   */
  'vitest/no-conditional-expect': Rule<[RuleLevel]>;
}

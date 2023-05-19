import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoTestPrefixesRule {
  /**
   * Disallow using `test` as a prefix.
   *
   * @see [no-test-prefixes](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-test-prefixes.md)
   */
  'vitest/no-test-prefixes': Rule<[RuleLevel]>;
}

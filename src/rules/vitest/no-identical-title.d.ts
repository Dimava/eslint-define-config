import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoIdenticalTitleRule {
  /**
   * Disallow identical titles.
   *
   * @see [no-identical-title](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-identical-title.md)
   */
  'vitest/no-identical-title': Rule<[RuleLevel]>;
}

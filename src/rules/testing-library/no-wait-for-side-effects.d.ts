import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoWaitForSideEffectsRule {
  /**
   * Disallow the use of side effects in `waitFor`.
   *
   * @see [no-wait-for-side-effects](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-wait-for-side-effects.md)
   */
  'testing-library/no-wait-for-side-effects': Rule<[RuleLevel]>;
}

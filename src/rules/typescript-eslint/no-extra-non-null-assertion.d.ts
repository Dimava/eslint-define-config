import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoExtraNonNullAssertionRule = {
  /**
   * Disallow extra non-null assertions.
   *
   * @see [no-extra-non-null-assertion](https://typescript-eslint.io/rules/no-extra-non-null-assertion)
   */
  '@typescript-eslint/no-extra-non-null-assertion': Rule<[RuleLevel]>;
};

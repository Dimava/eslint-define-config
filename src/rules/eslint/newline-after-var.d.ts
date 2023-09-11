import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NewlineAfterVarRule {
  /**
   * Require or disallow an empty line after variable declarations.
   *
   * @deprecated
   *
   * @see [newline-after-var](https://eslint.org/docs/latest/rules/newline-after-var)
   */
  'newline-after-var': Rule<[RuleLevel, 'never' | 'always']>;
}

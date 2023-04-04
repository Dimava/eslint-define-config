import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NewlineAfterVarRule = {
  /**
   * Require or disallow an empty line after variable declarations.
   *
   * @deprecated
   *
   * @see [newline-after-var](https://eslint.org/docs/rules/newline-after-var)
   */
  'newline-after-var': Rule<[RuleLevel, 'never' | 'always']>;
};

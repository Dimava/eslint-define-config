import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoSpacedFuncRule {
  /**
   * Disallow spacing between function identifiers and their applications (deprecated).
   *
   * @deprecated
   *
   * @see [no-spaced-func](https://eslint.org/docs/rules/no-spaced-func)
   */
  'no-spaced-func': Rule<[RuleLevel]>;
}

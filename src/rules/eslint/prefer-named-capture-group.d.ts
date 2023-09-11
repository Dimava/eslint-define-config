import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PreferNamedCaptureGroupRule {
  /**
   * Enforce using named capture group in regular expression.
   *
   * @see [prefer-named-capture-group](https://eslint.org/docs/latest/rules/prefer-named-capture-group)
   */
  'prefer-named-capture-group': Rule<[RuleLevel]>;
}

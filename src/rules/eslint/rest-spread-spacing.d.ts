import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type RestSpreadSpacingRule = {
  /**
   * Enforce spacing between rest and spread operators and their expressions.
   *
   * @see [rest-spread-spacing](https://eslint.org/docs/rules/rest-spread-spacing)
   */
  'rest-spread-spacing': Rule<[RuleLevel, 'always' | 'never']>;
};

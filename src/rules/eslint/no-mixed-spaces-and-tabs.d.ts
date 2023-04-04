import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoMixedSpacesAndTabsRule = {
  /**
   * Disallow mixed spaces and tabs for indentation.
   *
   * @see [no-mixed-spaces-and-tabs](https://eslint.org/docs/rules/no-mixed-spaces-and-tabs)
   */
  'no-mixed-spaces-and-tabs': Rule<[RuleLevel, 'smart-tabs' | true | false]>;
};

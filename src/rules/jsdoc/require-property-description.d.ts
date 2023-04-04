import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type RequirePropertyDescriptionRule = {
  /**
   * Requires that each `@property` tag has a `description` value.
   *
   * @see [require-property-description](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-property-description)
   */
  'jsdoc/require-property-description': Rule<[RuleLevel]>;
};

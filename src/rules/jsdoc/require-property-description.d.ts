import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface RequirePropertyDescriptionRule {
  /**
   * Requires that each `@property` tag has a `description` value.
   *
   * @see [require-property-description](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-property-description.md#repos-sticky-header)
   */
  'jsdoc/require-property-description': Rule<[RuleLevel]>;
}

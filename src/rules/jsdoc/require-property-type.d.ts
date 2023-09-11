import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface RequirePropertyTypeRule {
  /**
   * Requires that each `@property` tag has a `type` value.
   *
   * @see [require-property-type](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-property-type.md#repos-sticky-header)
   */
  'jsdoc/require-property-type': Rule<[RuleLevel]>;
}

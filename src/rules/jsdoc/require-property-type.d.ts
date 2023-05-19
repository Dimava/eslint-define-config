import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface RequirePropertyTypeRule {
  /**
   * Requires that each `@property` tag has a `type` value.
   *
   * @see [require-property-type](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-property-type)
   */
  'jsdoc/require-property-type': Rule<[RuleLevel]>;
}

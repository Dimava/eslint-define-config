import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface RequirePropertyNameRule {
  /**
   * Requires that all function `@property` tags have names.
   *
   * @see [require-property-name](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-property-name)
   */
  'jsdoc/require-property-name': Rule<[RuleLevel]>;
}

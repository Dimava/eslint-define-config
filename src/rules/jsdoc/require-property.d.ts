import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface RequirePropertyRule {
  /**
   * Requires that all `@typedef` and `@namespace` tags have `@property` when their type is a plain `object`, `Object`, or `PlainObject`.
   *
   * @see [require-property](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-property.md#repos-sticky-header)
   */
  'jsdoc/require-property': Rule<[RuleLevel]>;
}

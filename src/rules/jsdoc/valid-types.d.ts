import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface ValidTypesRule {
  /**
   * Requires all types to be valid JSDoc or Closure compiler types without syntax errors.
   *
   * @see [valid-types](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/valid-types.md#repos-sticky-header)
   */
  'jsdoc/valid-types': Rule<
    [
      RuleLevel,
      {
        allowEmptyNamepaths?: boolean;
      },
    ]
  >;
}

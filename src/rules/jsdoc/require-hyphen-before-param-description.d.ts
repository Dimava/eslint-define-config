import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface RequireHyphenBeforeParamDescriptionRule {
  /**
   * Requires a hyphen before the `@param` description.
   *
   * @see [require-hyphen-before-param-description](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-hyphen-before-param-description.md#repos-sticky-header)
   */
  'jsdoc/require-hyphen-before-param-description': Rule<
    [
      RuleLevel,
      'always' | 'never',
      {
        tags?:
          | {
              /**
               */
              [k: string]: 'always' | 'never';
            }
          | 'any';
      },
    ]
  >;
}

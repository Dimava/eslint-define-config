import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface CheckTypesRule {
  /**
   * Reports invalid types.
   *
   * @see [check-types](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-types.md#repos-sticky-header)
   */
  'jsdoc/check-types': Rule<
    [
      RuleLevel,
      {
        exemptTagContexts?: {
          tag?: string;
          types?: boolean | string[];
        }[];
        noDefaults?: boolean;
        unifyParentAndChildTypeChecks?: boolean;
      },
    ]
  >;
}

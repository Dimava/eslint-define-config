import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface CheckTypesRule {
  /**
   * Reports invalid types.
   *
   * @see [check-types](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-types)
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

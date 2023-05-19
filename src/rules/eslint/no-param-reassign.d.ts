import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoParamReassignRule {
  /**
   * Disallow reassigning `function` parameters.
   *
   * @see [no-param-reassign](https://eslint.org/docs/rules/no-param-reassign)
   */
  'no-param-reassign': Rule<
    [
      RuleLevel,
      (
        | {
            props?: false;
          }
        | {
            props?: true;
            ignorePropertyModificationsFor?: string[];
            ignorePropertyModificationsForRegex?: string[];
          }
      ),
    ]
  >;
}

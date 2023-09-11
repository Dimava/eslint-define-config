import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PreferArrowCallbackRule {
  /**
   * Require using arrow functions for callbacks.
   *
   * @see [prefer-arrow-callback](https://eslint.org/docs/latest/rules/prefer-arrow-callback)
   */
  'prefer-arrow-callback': Rule<
    [
      RuleLevel,
      {
        allowNamedFunctions?: boolean;
        allowUnboundThis?: boolean;
      },
    ]
  >;
}

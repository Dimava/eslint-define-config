import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoMixedRequiresRule {
  /**
   * Disallow `require` calls to be mixed with regular variable declarations.
   *
   * @deprecated
   *
   * @see [no-mixed-requires](https://eslint.org/docs/rules/no-mixed-requires)
   */
  'no-mixed-requires': Rule<
    [
      RuleLevel,
      (
        | boolean
        | {
            grouping?: boolean;
            allowCall?: boolean;
          }
      ),
    ]
  >;
}

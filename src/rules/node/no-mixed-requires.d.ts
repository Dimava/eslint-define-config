import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoMixedRequiresRule {
  /**
   * Disallow `require` calls to be mixed with regular variable declarations.
   *
   * @see [no-mixed-requires](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/no-mixed-requires.md)
   */
  'node/no-mixed-requires': Rule<
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

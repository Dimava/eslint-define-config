import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoMixedRequiresRule = {
  /**
   * Disallow `require` calls to be mixed with regular variable declarations.
   *
   * @see [no-mixed-requires](https://github.com/weiran-zsd/eslint-plugin-node/blob/HEAD/docs/rules/no-mixed-requires.md)
   */
  'n/no-mixed-requires': Rule<
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
};

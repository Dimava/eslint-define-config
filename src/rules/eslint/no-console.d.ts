import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoConsoleRule = {
  /**
   * Disallow the use of `console`.
   *
   * @see [no-console](https://eslint.org/docs/rules/no-console)
   */
  'no-console': Rule<
    [
      RuleLevel,
      {
        /**
         * @minItems 1
         */
        allow?: [string, ...string[]];
      },
    ]
  >;
};

import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoDebuggingUtilsRule {
  /**
   * Disallow the use of debugging utilities like `debug`.
   *
   * @see [no-debugging-utils](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-debugging-utils.md)
   */
  'testing-library/no-debugging-utils': Rule<
    [
      RuleLevel,
      {
        utilsToCheckFor?: {
          prettyFormat?: boolean;
          logDOM?: boolean;
          logRoles?: boolean;
          prettyDOM?: boolean;
          logTestingPlaygroundURL?: boolean;
          debug?: boolean;
        };
      },
    ]
  >;
}

import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoNodeAccessRule {
  /**
   * Disallow direct Node access.
   *
   * @see [no-node-access](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-node-access.md)
   */
  'testing-library/no-node-access': Rule<
    [
      RuleLevel,
      {
        allowContainerFirstChild?: boolean;
        [k: string]: any;
      },
    ]
  >;
}

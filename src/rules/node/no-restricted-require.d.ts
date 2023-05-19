import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoRestrictedRequireRule {
  /**
   * Disallow specified modules when loaded by `require`.
   *
   * @see [no-restricted-require](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/no-restricted-require.md)
   */
  'node/no-restricted-require': Rule<
    [
      RuleLevel,
      (
        | string
        | {
            name: string | string[];
            message?: string;
          }
      )[],
    ]
  >;
}

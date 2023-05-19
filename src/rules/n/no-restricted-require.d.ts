import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoRestrictedRequireRule {
  /**
   * Disallow specified modules when loaded by `require`.
   *
   * @see [no-restricted-require](https://github.com/weiran-zsd/eslint-plugin-node/blob/HEAD/docs/rules/no-restricted-require.md)
   */
  'n/no-restricted-require': Rule<
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

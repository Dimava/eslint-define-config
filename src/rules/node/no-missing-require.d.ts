import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoMissingRequireRule {
  /**
   * Disallow `require()` expressions which import non-existence modules.
   *
   * @see [no-missing-require](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/no-missing-require.md)
   */
  'node/no-missing-require': Rule<
    [
      RuleLevel,
      {
        allowModules?: string[];
        tryExtensions?: string[];
        resolvePaths?: string[];
      },
    ]
  >;
}

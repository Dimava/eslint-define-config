import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoMissingRequireRule = {
  /**
   * Disallow `require()` expressions which import non-existence modules.
   *
   * @see [no-missing-require](https://github.com/weiran-zsd/eslint-plugin-node/blob/HEAD/docs/rules/no-missing-require.md)
   */
  'n/no-missing-require': Rule<
    [
      RuleLevel,
      {
        allowModules?: string[];
        tryExtensions?: string[];
        resolvePaths?: string[];
      },
    ]
  >;
};

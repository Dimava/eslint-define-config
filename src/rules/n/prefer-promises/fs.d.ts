import type { Rule } from '../../rule-config';
import type { RuleLevel } from '../../rule-severity';
export type PreferPromisesFsRule = {
  /**
   * Enforce `require("fs").promises`.
   *
   * @see [prefer-promises/fs](https://github.com/weiran-zsd/eslint-plugin-node/blob/HEAD/docs/rules/prefer-promises/fs.md)
   */
  'n/prefer-promises/fs': Rule<[RuleLevel]>;
};

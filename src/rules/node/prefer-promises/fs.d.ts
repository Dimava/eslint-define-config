import type { Rule } from '../../rule-config';
import type { RuleLevel } from '../../rule-severity';
export type PreferPromisesFsRule = {
  /**
   * Enforce `require("fs").promises`.
   *
   * @see [prefer-promises/fs](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/prefer-promises/fs.md)
   */
  'node/prefer-promises/fs': Rule<[RuleLevel]>;
};

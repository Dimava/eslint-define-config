import type { Rule } from '../../rule-config';
import type { RuleLevel } from '../../rule-severity';
export type PreferGlobalUrlRule = {
  /**
   * Enforce either `URL` or `require("url").URL`.
   *
   * @see [prefer-global/url](https://github.com/weiran-zsd/eslint-plugin-node/blob/HEAD/docs/rules/prefer-global/url.md)
   */
  'n/prefer-global/url': Rule<[RuleLevel, 'always' | 'never']>;
};

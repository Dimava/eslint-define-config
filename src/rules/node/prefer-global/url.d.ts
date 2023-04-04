import type { Rule } from '../../rule-config';
import type { RuleLevel } from '../../rule-severity';
export type PreferGlobalUrlRule = {
  /**
   * Enforce either `URL` or `require("url").URL`.
   *
   * @see [prefer-global/url](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/prefer-global/url.md)
   */
  'node/prefer-global/url': Rule<[RuleLevel, 'always' | 'never']>;
};

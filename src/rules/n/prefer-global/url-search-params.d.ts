import type { Rule } from '../../rule-config';
import type { RuleLevel } from '../../rule-severity';
export type PreferGlobalUrlSearchParamsRule = {
  /**
   * Enforce either `URLSearchParams` or `require("url").URLSearchParams`.
   *
   * @see [prefer-global/url-search-params](https://github.com/weiran-zsd/eslint-plugin-node/blob/HEAD/docs/rules/prefer-global/url-search-params.md)
   */
  'n/prefer-global/url-search-params': Rule<[RuleLevel, 'always' | 'never']>;
};

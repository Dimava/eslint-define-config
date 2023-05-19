import type { Rule } from '../../rule-config';
import type { RuleLevel } from '../../rule-severity';
export interface PreferGlobalUrlSearchParamsRule {
  /**
   * Enforce either `URLSearchParams` or `require("url").URLSearchParams`.
   *
   * @see [prefer-global/url-search-params](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/prefer-global/url-search-params.md)
   */
  'node/prefer-global/url-search-params': Rule<[RuleLevel, 'always' | 'never']>;
}

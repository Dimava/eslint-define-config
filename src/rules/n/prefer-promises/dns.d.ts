import type { Rule } from '../../rule-config';
import type { RuleLevel } from '../../rule-severity';
export interface PreferPromisesDnsRule {
  /**
   * Enforce `require("dns").promises`.
   *
   * @see [prefer-promises/dns](https://github.com/weiran-zsd/eslint-plugin-node/blob/HEAD/docs/rules/prefer-promises/dns.md)
   */
  'n/prefer-promises/dns': Rule<[RuleLevel]>;
}

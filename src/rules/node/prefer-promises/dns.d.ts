import type { Rule } from '../../rule-config';
import type { RuleLevel } from '../../rule-severity';
export type PreferPromisesDnsRule = {
  /**
   * Enforce `require("dns").promises`.
   *
   * @see [prefer-promises/dns](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/prefer-promises/dns.md)
   */
  'node/prefer-promises/dns': Rule<[RuleLevel]>;
};

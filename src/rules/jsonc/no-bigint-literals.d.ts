import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoBigintLiteralsRule = {
  /**
   * Disallow BigInt literals.
   *
   * @see [no-bigint-literals](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-bigint-literals.html)
   */
  'jsonc/no-bigint-literals': Rule<[RuleLevel]>;
};

import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface RadixRule {
  /**
   * Enforce the consistent use of the radix argument when using `parseInt()`.
   *
   * @see [radix](https://eslint.org/docs/rules/radix)
   */
  radix: Rule<[RuleLevel, 'always' | 'as-needed']>;
}

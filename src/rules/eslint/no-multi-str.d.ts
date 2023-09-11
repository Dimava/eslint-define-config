import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoMultiStrRule {
  /**
   * Disallow multiline strings.
   *
   * @see [no-multi-str](https://eslint.org/docs/latest/rules/no-multi-str)
   */
  'no-multi-str': Rule<[RuleLevel]>;
}

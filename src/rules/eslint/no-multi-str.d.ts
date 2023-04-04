import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoMultiStrRule = {
  /**
   * Disallow multiline strings.
   *
   * @see [no-multi-str](https://eslint.org/docs/rules/no-multi-str)
   */
  'no-multi-str': Rule<[RuleLevel]>;
};

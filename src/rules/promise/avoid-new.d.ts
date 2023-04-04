import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type AvoidNewRule = {
  /**
   *
   * @see [avoid-new](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/avoid-new.md)
   */
  'promise/avoid-new': Rule<[RuleLevel]>;
};

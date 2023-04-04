import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoNewStaticsRule = {
  /**
   *
   * @see [no-new-statics](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/no-new-statics.md)
   */
  'promise/no-new-statics': Rule<[RuleLevel]>;
};

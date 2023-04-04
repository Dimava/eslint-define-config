import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type PreferAwaitToCallbacksRule = {
  /**
   *
   * @see [prefer-await-to-callbacks](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/prefer-await-to-callbacks.md)
   */
  'promise/prefer-await-to-callbacks': Rule<[RuleLevel]>;
};

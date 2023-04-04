import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoPromiseInCallbackRule = {
  /**
   *
   * @see [no-promise-in-callback](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/no-promise-in-callback.md)
   */
  'promise/no-promise-in-callback': Rule<[RuleLevel]>;
};

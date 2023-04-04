import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoNativeRule = {
  /**
   *
   * @see [no-native](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/no-native.md)
   */
  'promise/no-native': Rule<[RuleLevel]>;
};

import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type AlwaysReturnRule = {
  /**
   *
   * @see [always-return](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/always-return.md)
   */
  'promise/always-return': Rule<
    [
      RuleLevel,
      {
        ignoreLastCallback?: boolean;
      },
    ]
  >;
};

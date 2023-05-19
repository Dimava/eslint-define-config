import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoReturnWrapRule {
  /**
   *
   * @see [no-return-wrap](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/no-return-wrap.md)
   */
  'promise/no-return-wrap': Rule<
    [
      RuleLevel,
      {
        allowReject?: boolean;
      },
    ]
  >;
}

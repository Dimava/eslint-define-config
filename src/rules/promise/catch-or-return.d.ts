import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface CatchOrReturnRule {
  /**
   *
   * @see [catch-or-return](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/catch-or-return.md)
   */
  'promise/catch-or-return': Rule<
    [
      RuleLevel,
      {
        allowFinally?: boolean;
        allowThen?: boolean;
        terminationMethod?: string | string[];
      },
    ]
  >;
}

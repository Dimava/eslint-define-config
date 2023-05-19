import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PreferSwitchRule {
  /**
   * Prefer `switch` over multiple `else-if`.
   *
   * @see [prefer-switch](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/rules/prefer-switch.md)
   */
  'unicorn/prefer-switch': Rule<
    [
      RuleLevel,
      {
        minimumCases?: number;
        emptyDefaultCase?:
          | 'no-default-comment'
          | 'do-nothing-comment'
          | 'no-default-case';
      },
    ]
  >;
}

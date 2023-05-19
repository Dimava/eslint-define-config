import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PreferUserEventRule {
  /**
   * Suggest using `userEvent` over `fireEvent` for simulating user interactions.
   *
   * @see [prefer-user-event](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/prefer-user-event.md)
   */
  'testing-library/prefer-user-event': Rule<
    [
      RuleLevel,
      {
        allowedMethods?: any[];
        [k: string]: any;
      },
    ]
  >;
}

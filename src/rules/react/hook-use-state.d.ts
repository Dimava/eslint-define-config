import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface HookUseStateRule {
  /**
   * Ensure destructuring and symmetric naming of useState hook value and setter variables.
   *
   * @see [hook-use-state](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/hook-use-state.md)
   */
  'react/hook-use-state': Rule<
    [
      RuleLevel,
      {
        allowDestructuredState?: boolean;
      },
    ]
  >;
}

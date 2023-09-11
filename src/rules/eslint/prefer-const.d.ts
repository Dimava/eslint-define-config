import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PreferConstRule {
  /**
   * Require `const` declarations for variables that are never reassigned after declared.
   *
   * @see [prefer-const](https://eslint.org/docs/latest/rules/prefer-const)
   */
  'prefer-const': Rule<
    [
      RuleLevel,
      {
        destructuring?: 'any' | 'all';
        ignoreReadBeforeAssign?: boolean;
      },
    ]
  >;
}

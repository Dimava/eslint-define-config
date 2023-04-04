import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type PreferConstRule = {
  /**
   * Require `const` declarations for variables that are never reassigned after declared.
   *
   * @see [prefer-const](https://eslint.org/docs/rules/prefer-const)
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
};

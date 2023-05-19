import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface DestructuringAssignmentRule {
  /**
   * Enforce consistent usage of destructuring assignment of props, state, and context.
   *
   * @see [destructuring-assignment](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/destructuring-assignment.md)
   */
  'react/destructuring-assignment': Rule<
    [
      RuleLevel,
      'always' | 'never',
      {
        ignoreClassFields?: boolean;
        destructureInSignature?: 'always' | 'ignore';
      },
    ]
  >;
}

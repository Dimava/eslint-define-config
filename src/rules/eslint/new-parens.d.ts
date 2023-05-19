import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NewParensRule {
  /**
   * Enforce or disallow parentheses when invoking a constructor with no arguments.
   *
   * @see [new-parens](https://eslint.org/docs/rules/new-parens)
   */
  'new-parens': Rule<[RuleLevel, 'always' | 'never']>;
}

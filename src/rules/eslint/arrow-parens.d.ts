import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface ArrowParensRule {
  /**
   * Require parentheses around arrow function arguments.
   *
   * @see [arrow-parens](https://eslint.org/docs/rules/arrow-parens)
   */
  'arrow-parens': Rule<
    [
      RuleLevel,
      'always' | 'as-needed',
      {
        requireForBlockBody?: boolean;
      },
    ]
  >;
}

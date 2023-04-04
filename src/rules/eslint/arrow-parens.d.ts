import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type ArrowParensRule = {
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
};

import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface CurlyRule {
  /**
   * Enforce consistent brace style for all control statements.
   *
   * @see [curly](https://eslint.org/docs/rules/curly)
   */
  curly: Rule<
    [
      RuleLevel,
      ...(
        | []
        | ['all']
        | []
        | ['multi' | 'multi-line' | 'multi-or-nest']
        | ['multi' | 'multi-line' | 'multi-or-nest', 'consistent']
      ),
    ]
  >;
}

import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface OneVarDeclarationPerLineRule {
  /**
   * Require or disallow newlines around variable declarations.
   *
   * @see [one-var-declaration-per-line](https://eslint.org/docs/rules/one-var-declaration-per-line)
   */
  'one-var-declaration-per-line': Rule<
    [RuleLevel, 'always' | 'initializations']
  >;
}

import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface EolLastRule {
  /**
   * Require or disallow newline at the end of files.
   *
   * @see [eol-last](https://eslint.org/docs/rules/eol-last)
   */
  'eol-last': Rule<[RuleLevel, 'always' | 'never' | 'unix' | 'windows']>;
}

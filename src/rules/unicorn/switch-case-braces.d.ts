import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface SwitchCaseBracesRule {
  /**
   * Enforce consistent brace style for `case` clauses.
   *
   * @see [switch-case-braces](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/rules/switch-case-braces.md)
   */
  'unicorn/switch-case-braces': Rule<[RuleLevel, 'always' | 'avoid']>;
}

import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface EmptyBraceSpacesRule {
  /**
   * Enforce no spaces between braces.
   *
   * @see [empty-brace-spaces](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/empty-brace-spaces.md)
   */
  'unicorn/empty-brace-spaces': Rule<[RuleLevel]>;
}

import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface RelativeUrlStyleRule {
  /**
   * Enforce consistent relative URL style.
   *
   * @see [relative-url-style](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/relative-url-style.md)
   */
  'unicorn/relative-url-style': Rule<[RuleLevel, 'never' | 'always']>;
}

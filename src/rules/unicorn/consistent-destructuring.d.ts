import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface ConsistentDestructuringRule {
  /**
   * Use destructured variables over properties.
   *
   * @see [consistent-destructuring](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/rules/consistent-destructuring.md)
   */
  'unicorn/consistent-destructuring': Rule<[RuleLevel]>;
}

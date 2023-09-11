import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface ConsistentDestructuringRule {
  /**
   * Use destructured variables over properties.
   *
   * @see [consistent-destructuring](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/consistent-destructuring.md)
   */
  'unicorn/consistent-destructuring': Rule<[RuleLevel]>;
}

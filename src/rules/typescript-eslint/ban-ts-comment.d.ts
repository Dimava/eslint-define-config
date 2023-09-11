import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface BanTsCommentRule {
  /**
   * Disallow `@ts-<directive>` comments or require descriptions after directives.
   *
   * @see [ban-ts-comment](https://typescript-eslint.io/rules/ban-ts-comment)
   */
  '@typescript-eslint/ban-ts-comment': Rule<[RuleLevel, ...any[]]>;
}

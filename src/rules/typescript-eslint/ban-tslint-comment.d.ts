import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface BanTslintCommentRule {
  /**
   * Disallow `// tslint:<rule-flag>` comments.
   *
   * @see [ban-tslint-comment](https://typescript-eslint.io/rules/ban-tslint-comment)
   */
  '@typescript-eslint/ban-tslint-comment': Rule<[RuleLevel]>;
}

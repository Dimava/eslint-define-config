import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface ExpiringTodoCommentsRule {
  /**
   * Add expiration conditions to TODO comments.
   *
   * @see [expiring-todo-comments](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/rules/expiring-todo-comments.md)
   */
  'unicorn/expiring-todo-comments': Rule<
    [
      RuleLevel,
      {
        terms?: string[];
        ignore?: any[];
        ignoreDatesOnPullRequests?: boolean;
        allowWarningComments?: boolean;
        date?: string;
      },
    ]
  >;
}

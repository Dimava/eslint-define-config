import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PreferTodoRule {
  /**
   * Suggest using `test.todo`.
   *
   * @see [prefer-todo](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-todo.md)
   */
  'vitest/prefer-todo': Rule<[RuleLevel]>;
}

import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface ReturnAwaitRule {
  /**
   * Enforce consistent returning of awaited values.
   *
   * @see [return-await](https://typescript-eslint.io/rules/return-await)
   */
  '@typescript-eslint/return-await': Rule<
    [RuleLevel, 'in-try-catch' | 'always' | 'never']
  >;
}

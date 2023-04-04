import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type AwaitThenableRule = {
  /**
   * Disallow awaiting a value that is not a Thenable.
   *
   * @see [await-thenable](https://typescript-eslint.io/rules/await-thenable)
   */
  '@typescript-eslint/await-thenable': Rule<[RuleLevel]>;
};

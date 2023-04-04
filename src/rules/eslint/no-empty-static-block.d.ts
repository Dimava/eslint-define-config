import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoEmptyStaticBlockRule = {
  /**
   * Disallow empty static blocks.
   *
   * @see [no-empty-static-block](https://eslint.org/docs/rules/no-empty-static-block)
   */
  'no-empty-static-block': Rule<[RuleLevel]>;
};

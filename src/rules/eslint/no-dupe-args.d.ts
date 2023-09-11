import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoDupeArgsRule {
  /**
   * Disallow duplicate arguments in `function` definitions.
   *
   * @see [no-dupe-args](https://eslint.org/docs/latest/rules/no-dupe-args)
   */
  'no-dupe-args': Rule<[RuleLevel]>;
}

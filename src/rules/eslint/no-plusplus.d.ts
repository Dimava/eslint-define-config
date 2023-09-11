import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoPlusplusRule {
  /**
   * Disallow the unary operators `++` and `--`.
   *
   * @see [no-plusplus](https://eslint.org/docs/latest/rules/no-plusplus)
   */
  'no-plusplus': Rule<
    [
      RuleLevel,
      {
        allowForLoopAfterthoughts?: boolean;
      },
    ]
  >;
}

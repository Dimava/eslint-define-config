import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoPlusplusRule = {
  /**
   * Disallow the unary operators `++` and `--`.
   *
   * @see [no-plusplus](https://eslint.org/docs/rules/no-plusplus)
   */
  'no-plusplus': Rule<
    [
      RuleLevel,
      {
        allowForLoopAfterthoughts?: boolean;
      },
    ]
  >;
};

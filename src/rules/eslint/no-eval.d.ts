import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoEvalRule = {
  /**
   * Disallow the use of `eval()`.
   *
   * @see [no-eval](https://eslint.org/docs/rules/no-eval)
   */
  'no-eval': Rule<
    [
      RuleLevel,
      {
        allowIndirect?: boolean;
      },
    ]
  >;
};

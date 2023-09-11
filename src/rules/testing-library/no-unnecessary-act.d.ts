import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoUnnecessaryActRule {
  /**
   * Disallow wrapping Testing Library utils or empty callbacks in `act`.
   *
   * @see [no-unnecessary-act](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-unnecessary-act.md)
   */
  'testing-library/no-unnecessary-act': Rule<
    [
      RuleLevel,
      {
        isStrict?: boolean;
        [k: string]: any;
      },
    ]
  >;
}

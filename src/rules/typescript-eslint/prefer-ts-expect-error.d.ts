import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PreferTsExpectErrorRule {
  /**
   * Enforce using `@ts-expect-error` over `@ts-ignore`.
   *
   * @see [prefer-ts-expect-error](https://typescript-eslint.io/rules/prefer-ts-expect-error)
   */
  '@typescript-eslint/prefer-ts-expect-error': Rule<[RuleLevel]>;
}

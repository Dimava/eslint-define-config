import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PreferExpectResolvesRule {
  /**
   * Suggest using `expect().resolves` over `expect(await ...)` syntax.
   *
   * @see [prefer-expect-resolves](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-expect-resolves.md)
   */
  'vitest/prefer-expect-resolves': Rule<[RuleLevel]>;
}

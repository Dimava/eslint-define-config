import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PreferSpyOnRule {
  /**
   * Suggest using `vi.spyOn`.
   *
   * @see [prefer-spy-on](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-spy-on.md)
   */
  'vitest/prefer-spy-on': Rule<[RuleLevel]>;
}

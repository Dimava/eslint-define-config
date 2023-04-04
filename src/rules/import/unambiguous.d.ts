import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type UnambiguousRule = {
  /**
   * Forbid potentially ambiguous parse goal (`script` vs. `module`).
   *
   * @see [unambiguous](https://github.com/import-js/eslint-plugin-import/blob/v2.27.5/docs/rules/unambiguous.md)
   */
  'import/unambiguous': Rule<[RuleLevel]>;
};

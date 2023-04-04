import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type ExportsLastRule = {
  /**
   * Ensure all exports appear after other statements.
   *
   * @see [exports-last](https://github.com/import-js/eslint-plugin-import/blob/v2.27.5/docs/rules/exports-last.md)
   */
  'import/exports-last': Rule<[RuleLevel]>;
};

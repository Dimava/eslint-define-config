import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface FirstRule {
  /**
   * Ensure all imports appear before other statements.
   *
   * @see [first](https://github.com/import-js/eslint-plugin-import/blob/v2.28.0/docs/rules/first.md)
   */
  'import/first': Rule<
    [RuleLevel, 'absolute-first' | 'disable-absolute-first']
  >;
}

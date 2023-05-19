import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface ExportsStyleRule {
  /**
   * Enforce either `module.exports` or `exports`.
   *
   * @see [exports-style](https://github.com/weiran-zsd/eslint-plugin-node/blob/HEAD/docs/rules/exports-style.md)
   */
  'n/exports-style': Rule<
    [
      RuleLevel,
      'module.exports' | 'exports',
      {
        allowBatchAssign?: boolean;
      },
    ]
  >;
}

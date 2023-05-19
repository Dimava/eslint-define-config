import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface ExportsStyleRule {
  /**
   * Enforce either `module.exports` or `exports`.
   *
   * @see [exports-style](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/exports-style.md)
   */
  'node/exports-style': Rule<
    [
      RuleLevel,
      'module.exports' | 'exports',
      {
        allowBatchAssign?: boolean;
      },
    ]
  >;
}

import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoUselessPathSegmentsRule {
  /**
   * Forbid unnecessary path segments in import and require statements.
   *
   * @see [no-useless-path-segments](https://github.com/import-js/eslint-plugin-import/blob/v2.28.0/docs/rules/no-useless-path-segments.md)
   */
  'import/no-useless-path-segments': Rule<
    [
      RuleLevel,
      {
        commonjs?: boolean;
        noUselessIndex?: boolean;
      },
    ]
  >;
}

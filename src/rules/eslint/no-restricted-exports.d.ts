import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoRestrictedExportsRule {
  /**
   * Disallow specified names in exports.
   *
   * @see [no-restricted-exports](https://eslint.org/docs/latest/rules/no-restricted-exports)
   */
  'no-restricted-exports': Rule<
    [
      RuleLevel,
      (
        | {
            restrictedNamedExports?: string[];
          }
        | {
            restrictedNamedExports?: string[];
            restrictDefaultExports?: {
              direct?: boolean;
              named?: boolean;
              defaultFrom?: boolean;
              namedFrom?: boolean;
              namespaceFrom?: boolean;
            };
          }
      ),
    ]
  >;
}

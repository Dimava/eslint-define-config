import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoRestrictedExportsRule = {
  /**
   * Disallow specified names in exports.
   *
   * @see [no-restricted-exports](https://eslint.org/docs/rules/no-restricted-exports)
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
};

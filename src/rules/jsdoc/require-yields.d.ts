import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface RequireYieldsRule {
  /**
   * Requires yields are documented.
   *
   * @see [require-yields](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-yields.md#repos-sticky-header)
   */
  'jsdoc/require-yields': Rule<
    [
      RuleLevel,
      {
        contexts?: (
          | string
          | {
              comment?: string;
              context?: string;
            }
        )[];
        exemptedBy?: string[];
        forceRequireNext?: boolean;
        forceRequireYields?: boolean;
        next?: boolean;
        nextWithGeneratorTag?: boolean;
        withGeneratorTag?: boolean;
      },
    ]
  >;
}

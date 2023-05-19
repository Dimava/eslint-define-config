import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface RequireYieldsRule {
  /**
   * Requires yields are documented.
   *
   * @see [require-yields](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-yields)
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

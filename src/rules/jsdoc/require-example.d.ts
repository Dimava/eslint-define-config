import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface RequireExampleRule {
  /**
   * Requires that all functions have examples.
   *
   * @see [require-example](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-example.md#repos-sticky-header)
   */
  'jsdoc/require-example': Rule<
    [
      RuleLevel,
      {
        checkConstructors?: boolean;
        checkGetters?: boolean;
        checkSetters?: boolean;
        contexts?: (
          | string
          | {
              comment?: string;
              context?: string;
            }
        )[];
        enableFixer?: boolean;
        exemptedBy?: string[];
        exemptNoArguments?: boolean;
      },
    ]
  >;
}

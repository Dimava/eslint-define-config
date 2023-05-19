import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface RequireReturnsRule {
  /**
   * Requires that returns are documented.
   *
   * @see [require-returns](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-returns)
   */
  'jsdoc/require-returns': Rule<
    [
      RuleLevel,
      {
        checkConstructors?: boolean;
        checkGetters?: boolean;
        contexts?: (
          | string
          | {
              comment?: string;
              context?: string;
            }
        )[];
        exemptedBy?: string[];
        forceRequireReturn?: boolean;
        forceReturnsWithAsync?: boolean;
      },
    ]
  >;
}

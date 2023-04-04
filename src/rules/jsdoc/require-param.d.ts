import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type RequireParamRule = {
  /**
   * Requires that all function parameters are documented.
   *
   * @see [require-param](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-param)
   */
  'jsdoc/require-param': Rule<
    [
      RuleLevel,
      {
        autoIncrementBase?: number;
        checkConstructors?: boolean;
        checkDestructured?: boolean;
        checkDestructuredRoots?: boolean;
        checkGetters?: boolean;
        checkRestProperty?: boolean;
        checkSetters?: boolean;
        checkTypesPattern?: string;
        contexts?: (
          | string
          | {
              comment?: string;
              context?: string;
            }
        )[];
        enableFixer?: boolean;
        enableRestElementFixer?: boolean;
        enableRootFixer?: boolean;
        exemptedBy?: string[];
        unnamedRootBase?: string[];
        useDefaultObjectProperties?: boolean;
      },
    ]
  >;
};

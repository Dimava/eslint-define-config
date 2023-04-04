import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoNamespaceRule = {
  /**
   * Disallow TypeScript namespaces.
   *
   * @see [no-namespace](https://typescript-eslint.io/rules/no-namespace)
   */
  '@typescript-eslint/no-namespace': Rule<
    [
      RuleLevel,
      {
        /**
         * Whether to allow `declare` with custom TypeScript namespaces.
         */
        allowDeclarations?: boolean;
        /**
         * Whether to allow `declare` with custom TypeScript namespaces inside definition files.
         */
        allowDefinitionFiles?: boolean;
      },
    ]
  >;
};

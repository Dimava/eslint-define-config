import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface ConsistentTypeDefinitionsRule {
  /**
   * Enforce type definitions to consistently use either `interface` or `type`.
   *
   * @see [consistent-type-definitions](https://typescript-eslint.io/rules/consistent-type-definitions)
   */
  '@typescript-eslint/consistent-type-definitions': Rule<
    [RuleLevel, 'interface' | 'type']
  >;
}

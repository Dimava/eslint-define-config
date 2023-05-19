import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface ConsistentTypeImportsRule {
  /**
   * Enforce consistent usage of type imports.
   *
   * @see [consistent-type-imports](https://typescript-eslint.io/rules/consistent-type-imports)
   */
  '@typescript-eslint/consistent-type-imports': Rule<
    [
      RuleLevel,
      {
        prefer?: 'type-imports' | 'no-type-imports';
        disallowTypeAnnotations?: boolean;
        fixStyle?: 'separate-type-imports' | 'inline-type-imports';
      },
    ]
  >;
}

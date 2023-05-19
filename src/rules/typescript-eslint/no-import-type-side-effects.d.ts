import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoImportTypeSideEffectsRule {
  /**
   * Enforce the use of top-level import type qualifier when an import only has specifiers with inline type qualifiers.
   *
   * @see [no-import-type-side-effects](https://typescript-eslint.io/rules/no-import-type-side-effects)
   */
  '@typescript-eslint/no-import-type-side-effects': Rule<[RuleLevel]>;
}

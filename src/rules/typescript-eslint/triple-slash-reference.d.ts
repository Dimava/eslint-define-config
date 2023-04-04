import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type TripleSlashReferenceRule = {
  /**
   * Disallow certain triple slash directives in favor of ES6-style import declarations.
   *
   * @see [triple-slash-reference](https://typescript-eslint.io/rules/triple-slash-reference)
   */
  '@typescript-eslint/triple-slash-reference': Rule<
    [
      RuleLevel,
      {
        lib?: 'always' | 'never';
        path?: 'always' | 'never';
        types?: 'always' | 'never' | 'prefer-import';
      },
    ]
  >;
};

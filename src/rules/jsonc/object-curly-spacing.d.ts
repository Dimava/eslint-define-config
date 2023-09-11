import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface ObjectCurlySpacingRule {
  /**
   * Enforce consistent spacing inside braces.
   *
   * @see [object-curly-spacing](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/object-curly-spacing.html)
   */
  'jsonc/object-curly-spacing': Rule<
    [
      RuleLevel,
      'always' | 'never',
      {
        arraysInObjects?: boolean;
        objectsInObjects?: boolean;
      },
    ]
  >;
}

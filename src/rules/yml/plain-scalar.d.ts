import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PlainScalarRule {
  /**
   * Require or disallow plain style scalar.
   *
   * @see [plain-scalar](https://ota-meshi.github.io/eslint-plugin-yml/rules/plain-scalar.html)
   */
  'yml/plain-scalar': Rule<
    [
      RuleLevel,
      'always' | 'never',
      {
        ignorePatterns?: string[];
      },
    ]
  >;
}

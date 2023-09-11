import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface CommaStyleRule {
  /**
   * Enforce consistent comma style.
   *
   * @see [comma-style](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/comma-style.html)
   */
  'jsonc/comma-style': Rule<
    [
      RuleLevel,
      'first' | 'last',
      {
        exceptions?: {
          [k: string]: boolean;
        };
      },
    ]
  >;
}

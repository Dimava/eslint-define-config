import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoUnsafeRule {
  /**
   * Disallow usage of unsafe lifecycle methods.
   *
   * @see [no-unsafe](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-unsafe.md)
   */
  'react/no-unsafe': Rule<
    [
      RuleLevel,
      {
        checkAliases?: boolean;
      },
    ]
  >;
}

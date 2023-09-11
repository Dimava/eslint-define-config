import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoMultiCompRule {
  /**
   * Disallow multiple component definition per file.
   *
   * @see [no-multi-comp](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-multi-comp.md)
   */
  'react/no-multi-comp': Rule<
    [
      RuleLevel,
      {
        ignoreStateless?: boolean;
      },
    ]
  >;
}

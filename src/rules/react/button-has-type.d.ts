import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface ButtonHasTypeRule {
  /**
   * Disallow usage of `button` elements without an explicit `type` attribute.
   *
   * @see [button-has-type](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/button-has-type.md)
   */
  'react/button-has-type': Rule<
    [
      RuleLevel,
      {
        button?: boolean;
        submit?: boolean;
        reset?: boolean;
      },
    ]
  >;
}

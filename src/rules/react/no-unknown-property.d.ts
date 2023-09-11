import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoUnknownPropertyRule {
  /**
   * Disallow usage of unknown DOM property.
   *
   * @see [no-unknown-property](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-unknown-property.md)
   */
  'react/no-unknown-property': Rule<
    [
      RuleLevel,
      {
        ignore?: string[];
      },
    ]
  >;
}

import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface QuotePropsRule {
  /**
   * Require quotes around object literal property names.
   *
   * @see [quote-props](https://eslint.org/docs/rules/quote-props)
   */
  'quote-props': Rule<
    [
      RuleLevel,
      ...(
        | []
        | ['always' | 'as-needed' | 'consistent' | 'consistent-as-needed']
        | []
        | ['always' | 'as-needed' | 'consistent' | 'consistent-as-needed']
        | [
            'always' | 'as-needed' | 'consistent' | 'consistent-as-needed',
            {
              keywords?: boolean;
              unnecessary?: boolean;
              numbers?: boolean;
            },
          ]
      ),
    ]
  >;
}

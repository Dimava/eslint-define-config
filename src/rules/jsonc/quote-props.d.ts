import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type QuotePropsRule = {
  /**
   * Require quotes around object literal property names.
   *
   * @see [quote-props](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/quote-props.html)
   */
  'jsonc/quote-props': Rule<
    [
      RuleLevel,
      (
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
};

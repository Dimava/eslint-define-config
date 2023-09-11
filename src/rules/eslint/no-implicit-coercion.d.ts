import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoImplicitCoercionRule {
  /**
   * Disallow shorthand type conversions.
   *
   * @see [no-implicit-coercion](https://eslint.org/docs/latest/rules/no-implicit-coercion)
   */
  'no-implicit-coercion': Rule<
    [
      RuleLevel,
      {
        boolean?: boolean;
        number?: boolean;
        string?: boolean;
        disallowTemplateShorthand?: boolean;
        allow?: ('~' | '!!' | '+' | '*')[];
      },
    ]
  >;
}

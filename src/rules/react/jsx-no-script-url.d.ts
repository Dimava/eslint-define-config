import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface JsxNoScriptUrlRule {
  /**
   * Disallow usage of `javascript:` URLs.
   *
   * @see [jsx-no-script-url](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-script-url.md)
   */
  'react/jsx-no-script-url': Rule<
    [
      RuleLevel,
      {
        name: string;
        props: string[];
      }[],
    ]
  >;
}

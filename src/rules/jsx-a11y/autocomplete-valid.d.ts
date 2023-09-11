import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface AutocompleteValidRule {
  /**
   * Enforce that autocomplete attributes are used correctly.
   *
   * @see [autocomplete-valid](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/autocomplete-valid.md)
   */
  'jsx-a11y/autocomplete-valid': Rule<
    [
      RuleLevel,
      {
        inputComponents?: string[];
        [k: string]: any;
      },
    ]
  >;
}

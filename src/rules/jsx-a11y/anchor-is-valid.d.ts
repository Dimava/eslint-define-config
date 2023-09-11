import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface AnchorIsValidRule {
  /**
   * Enforce all anchors are valid, navigable elements.
   *
   * @see [anchor-is-valid](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/anchor-is-valid.md)
   */
  'jsx-a11y/anchor-is-valid': Rule<
    [
      RuleLevel,
      {
        components?: string[];
        specialLink?: string[];
        /**
         * @minItems 1
         */
        aspects?: [
          'noHref' | 'invalidHref' | 'preferButton',
          ...('noHref' | 'invalidHref' | 'preferButton')[],
        ];
        [k: string]: any;
      },
    ]
  >;
}

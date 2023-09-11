import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface InteractiveSupportsFocusRule {
  /**
   * Enforce that elements with interactive handlers like `onClick` must be focusable.
   *
   * @see [interactive-supports-focus](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/interactive-supports-focus.md)
   */
  'jsx-a11y/interactive-supports-focus': Rule<
    [
      RuleLevel,
      {
        /**
         * @minItems 0
         */
        tabbable?: (
          | 'button'
          | 'checkbox'
          | 'columnheader'
          | 'combobox'
          | 'grid'
          | 'gridcell'
          | 'link'
          | 'listbox'
          | 'menu'
          | 'menubar'
          | 'menuitem'
          | 'menuitemcheckbox'
          | 'menuitemradio'
          | 'option'
          | 'progressbar'
          | 'radio'
          | 'radiogroup'
          | 'row'
          | 'rowheader'
          | 'scrollbar'
          | 'searchbox'
          | 'slider'
          | 'spinbutton'
          | 'switch'
          | 'tab'
          | 'tablist'
          | 'textbox'
          | 'tree'
          | 'treegrid'
          | 'treeitem'
          | 'doc-backlink'
          | 'doc-biblioref'
          | 'doc-glossref'
          | 'doc-noteref'
        )[];
        [k: string]: any;
      },
    ]
  >;
}

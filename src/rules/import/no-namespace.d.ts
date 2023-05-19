import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoNamespaceRule {
  /**
   * Forbid namespace (a.k.a. "wildcard" `*`) imports.
   *
   * @see [no-namespace](https://github.com/import-js/eslint-plugin-import/blob/v2.27.5/docs/rules/no-namespace.md)
   */
  'import/no-namespace': Rule<
    [
      RuleLevel,
      {
        ignore?: string[];
        [k: string]: any;
      },
    ]
  >;
}

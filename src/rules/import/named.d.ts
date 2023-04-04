import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NamedRule = {
  /**
   * Ensure named imports correspond to a named export in the remote file.
   *
   * @see [named](https://github.com/import-js/eslint-plugin-import/blob/v2.27.5/docs/rules/named.md)
   */
  'import/named': Rule<
    [
      RuleLevel,
      {
        commonjs?: boolean;
      },
    ]
  >;
};

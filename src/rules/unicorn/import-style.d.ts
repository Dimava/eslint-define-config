import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface ImportStyleRule {
  /**
   * Enforce specific import styles per module.
   *
   * @see [import-style](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/import-style.md)
   */
  'unicorn/import-style': Rule<
    [
      RuleLevel,
      ...(
        | []
        | [
            {
              checkImport?: boolean;
              checkDynamicImport?: boolean;
              checkExportFrom?: boolean;
              checkRequire?: boolean;
              extendDefaultStyles?: boolean;
              styles?: ModuleStyles;
            },
          ]
      ),
    ]
  >;
}
type Styles = false | BooleanObject;

interface ModuleStyles {
  [k: string]: Styles;
}
interface BooleanObject {
  [k: string]: boolean;
}

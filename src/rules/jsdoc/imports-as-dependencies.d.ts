import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface ImportsAsDependenciesRule {
  /**
   * Reports if JSDoc `import()` statements point to a package which is not listed in `dependencies` or `devDependencies`.
   *
   * @see [imports-as-dependencies](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/imports-as-dependencies.md#repos-sticky-header)
   */
  'jsdoc/imports-as-dependencies': Rule<[RuleLevel]>;
}

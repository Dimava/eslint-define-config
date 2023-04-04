import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NamespaceRule = {
  /**
   * Ensure imported namespaces contain dereferenced properties as they are dereferenced.
   *
   * @see [namespace](https://github.com/import-js/eslint-plugin-import/blob/v2.27.5/docs/rules/namespace.md)
   */
  'import/namespace': Rule<
    [
      RuleLevel,
      {
        /**
         * If `false`, will report computed (and thus, un-lintable) references to namespace members.
         */
        allowComputed?: boolean;
      },
    ]
  >;
};

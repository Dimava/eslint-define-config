import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type ImportsFirstRule = {
  /**
   * Replaced by `import/first`.
   *
   * @deprecated
   *
   * @see [imports-first](https://github.com/import-js/eslint-plugin-import/blob/7b25c1cb95ee18acc1531002fd343e1e6031f9ed/docs/rules/imports-first.md)
   */
  'import/imports-first': Rule<
    [RuleLevel, 'absolute-first' | 'disable-absolute-first']
  >;
};

import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface InformativeDocsRule {
  /**
   * This rule reports doc comments that only restate their attached name.
   *
   * @see [informative-docs](https://github.com/gajus/eslint-plugin-jsdoc#informative-docs)
   */
  'jsdoc/informative-docs': Rule<
    [
      RuleLevel,
      {
        aliases?: string[];
        uselessWords?: string[];
      },
    ]
  >;
}

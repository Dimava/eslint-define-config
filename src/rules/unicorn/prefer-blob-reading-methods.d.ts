import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PreferBlobReadingMethodsRule {
  /**
   * Prefer `Blob#arrayBuffer()` over `FileReader#readAsArrayBuffer(…)` and `Blob#text()` over `FileReader#readAsText(…)`.
   *
   * @see [prefer-blob-reading-methods](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-blob-reading-methods.md)
   */
  'unicorn/prefer-blob-reading-methods': Rule<[RuleLevel]>;
}

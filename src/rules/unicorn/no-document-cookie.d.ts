import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoDocumentCookieRule {
  /**
   * Do not use `document.cookie` directly.
   *
   * @see [no-document-cookie](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/rules/no-document-cookie.md)
   */
  'unicorn/no-document-cookie': Rule<[RuleLevel]>;
}

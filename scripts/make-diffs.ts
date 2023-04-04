import { execaCommand } from 'execa';
import jetpack from 'fs-jetpack';

const files: string[] = jetpack.find('src/rules', {
  matching: '**/*.error.d.ts',
});
console.log(files);

void (async function () {
  for (const f of files) {
    jetpack.write(
      f,
      jetpack.read(f)!.replace(/^(?!import)[^]*?\n(?=import)/, ''),
    );
    const { stdout } = await execaCommand(
      `git diff --no-index ${f.replace('.error.', '.')} ${f}`,
    ).catch((e) => e);
    console.log(stdout);
    jetpack.write(
      f
        .replace('src', 'scripts/generate-rule-files/diffs')
        .replace('.error.', '.') + '.diff',
      stdout,
    );
  }
})();

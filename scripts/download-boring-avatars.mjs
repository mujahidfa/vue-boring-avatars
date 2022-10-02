import download from "github-directory-downloader";
import fs from "fs/promises";

// boring-avatars v1.7.0 commit SHA
const GITHUB_SHA = "11fd1370d36f0b2f0804d803a7f94846ae9706af";

// Clone the src of boring-avatars
await download(
  `https://github.com/boringdesigners/boring-avatars/tree/${GITHUB_SHA}/src/lib`,
  "./react-boring-avatars/"
);

// Rename React component .js files to .jsx
// This is because Vite doesn't support using JSX syntax inside .js files
// See https://github.com/vitejs/vite/issues/2727
const components = [
  "avatar",
  "avatar-bauhaus",
  "avatar-beam",
  "avatar-marble",
  "avatar-pixel",
  "avatar-ring",
  "avatar-sunset",
];
for (const component of components) {
  await fs.rename(
    `./react-boring-avatars/components/${component}.js`,
    `./react-boring-avatars/components/${component}.jsx`
  );
}

import download from "github-directory-downloader";
import fs from "fs/promises";

// Use SHA for boring-avatars v1.6.3 commit
const GITHUB_SHA = "0dd3c9fc92bdf225399382bdb27fe1a31634f3d8";
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

const os = require("os");
const path = require("path");

// arch in [arm, x32, x64...] (https://nodejs.org/api/os.html#os_os_arch)
// return value in [amd64, 386, arm]
function mapArch(arch) {
  const mappings = {};
  return mappings[arch] || arch;
}

// os in [darwin, linux, win32...] (https://nodejs.org/api/os.html#os_os_platform)
// return value in [darwin, linux, windows]
function mapOS(os) {
  const mappings = {
    darwin: "darwin",
    win32: "windows",
    linux: "linux"
  };
  return mappings[os] || os;
}

function getDownloadUrl({ version, platform, arch }) {
  const filename = `merkely_${version}_${mapOS(platform)}_${mapArch(arch)}`;
  const extension = platform === "win32" ? "zip" : "tar.gz";
  return `https://github.com/merkely-development/cli/releases/download/v${version}/${filename}.${extension}`;
}

module.exports = { getDownloadUrl };

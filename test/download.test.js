const test = require("ava");
const { getDownloadUrl } = require("../src/download");

const baseUrl = "https://github.com/merkely-development/cli/releases/download/";
const testCases = [
  { version: "1.5.1", platform: "darwin", arch: "amd64", expected: "v1.5.1/merkely_1.5.1_darwin_amd64.tar.gz" },
  { version: "1.5.1", platform: "darwin", arch: "arm64", expected: "v1.5.1/merkely_1.5.1_darwin_arm64.tar.gz" },
  { version: "1.5.1", platform: "linux", arch: "amd64", expected: "v1.5.1/merkely_1.5.1_linux_amd64.tar.gz" },
  { version: "1.5.1", platform: "linux", arch: "arm64", expected: "v1.5.1/merkely_1.5.1_linux_arm64.tar.gz" },
  // { version: "1.5.1", platform: "linux", arch: "???", expected: "v1.5.1/merkely_1.5.1_linux_armv6.tar.gz" },
  { version: "1.5.1", platform: "win32", arch: "amd64", expected: "v1.5.1/merkely_1.5.1_windows_amd64.zip" },
  { version: "1.5.1", platform: "win32", arch: "arm64", expected: "v1.5.1/merkely_1.5.1_windows_arm64.zip" }
  // { version: "1.5.1", platform: "win32", arch: "", expected: "v1.5.1/merkely_1.5.1_windows_armv6.zip" }
];

testCases.forEach(element => {
  const { version, platform, arch, expected } = element;
  test(expected, t => {
    const res = getDownloadUrl({ version, platform, arch });
    t.is(res, baseUrl + expected);
  });
});

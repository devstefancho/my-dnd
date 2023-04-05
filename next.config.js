/** @type {import('next').NextConfig} */
const nextConfig = {
  /**
   * react-beautiful-dnd에서 strict mode를 사용하면, 새로고침시에 동작하지 않는 문제가 있음
   * @link https://github.com/atlassian/react-beautiful-dnd/issues/2393#issuecomment-1100711579
   */
  reactStrictMode: false,
};

module.exports = nextConfig;

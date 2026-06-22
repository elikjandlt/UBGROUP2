import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_ERXES_ENDPOINT: "https://ubgroupnext.next.erxes.io/gateway/graphql",
    NEXT_PUBLIC_ERXES_APP_TOKEN: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRQb3J0YWxJZCI6IlFSeWpLUHRuMk5XanJKd3pjenJOXyIsImlhdCI6MTc3OTQxOTk1MH0.PgvPMc7HgZu_kqeu90vDGqt5cqN4N_EV0gSOMMfmW6E",
    NEXT_PUBLIC_ERXES_CMS_ID: "6a0fd080358b8cf646c214d2",
    ERXES_APP_TOKEN: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRQb3J0YWxJZCI6IlFSeWpLUHRuMk5XanJKd3pjenJOXyIsImlhdCI6MTc3OTQxOTk1MH0.PgvPMc7HgZu_kqeu90vDGqt5cqN4N_EV0gSOMMfmW6E",
  },
};

export default withNextIntl(nextConfig);

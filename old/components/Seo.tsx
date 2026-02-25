import Head from "next/head";
import Script from "next/script";

const SEO = ({ pageTitle, pageDescription }: any) => (
  <Head>
    <title>{pageTitle}</title>
    <meta name="description" content={pageDescription} />
    <meta
      name="google-site-verification"
      content="HvZgR396UtF026Id-AiV9hVt4sJKifRXA2DweRJDWs8"
    />
  </Head>
);

export default SEO;

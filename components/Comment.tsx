import Head from "next/head";

export const Comment = () => {
  return (
    <>
      <div id="disqus_thread" style={{ width: "100%" }} />
      <Head>
        <script
          src="https://dapomogu-com.disqus.com/embed.js"
          data-timestamp={+new Date()}
        />
      </Head>
    </>
  );
};

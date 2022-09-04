import { useRouter } from 'next/router';
import Head from 'next/head';
import Footer from './footer';
import Navbar from './navbar';

const Layout = ({ title, desc, children }) => {
  const router = useRouter();
  const website = 'https://youfyapp.com';

  const allTitles = title
    ? `${title} - Youfy`
    : `Youfy - Transfer YouTube songs and playlists to Spotify`;
  const allDesc =
    desc ||
    `Quick and easy way to transfer YouTube songs and playlists to your Spotify account without leaving YouTube!`;

  return (
    <>
      <Head>
        <title>{allTitles}</title>
        <meta name='description' content={allDesc} />
        <meta name='og:title' property='og:title' content={allTitles} />
        <meta
          name='og:description'
          property='og:description'
          content={allDesc}
        />
        <meta property='og:url' content={website + router.pathname} />
        <meta property='og:image' content={`${website}/youfy-og-image.png`} />
        <link rel='canonical' href={website + router.pathname} />
        <meta name='twitter:card' content='app' />
        <meta name='twitter:text:title' content={allTitles} />
        <meta name='twitter:description' content={allDesc} />
        <meta name='twitter:url' content={website + router.pathname} />
        <meta name='twitter:image' content={`${website}/youfy-og-image.png`} />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
import Layout from '../components/layout';
import {
  AIToolsLogo,
  AmazingNewslettersLogo,
  PDFPeerLogo,
} from '../components/logos';

export default function Index() {
  return (
    <Layout>
      <div className='home-page'>
        <section className='hero'>
          <div className='text'>
            <h1>Take your music with you</h1>
            <p className='subheading'>
              Easily transfer your favorite YouTube songs and playlists to
              Spotify for free.
            </p>
            <div className='cta'>
              <a href='https://cutt.ly/youfy' target='_blank'>
                <input type='button' value='Get it now' className='btn' />
              </a>
            </div>
          </div>

          <div className='image'>
            <img src='images/hero123.png' alt='' className='left' />
          </div>
        </section>

        <section className='our-sponsors'>
          <h1>Our Sponsors</h1>
          <div className='sponsors'>
            <a
              href='https://aitools.fyi?ref=youfy&utm_source=youfy&utm_medium=logo&utm_campaign=youfy'
              target='_blank'
            >
              <AIToolsLogo />
            </a>
            <a
              href='https://pdfpeer.com?ref=youfy&utm_source=youfy&utm_medium=logo&utm_campaign=youfy'
              target='_blank'
            >
              <PDFPeerLogo />
            </a>
            <a
              href='https://amazingnewsletters.com?ref=youfy&utm_source=youfy&utm_medium=logo&utm_campaign=youfy'
              target='_blank'
            >
              <AmazingNewslettersLogo />
            </a>
          </div>
        </section>

        <section id='features'>
          <div className='image'>
            <img src='images/circle1.svg' alt='' className='left' />
          </div>
          <div className='text'>
            <h2>Add YouTube songs to Spotify playlists in one click</h2>
            <p className='subheading'>
              Make things faster. Add your favorite songs from YouTube to your
              Spotify playlists in just one click.
            </p>
          </div>
        </section>

        <section className='second-feature'>
          <div className='text'>
            <h2>Transfer your YouTube playlists to Spotify easily</h2>
            <p className='subheading'>
              Transfer unlimited YouTube playlists to Spotify from YouTube. No
              need to switch tabs.
            </p>
          </div>
          <div className='image'>
            <img src='images/circle2.svg' alt='' className='left' />
          </div>
        </section>

        <section>
          <div className='image'>
            <img src='images/circle3.svg' alt='' className='left' />
          </div>
          <div className='text'>
            <h2>Transfer songs and playlists without switching tabs</h2>
            <p className='subheading'>
              Time matters. Save time by doing all the songs and playlists
              transfer without leaving YouTube.
            </p>
          </div>
        </section>

        <section className='get-now'>
          <h1>Get control over your music. Download Youfy now!</h1>
          <div className='cta'>
            <a href='https://cutt.ly/youfy' target='_blank'>
              <input type='button' value='Get it now' className='btn' />
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
}

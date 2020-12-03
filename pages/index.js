import Head from 'next/head';
import FAQs from '../components/FAQs';
import IndexHeader from '../components/IndexHeader';
import SectionIntro from '../components/SectionIntro';
import Testimonies from '../components/Testimonies';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Reynaldo Portfolio Website</title>
      </Head>

      <main>
        <IndexHeader />
        <secion id="content">
          <div className="section mb-0 p-0">
            <SectionIntro />
            <Testimonies />
            <FAQs />
          </div>
        </secion>
        {/* back to top */}
        <div
          id="gotoTop"
          className="icon-double-angle-up bg-white text-dark rounded-circle shadow"
        ></div>
        {/* back to top */}
        <script src="/jquery.js"></script>
        <script src="/functions.js"></script>
        <script src="/plugins.min.js"></script>
      </main>
    </>
  );
}

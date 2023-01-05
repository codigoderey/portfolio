import React from "react";
import Head from "next/head";
import axios from "axios";
import baseURL from "../../utils/baseURL";

const index = ({ blogs }) => {
  console.log(blogs);
  return (
    <>
      <Head>
        <title>Web Development Blog by Reynaldo</title>
      </Head>
      <main>
        <section id='content'>
          <div className='content-wrap pb-0'>
            <div className='mw-md container'>
              <h2
                className='display-4 font-weight-light'
                style={{ lineHeight: "1.5" }}>
                Welcome to my{" "}
                <span className='gradient-text gradient-horizon'>
                  Web Development
                </span>{" "}
                <span className='gradient-text gradient-horizon'>Blog</span>
              </h2>
            </div>
            <div className='clear'></div>
            <div className='container mw-md mt-5'>
              {blogs.map((b) => (
                <>
                  <a href={`/blog/${b.slug}`}>
                    <h3 className='lead font-weight-bolder text-uppercase text-orangered'>
                      {b.title}
                    </h3>
                  </a>
                </>
              ))}
            </div>
          </div>
        </section>
        <script src='/jquery.js'></script>
        <script src='/functions.js'></script>
        <script src='/plugins.min.js'></script>
      </main>
    </>
  );
};

index.getInitialProps = async () => {
  const url = `${baseURL}`;
  const response = await axios.get(url);
  return { blogs: response.data.tutorials };
};

export default index;

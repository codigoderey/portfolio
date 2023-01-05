import React, { useEffect } from "react";
import Head from "next/head";
import baseURL from "../../utils/baseURL";
import axios from "axios";

const BlogDetails = ({ blog }) => {
  useEffect(() => {
    const br = document.querySelectorAll("br");
    br.forEach((b) => {
      b.remove();
    });
    const pElement = Array.from(document.querySelectorAll("p"));
    pElement.filter((p) => p.textContent != "");
  }, []);

  return (
    <>
      <Head>
        <title>{`${blog.title} | Reynaldo's Website`}</title>
      </Head>
      <main>
        <section id='content'>
          <div className='content-wrap pt-1 pb-0'>
            <div className='mw-md container'>
              <h2
                className='mb-0 display-5 font-weight-light'
                style={{ lineHeight: "1.5" }}>
                <span className='gradient-text gradient-horizon'>
                  {blog.title}
                </span>{" "}
              </h2>
              <p>Autor: {blog.postedBy.name}</p>
              <div dangerouslySetInnerHTML={{ __html: blog.content }} />
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

BlogDetails.getInitialProps = async ({ query }) => {
  const { slug } = query;
  const url = `${baseURL}`;
  const { data } = await axios.get(url);
  console.log(data);
  const blog = data.tutorials.filter((b) => b.slug === slug);
  return { blog: blog[0] };
};

export default BlogDetails;

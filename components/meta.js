import Head from "next/head";

const Meta = (props) => (
  <Head>
    <title>{props.title} › Consume:Design › Todd Heckeler</title>
    <meta
      name="description"
      content="Experienced Freelance Graphic Web Designer with a demonstrated history of working in the graphic design industry. Skilled in PHP, jQuery, JavaScript, CSS, HTML, Sass, Responsive Web Design, Web Design, Website Administration, Page Layout, and Cross-browser Compatibility. Strong arts and design professional with a Bachelor of Arts focused in Visual Communication & Design from Kent State University."
    />
    <meta property="og:type" content="website" />
    <meta
      name="og:title"
      property="og:title"
      content="{props.title} › Consume:Design › Todd Heckeler"
    />
    <meta
      name="og:description"
      property="og:description"
      content="Experienced Freelance Graphic Web Designer with a demonstrated history of working in the graphic design industry. Skilled in PHP, jQuery, JavaScript, CSS, HTML, Sass, Responsive Web Design, Web Design, Website Administration, Page Layout, and Cross-browser Compatibility. Strong arts and design professional with a Bachelor of Arts focused in Visual Communication & Design from Kent State University."
    />
    <meta property="og:site_name" content="Consume:Design" />
    <meta property="og:url" content="https:consumedesign.com" />
    <link rel="icon" type="image/png" href="/favicon.ico" />
    <link rel="apple-touch-icon" href="/favicon.ico" />
    <script type="text/javascript" src="/plugins/jquery-3.6.0.min.js"></script>
    <script
      type="text/javascript"
      src="/plugins/jquery.fancybox.min.js"
    ></script>
    <link
      rel="stylesheet"
      href="/plugins/jquery.fancybox.min.css"
      type="text/css"
      media=""
    />
    <link
      rel="preload"
      href="/fonts/GreatVibes-Regular.ttf"
      as="font"
      crossOrigin=""
    />
  </Head>
);
export default Meta;

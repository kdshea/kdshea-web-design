const Services = () => {
  return (
    <section className="services-wrapper">
      <div id="services" className="container">
        <header>
          <h2>Is your web presence working for you?</h2>
          <p>Need a new website?</p>
          <p>Want a better one? </p>
          <p>Need a full stack web application?</p>
          <p className="services-text">If someone needs what you provide, will your website draw them in? Will it be accessible from their phone? A responsive & accessible web presence is no longer merely a  &#39;nice to have&#39; - it is essential to any business. I offer individuals and small businesses a chance to be seen on the web. Whether that be creating a website for you from the ground up, or updating an existing presence for the mobile age.</p>
        </header>
        <div className="services-flex">
          <div className="individual-service">
            <div className="service-icon">
              <i className="fas fa-search"></i>
            </div>
            <div className="service-text">
              <h4>Website Audit & Branding</h4>
              <p>Revamp your web presence and create a strong brand identity that resonates with your target audience. Package includes custom logo design, a branding style guide with your logo, favicon, alternate logo, color palette, fonts, and brand elements, and a branding strategy session to align your online presence with your business goals</p>
            </div>
          </div>
          <div className="individual-service">
            <div className="service-icon">
              <i className="fas fa-code"></i>
            </div>
            <div className="service-text">
              <h4>Static Websites</h4>
              <p>Custom website designs that captivate visitors. Package includes mobile and tablet optimization, professional copywriting, integration of Google Analytics for valuable insights, seamless domain transfer, social media integration, business email setup, desktop optimization, initial SEO setup, and essential website legal pages
              </p>
            </div>
          </div>
          <div className="individual-service">
            <div className="service-icon">
              <i className="fas fa-cogs"></i>
            </div>
            <div className="service-text">
              <h4>Interactive Websites</h4>
              <p>All the static site services with dynamic functionality tailored to your needs. Enhancements include customer authorization and login systems, eCommerce capabilities, and interactive features that promote user engagement and drive sales </p>
            </div>
          </div>
          <div className="individual-service">
            <div className="service-icon">
              <i className="fas fa-cube"></i>
            </div>
            <div className="service-text">
              <h4>Content Management Sites</h4>
              <p>Managing your CMS site with Wix, WordPress, or Squarespace shouldn&#39;t be a hassle. I will update your existing CMS site, build custom features to enhance functionality, and guide you through easy-to-use tools for content updates</p>
            </div>
          </div>
          <div className="individual-service">
            <div className="service-icon">
              <i className="fas fa-mobile-alt"></i>
            </div>
            <div className="service-text">
              <h4>Web & Mobile App Development</h4>
              <p>Realize your vision for a powerful web or mobile app. Whether you want to transform your existing website into a seamless app experience or create something entirely new, I&#39;ll work to understand your requirements and deliver cutting-edge solutions</p>
            </div>
          </div>
          <div className="individual-service">
            <div className="service-icon">
              <i className="fas fa-tools"></i>
            </div>
            <div className="service-text">
              <h4>Ongoing Maintenance & Support</h4>
              <p>Responsive customer support to answer your questions and provide guidance, bug fixes and troubleshooting to address any issues, content updates and changes to keep your website fresh and relevant</p>
            </div>
          </div>
        </div>
      </div>
      <div className="image-section palm-4"></div>
    </section>
  )
}

export default Services
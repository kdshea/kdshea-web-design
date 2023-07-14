const Footer = () => {
  return (
    <footer>
      <div className="image-section palm-5">
        <div className="footer-flex footer">
          <div className="feedback">
            <div>
              <span>I&#39;m always looking to improve and grow. Any insight, criticism, or feedback is appreciated  </span>
            </div>
            <div>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSdWQ9kgzjh1qn6HU3leWeOZNJ_pIoEx4DNXH517LKn3pKMnXQ/viewform" target="_blank" rel="noopener noreferrer">
                <i className="fa-sharp fa-solid fa-comments"></i>
                <span className="link-label"> Anonymous Feedback</span>
              </a>
            </div>
          </div>
          <div className="copyright">
            <p>© 2023 kdshea.com. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
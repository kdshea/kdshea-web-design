import React, { useState, useEffect } from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component'
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer'
import MapIcon from '@material-ui/icons/Map'
import BuildIcon from '@material-ui/icons/Build'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'

import API_URL from '../config.js'
import axios from 'axios'


const Consultation = () => {

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    currentWebsite: '',
    helpWith: '',
    projectDetails: '',
    howDidYouHear: '',
  })


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    console.log('formData >>>>>', formData)
  }


  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const { data } = await axios.post(`${API_URL}/submit-form`, formData)
      console.log('Form submitted successfully', data)
      setFormData({
        name: '',
        company: '',
        email: '',
        currentWebsite: '',
        helpWith: '',
        projectDetails: '',
        howDidYouHear: '',
      })
    } catch (error) {
      console.error('Error submitting form:', error)
    }
  } 

  return (
    <section className="consultation-wrapper">
      <div id="consultation" className="container">
        <div>
          <header>
            <h2>Free Consultation</h2>
            <p>I dedicate myself to presenting my clients with completed projects that not only meet, but exceed, their initial vision. Knowing what to expect when we work together is critical - here is how I deliver success:</p>
          </header>
          <VerticalTimeline>
            <VerticalTimelineElement
              contentStyle={{ color: '#172C3C', borderTop: '2px solid #172C3C' }}
              iconStyle={{ background: '#172C3C', color: '#fff' }}
              icon={<QuestionAnswerIcon/>}
            >
              <h3 className="vertical-timeline-element-title">Consultation</h3>
              <p>Fill out the consultation form to give me an idea of your vision and the scope of the project. From there, we&#39;ll have a conversation to lay the foundations and go over your options</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              contentStyle={{ color: '#172C3C', borderTop: '2px solid #B97853' }}
              iconStyle={{ background: '#B97853', color: '#fff' }}
              icon={<MapIcon />}
            >
              <h3 className="vertical-timeline-element-title">Proposal</h3>
              <p>I&#39;ll put together a detailed project proposal and a plan of action. I aim to create sites that are aligned with you and your business goals, and speak to your dream customers and guide them to you</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              contentStyle={{ color: '#172C3C', borderTop: '2px solid #CCD6A5' }}
              iconStyle={{ background: '#CCD6A5', color: '#fff' }}
              icon={<BuildIcon />}
            >
              <h3 className="vertical-timeline-element-title">Creation</h3>
              <p>I&#39;ll design a visual mock up of your project and we&#39;ll go over it together to make sure it fits your vision. After that, it&#39;s time to build. You&#39;ll receive regular updates regarding the project status throughout creation and testing, along with previews and revisions</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              contentStyle={{ color: '#172C3C', borderTop: '2px solid #689717' }}
              iconStyle={{ background: '#689717', color: '#fff' }}
              icon={<ThumbUpAltIcon />}
            >
              <h3 className="vertical-timeline-element-title">Launch & Support</h3>
              <p>After fine-tuning the look, performance, and responsiveness, we&#39;ll launch and transfer to your domain name. With ongoing support, you&#39;ll never feel alone in managing your project. I&#39;m available to answer your questions and address any issues that may arise</p>
            </VerticalTimelineElement>
            
          </VerticalTimeline>
        </div>
        <div className="form-flex">
          <header>
            <h2>Say 👋 Hi!</h2>
            <p>I&#39;m excited to hear about your project and design challenges. Please share as much info as possible so we can get the most out of our first catch-up. If you prefer, you can schedule a 15-minute chat with me directly. Together, we&#39;ll create an amazing website tailored to your needs.</p>
            <div className="links">
              <a href="https://calendly.com/kdshea/15-minute-chat" target="_blank" rel="noopener noreferrer">
                <i className="fa-solid fa-video"></i>
                <span className="call"> Schedule a Call</span>
              </a>
            </div>
          </header>
          <div>          
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="company">Company</label>
                <input type="text" className="form-control" id="company" name="company" value={formData.company} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="current-website">Current Website</label>
                <input type="text" className="form-control" id="current-website" name="currentWebsite"  value={formData.currentWebsite} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="help-with">What do you need help with?</label>
                <select className="form-control" id="help-with" name="helpWith" value={formData.helpWith} onChange={handleChange} required>
                  <option value="" disabled>Select an option</option>
                  <option value="Brand Identity">Brand Identity</option>
                  <option value="Website Audit">Website Audit</option>
                  <option value="Content Management Site">Content Management Site</option>
                  <option value="Website Desing & Development">Website Design & Development</option>
                  <option value="App Development">App Development</option>
                  <option value="I'm not suret">I&#39;m not sure</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="project-details">Describe the project or your business goals</label>
                <textarea className="form-control" id="project-details" name="projectDetails" placeholder="Give me an idea of what you're looking for" value={formData.projectDetails} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="how-did-you-hear">How did you hear about me?</label>
                <select className="form-control" id="how-did-you-hear" name="howDidYouHear" value={formData.howDidYouHear} onChange={handleChange}>
                  <option value="" disabled>Select an option</option>
                  <option value="Referral">Referral</option>
                  <option value="Google">Google</option>
                  <option value="LinkedIn">LinkedIn</option>
                  <option value="Social Media">Social Media</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="btn-flex">
                <button type="submit" className="btn">Submit <i className="fa-solid fa-paper-plane"></i></button>
              </div>

            </form>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Consultation

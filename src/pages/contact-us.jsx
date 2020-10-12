import React from "react"
import DefaultLayout from "../layouts/DefaultLayout";

export default function Home() {
  return (
    <DefaultLayout>
    <div className="banner">
        <div className="banner__text">
          <h2 className="banner__title">Contact us</h2>
          <div className="banner__subtitle">
            <p>Feel free to contact us for all inquiries <br />
            we will get back to you as soon as  possible</p>
          </div>
        </div>
    </div>
      <div className="contact-us container">
        <p className="contact-us__text">
            For enquiries please send us an email at <a href="mailto:Info@devcareer.io">Info@devcareer.io</a> <br />
            You can also send us a DM via our social media  <br />
            channels and you will be responded to
        </p>
    </div>
      
    </DefaultLayout>
  )
}

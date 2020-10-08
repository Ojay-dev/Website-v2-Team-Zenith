import React from "react"
import DefaultLayout from "../layouts/DefaultLayout"

export default function Home() {
  return (
    <DefaultLayout>
      <div className="home">
        <section className="home__hero">
          <div className="contact container">
            <h2>Contact us</h2>
            <p>
              Feel free to contact us for all inquiries <br /> we will get back
              to you as soon as possible
            </p>
          </div>
        </section>
        <section className="home__exists">
          <div className="container">
            <p>
              For enquiries please send us a email{" "}
              <span> Info@devcareer.io</span> <br /> You can also send us DM via
              our social media <br /> channels and you will be responded to
            </p>
          </div>
        </section>
      </div>
    </DefaultLayout>
  )
}

import React from "react"
import DefaultLayout from "../layouts/DefaultLayout"
import Hero from "../components/Hero"
import { Link } from "gatsby"

export default function Home() {
  return (
    <DefaultLayout>
      <Hero title="About Us" />
      <div className="container aboutUs">
        <div className="row d-flex flex-column-reverse flex-md-row">
          <div className="col-md-6  aboutUs__info">
            <h3 className="aboutUs__header">
              Why you should do your <span className="aboutUs--span">CSR </span>
              with us
            </h3>
            <p className="aboutUs__p">
              DevCareer is a Non-Profit organization that's focused on
              supporting upcoming developers with resources to excel into world
              class
            </p>
            <p className="aboutUs__p">
              Underdeveloped African countries are lacking when it comes to
              adequate resources to dive into Tech. DevCareer is focused on
              supporting these group of people.
            </p>
            <Link className="button d-inline-flex aboutUs__button" to="/">
              View Report
            </Link>
          </div>
          <div className="col-md-6">
            <img
              className="aboutUs__image"
              alt="DevCareer"
              src="https://res.cloudinary.com/broma/image/upload/v1601367977/devcareer/IMG_6292_fen4mu.svg"
            />
          </div>
        </div>
      </div>
    </DefaultLayout>
  )
}

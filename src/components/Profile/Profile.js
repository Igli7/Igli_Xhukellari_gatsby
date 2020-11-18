import React from "react"
import profileStyles from "./profile.module.scss"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Profile = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulProfile {
        name
        dateOfBirth
        nationality
        location
        phoneNumber
        email
        aboutMe {
          aboutMe
        }
        profilePicture {
          fluid(resizingBehavior: NO_CHANGE) {
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
    }
  `)

  const {
    name,
    dateOfBirth,
    nationality,
    location,
    phoneNumber,
    email,
    aboutMe,
    profilePicture,
  } = data.contentfulProfile

  return (
    <div className={profileStyles.profile} id="profile">
      <h2>Profile</h2>
      <div className={profileStyles.profileWrapper}>
        <div className={profileStyles.profileBox}>
          <div className={profileStyles.profilePicture}>
            <Img
              fluid={profilePicture.fluid}
              className={profileStyles.picture}
            ></Img>
          </div>
          <ul>
            <li>
              <strong>Name:</strong> {name}
            </li>
            <li>
              <strong>Date of Birth:</strong> {dateOfBirth}
            </li>
            <li>
              <strong>Nationality:</strong> {nationality}
            </li>
            <li>
              <strong>Location:</strong> {location}
            </li>
            <li>
              <strong>Phone Number:</strong> {phoneNumber}
            </li>
            <li>
              <strong>Email:</strong> {email}
            </li>
          </ul>
        </div>

        <div className={profileStyles.aboutMe}>
          <h3>About Me</h3>
          <p>{aboutMe.aboutMe}</p>
        </div>
      </div>
    </div>
  )
}

export default Profile

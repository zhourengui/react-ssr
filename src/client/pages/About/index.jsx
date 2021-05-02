import React, { useState } from "react"
import axios from "axios"
import "./index.css"
import { useDispatch, useSelector } from "react-redux"
export const getData = () =>
  new Promise((resolve) =>
    axios.get("http://localhost:8888/mock").then((res) => resolve(res.data))
  )

const About = () => {
  const userinfo = useSelector((state) => state)
  const dispatch = useDispatch()
  useState(() => {
    ;(async () => {
      const res = await getData()
      if (userinfo.name === "zhourengui" && typeof window !== "undefined") {
        setTimeout(() => {
          dispatch({
            type: "change",
            payload: res,
          })
        }, 2000)
      }
    })()
  }, [])
  return (
    <div>
      <h1 className="about">
        About {userinfo.name} - {userinfo.location}
      </h1>
    </div>
  )
}

export default About

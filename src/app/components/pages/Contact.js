import React from "react";
export const Contact = (props) => {
  return (
    <div className="home-main">
      <div>
        <form action="">
          <ul>
            <li> <label htmlFor="name">Name:</label></li>
            <li> <input name="name" type="text"/></li>
            <li> <label htmlFor="email">Email:</label></li>
            <li> <input name="email" type="email"/></li>
            <li> <label htmlFor="phone">Phone:</label></li>
            <li> <input name="phone" type="phone"/></li>
            <li> <label htmlFor="msg">Message</label></li>
            <li> <textarea name="msg" id="" cols="30" rows="10">
              </textarea></li>
          </ul>
        </form>
      </div>
    </div>
  )
}

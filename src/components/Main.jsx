import React from "react";
import { Spring } from "react-spring/renderprops";
export default function Main() {
  return (
    <div className="main-section" id="main">
      <Spring
        from={{ opacity: 0, marginTop: 0 }}
        to={{ opacity: 1, marginTop: 100 }}
        config={{ delay: 1000, duration: 1000 }}
      >
        {(props) => (
          <div style={props}>
            <h1>Welcome!</h1>
          </div>
        )}
      </Spring>
    </div>
  );
}

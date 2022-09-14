import React from "react";
import { useSelector } from "react-redux";
import "./Loading.css";

function Loading() {
  const { isLoading } = useSelector((state) => state.LoadingReducer);
  return (
    <>
      {isLoading ? (
        <div className="load-wrapp">
          <div className="load-height">
            <div className="load-5">
              <div className="ring-2">
                <div className="ball-holder">
                  <div className="ball" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Loading;

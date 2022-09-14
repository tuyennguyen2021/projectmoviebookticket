import React from "react";
import { Tabs } from "antd";
import styles from "./TheaterListMovie.module.css";
import CumRap from "./CumRap";

const { TabPane } = Tabs;

function TheaterListMovie(props) {
  const { heThongRapChieu } = props;

  const renderHeThongRap = () => {
    return heThongRapChieu?.map((heThongRap, index) => {
      return (
        <TabPane tab={<img src={heThongRap.logo} width={65} />} key={index}>
          <div className="overflow-y-scroll h-[600px]">
            <CumRap listCumRap={heThongRap.lstCumRap} />
          </div>
        </TabPane>
      );
    });
  };
  return (
    <div className={styles.homeMenuscss}>
      <div className={`pr-0 homeMenuscss`}>
        <Tabs defaultActiveKey="1" centered>
          {renderHeThongRap()}
        </Tabs>
      </div>
    </div>
  );
}

export default TheaterListMovie;

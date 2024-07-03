import React from "react";
import { Col, Row } from "react-bootstrap";

import images from "../assets/images";
import clsx from "clsx";

import "./AboutUsArea.css";

export default function AboutUsArea() {
  return (
    <Row id="about-us" className={clsx("about-us-container")}>
      <Col md={6}>
        <div className={clsx("title-container")}>
          <span>
            We Are <span className={clsx("company-name-highlight")}>Star</span>
          </span>
        </div>
        <div className={clsx("company-description")}>
          ashjk sjdbka sjadbh askas sjd akshjs shsak a sjdk ajsa ajsj alsldjsa
          aldks ajsdj ajsdk askja j saakkah as a kjsj djs slaj s hd al dhjiis
          alksj sjjhal aikajjd ahdhs kkjsdh a s shdhuw hdasdj asjdhuw dsjilash d
          aknd a ljda skdja iwh daldn ald masjshln jndhf h h j uqhj nq hqkjwnd
          kj nja djsbk hkjh udkj hkfbeuf hj kj jk hldakj hl kj jdbka djakhdl hdl
          ad hal jjadkl db a lja hdio; shjdjoi lka oi jlkdaslj liad jkasln wol
          hojl d adjiwj d a.dj i;owdj;iadsn ldl adnjka shdlahdabk ah dqilwn
          dlapow; elbql lsdkj anl ashjk sjdbka sjadbh askas sjd akshjs shsak a
          sjdk ajsa ajsj alsldjsa aldks ajsdj ajsdk askja j saakkah as a kjsj
          djs slaj s hd al dhjiis alksj sjjhal aikajjd ahdhs kkjsdh a s shdhuw
          hdasdj asjdhuw dsjilash d aknd a ljda skdja iwh daldn ald masjshln
          jndhf h h j uqhj nq hqkjwnd kj nja djsbk hkjh udkj hkfbeuf hj kj jk
          hldakj hl kj jdbka djakhdl hdl ad hal jjadkl db a lja hdio; shjdjoi
          lka oi jlkdaslj liad jkasln wol hojl d adjiwj d a.dj i;owdj;iadsn ldl
          adnjka shdlahdabk ah dqilwn dlapow; elbql lsdkj anlashjk sjdbka sjadbh
          askas sjd akshjs shsak a sjdk ajsa ajsj alsldjsa aldks ajsdj ajsdk
          askja j saakkah as a kjsj djs slaj s hd al dhjiis alksj sjjhal aikajjd
          ahdhs kkjsdh a s shdhuw hdasdj asjdhuw dsjilash d aknd a ljda skdja
          iwh daldn ald masjshln jndhf h h j uqhj nq hqkjwnd kj nja djsbk hkjh
          udkj hkfbeuf hj kj jk hldakj hl kj jdbka djakhdl hdl ad hal jjadkl db
          a lja hdio; shjdjoi lka oi jlkdaslj liad jkasln wol hojl d adjiwj d
          a.dj i;owdj;iadsn ldl adnjka shdlahdabk ah dqilwn dlapow; elbql lsdkj
          anlashjk sjdbka sjadbh askas sjd akshjs shsak a sjdk ajsa ajsj
          alsldjsa aldks ajsdj ajsdk askja j saakkah as a kjsj djs slaj s hd al
          dhjiis alksj sjjhal aikajjd ahdhs kkjsdh a s shdhuw hdasdj asjdhuw
          dsjilash d aknd a ljda skdja iwh daldn ald masjshln jndhf h h j uqhj
          nq hqkjwnd kj nja djsbk hkjh udkj hkfbeuf hj kj jk hldakj hl kj jdbka
          djakhdl hdl ad hal jjadkl db a lja hdio; shjdjoi lka oi jlkdaslj liad
          jkasln wol hojl d adjiwj d a.dj i;owdj;iadsn ldl adnjka shdlahdabk ah
          dqilwn dlapow; elbql lsdkj anlashjk sjdbka sjadbh askas sjd akshjs
          shsak a sjdk ajsa ajsj alsldjsa aldks ajsdj ajsdk askja j saakkah as a
          kjsj djs slaj s hd al dhjiis alksj sjjhal aikajjd ahdhs kkjsdh a s
          shdhuw hdasdj asjdhuw dsjilash d aknd a ljda skdja iwh daldn ald
          masjshln jndhf h h j uqhj nq hqkjwnd kj nja djsbk hkjh udkj hkfbeuf hj
          kj jk hldakj hl kj jdbka djakhdl hdl ad hal jjadkl db a lja hdio;
          shjdjoi lka oi jlkdaslj liad jkasln wol hojl d adjiwj d a.dj
          i;owdj;iadsn ldl adnjka shdlahdabk ah dqilwn dlapow; elbql lsdkj anl
        </div>
      </Col>
      <Col md={6}>
        <img className={clsx("company-image")} src={images.photo4} alt="" />
      </Col>
    </Row>
  );
}

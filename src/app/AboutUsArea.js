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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          aliquet fringilla mi sit amet egestas. Orci varius natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Phasellus
          rutrum odio augue, ac consequat dolor euismod quis. In venenatis
          vehicula tempor. Phasellus porta dapibus velit, vitae suscipit turpis
          aliquet et. Donec nec nisl vel ante dignissim molestie. Aenean orci
          nunc, sodales vitae dolor vitae, pharetra suscipit nunc. Integer at
          augue et urna pharetra vulputate eu sed libero. Sed et ligula ut nulla
          consequat tristique. Nulla neque ligula, ornare sit amet leo vel,
          ornare fringilla metus. Phasellus ut volutpat metus. Sed eu justo a
          quam bibendum porttitor eu eget dui. In nisl nunc, feugiat quis sem
          ac, pulvinar suscipit tellus. Ut molestie aliquam massa et vehicula.
          Phasellus varius purus et augue bibendum, vitae dictum purus congue.
          Curabitur at urna arcu. Nullam imperdiet nibh id pharetra hendrerit.
          Nam dictum felis sit amet dui dignissim condimentum. In posuere cursus
          ipsum, non fermentum nibh lobortis imperdiet. Nam vel vestibulum
          lorem. Duis vestibulum leo purus, at pharetra elit vehicula ac.
          Integer volutpat arcu dolor, eget venenatis mi dignissim vitae. Ut
          viverra leo at nisl mattis, a congue diam dignissim. Phasellus at
          condimentum quam, vel viverra augue. Praesent consequat arcu quis
          justo feugiat commodo. Nunc gravida volutpat dolor. Suspendisse augue
          mi, dignissim ac ligula eget, aliquam rutrum massa. Donec nec lectus
          convallis, feugiat magna eget, molestie lorem. Praesent posuere vitae
          arcu ut fringilla. Phasellus vel eleifend arcu. Praesent volutpat eros
          eget justo dignissim hendrerit. Sed auctor accumsan tortor, et
          facilisis neque aliquet a. Quisque eu mauris risus. Quisque hendrerit
          est est, ut posuere mi pretium sit amet. Nulla lacus tellus, auctor in
          magna quis, egestas auctor odio. Suspendisse quis turpis nec felis
          dignissim pellentesque. Aenean a auctor ipsum, at varius ligula. Fusce
          tincidunt metus nunc, quis accumsan eros malesuada eu. Interdum et
          malesuada fames ac ante ipsum primis in faucibus. Donec semper
          hendrerit massa id placerat. Nullam aliquet ligula nec sapien
          fermentum pulvinar. Vestibulum ligula ex, facilisis a sagittis in,
          feugiat vel purus. In eget efficitur lectus. Sed maximus nisl non
          euismod vestibulum. Aliquam massa metus, finibus quis rhoncus quis,
          porttitor et odio. Proin elementum tortor ut risus pharetra euismod.
          Suspendisse aliquam congue varius. Nunc pulvinar nulla dolor, pretium
          consectetur odio vestibulum eget. Donec tincidunt libero justo, vel
          imperdiet dui gravida id. Sed sit amet tristique ipsum, sit amet
          malesuada purus. In imperdiet, dui ac tincidunt lobortis, libero leo
          vulputate nisl, eget porttitor ante massa a dolor. Vestibulum pharetra
          rutrum ante id consectetur. Phasellus justo mi, vestibulum et dui id,
          posuere laoreet libero. Phasellus ultricies est elit, sit amet tempor
          leo hendrerit eget. Sed condimentum lectus massa, ut ullamcorper neque
          congue vitae. Cras id consectetur tortor. Vestibulum tincidunt
          tincidunt ultrices. Vestibulum venenatis hendrerit ligula, id
          scelerisque sapien aliquam ut. Nunc et consectetur magna. Ut vel eros
          in dui aliquet ornare. Nam dolor lacus, euismod eget porta vitae,
          iaculis sed elit. Ut ut ante dignissim, cursus felis ut, finibus
          libero. Quisque vestibulum urna diam, molestie laoreet dolor congue a.
          Sed et ullamcorper leo. In tempus fringilla fermentum. Etiam rhoncus,
          quam sit amet tincidunt fermentum, diam erat sollicitudin augue, quis
          auctor eros libero sed lectus. Etiam pellentesque lobortis venenatis.
          Aliquam eget massa ac lectus pretium lacinia. Integer in libero vitae
          ipsum gravida tincidunt sit amet sed mi. Nulla facilisi. Donec in
          purus non nulla tempor feugiat. Nullam pellentesque sem id augue
          efficitur, quis dapibus arcu ultricies.
        </div>
      </Col>
      <Col md={6}>
        <img className={clsx("company-image")} src={images.photo4} alt="" />
      </Col>
    </Row>
  );
}

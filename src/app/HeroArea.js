import React from "react";
import clsx from "clsx";

import images from "../assets/images";

import "./HeroArea.css";

const styleClasses = Object.freeze({
  heroAreaContainer: "hero-area-container",
  heroArea: "hero-area",
  imageSmall: "img-small",
  imageBig: "img-big",
  imageLarge: "img-large",
  left: "left",
  right: "right",
  textContentContainer: "text-content-container",
  textBackground: "text-bg",
  contentArea: "content-area",
  title: "title",
  text: "text",
});

export default function HeroArea() {
  return (
    <div id="home" className={clsx(styleClasses.heroAreaContainer)}>
      <div className={clsx(styleClasses.heroArea)}>
        <img
          className={clsx(styleClasses.imageLarge)}
          src={images.photo4}
          alt=""
        />

        <img
          className={clsx(styleClasses.imageBig, styleClasses.left)}
          src={images.image9}
          alt=""
        />

        <img
          className={clsx(styleClasses.imageBig, styleClasses.right)}
          src={images.image10}
          alt=""
        />

        <img
          className={clsx(styleClasses.imageSmall, styleClasses.left)}
          src={images.image3}
          alt=""
        />

        <img
          className={clsx(styleClasses.imageSmall, styleClasses.right)}
          src={images.image6}
          alt=""
        />

        <div className={clsx(styleClasses.textContentContainer)}>
          <div className={clsx(styleClasses.textBackground)}></div>
          <div className={clsx(styleClasses.contentArea)}>
            <div className={clsx(styleClasses.title)}>
              <span>Welcome to Star</span>
            </div>
            <div className={clsx(styleClasses.text)}>
              abcha bcksa hgukja svkdasvdk uyisahvd uyjkdas bdkjasbdj kbask
              jdjbsja kuhfbjd hfjkd sghfjsd guk bdyifdsj bdsukf hbavjd ufikdab
              vjfuihdsb jf uiuehvf iujshd vufdjsbv fuidhsv fusdbfu gsdgfyusd
              ifsyuif hkudshfsdju abchabcksa hgukja svkdasvdk uyisahv duyjkdas
              bdkjasbdj kbaskjdjbsja kuhfbjd hfjkdsghfjsd guk bdyifdsj bdsukf
              hbavjd ufikdab vjfuihdsb jf uiuehvf iujshd vufdjsbv fuidhs vfusdbf
              ugsdgfyu sdifsyuif hkudshfsdju abchabcksa hgukja svkdasvdk uyisahv
              duyjkdas bdkjasbdj kbaskjdjbsja kuhfbjd hfjkds ghfjsd guk bdyifdsj
              bdsukf hbavjd ufikdab vjfuihdsb jf uiuehvf iujshd vufdjsbv fuid
              hsvf usdbfu gsdgfyusd ifsyuif hkudsh fsdju abchabcksa hgukja
              svkdasvdk uyisahv duyjkdas bdkjasbdj kbaskj djbsja kuhfbjd hfjk
              dsghf jsd guk bdyifdsj bdsukf hbavjd ufikda bvjfuih dsb jf uiuehvf
              iujshd vufdjsbv fuid hsvfu sdbfu gsdgf yusdif syuif hkudshfsdju
              abchabcksa hgukja svkdasvdk uyisahvd uyjkdas bdkjasbdj kbas kjdj
              bsja kuhfbjd hfjkds ghfjsd guk bdyifdsj bdsukf hbavjd ufi kdabvjf
              uihdsb jf uiuehvf iujshd vufdjsbv fuidh svfus dbfugsd gfyus difsy
              uif hkud shfsdju abch abcksa hgukja svkdasvdk uyi sah vduyjk das
              bdkjasbdj kbas kjdj bsja kuhfbjd hfjkds ghfjsd guk bdyifdsj bdsukf
              hbavjd ufikd abvjf uihdsb jf uiuehvf iujshd vufdjsbv fui dhsvfu
              sdb fugsdg fyusdifsyuif hk udshf sdju abchabcksa hgukja svkd asvdk
              uyisah vduyj kdas bdkjasbdj kbask jdjb sja kuhfbjd hfj kdsgh fjsd
              guk bdyifdsj bdsukf hbavjd ufikd abvj fuih dsb jf uiuehvf iujshd
              vufdjsbv fuidh svfus dbfugs dgfyusd ifsyuif hkudshf sdju abchab
              cksa hgukja svkda svdk uyisahvd uyjkdas bdkjasbdj kbaskjd jbsja
              kuhfbjd hfjkdsg hfjsd guk bdyifdsj bdsukf hbavjd ufikdabv jfuih
              dsb jf uiuehvf iujshd vufdjsbv fuidhs vfusdbfugsd gfyusdi fsyuif
              hkuds hfsdju abcha bcksa hgukja svkdasvdk uyisa hvduyj kdas bdk
              jasbdj kbas kjdj bsja kuhfbjd hfjkd sghfjsd guk bdyi fdsj bdsukf
              hbavjd ufikdabvjfuihdsb jf uiuehvf iujshd vufdjsbv fuidhs vfus
              dbfugsdgfyu sdifsyuif hkuds hfsdju abcha bcksa hgukja svkd asvdk
              uyisah vduyj kdas bdkjasbdj kbas kjdjbsja kuhfbjd hfjkd sghfjsd
              guk bdyi fdsj bdsukf hbavjd ufik dabv jfui hdsb jf uiuehvf iujshd
              vufdjsbv fuidh svfusdb fugsdgfy usdif syuif hkuds hfsdju abch
              abcksa hgukja svkdasvdk uyisahvduyjkdas bdkjasbdj kbaskjdjbsja
              kuhfbjd hfjkd sghfjsd guk bdyifdsj bdsukf hbavjd ufikd ab vjfuih
              dsb jf uiuehvf iujshd vufdjsbv fuidhs vfusd bfugsd gfyu sdifsyuif
              hkud shfsdju abch abcksa hgukja svk da svdk uyis ahvd uyjk das
              bdkjasbdj kba skjdj bsja kuhfbjd hfjkdsghfjsd guk bdyifdsj bdsukf
              hbavjd ufikd abvjf uihdsb jf uiuehvf iujshd vufdjsbv fuidhsvfu
              sdbfug sdgfyusdif syuif hkudshfsdju abc habc ksa hgukja svkdasvdk
              uyisa hvduy jkdas bdkjasbdj kba skjd jbsja kuhfbjd hfjkds ghfj sd
              guk bdyifdsj bdsukf hbavjd uf ikdab vjfuih dsb jf uiuehvf iujshd
              vufdjsbv fuidhs vfusdbfu gsdgfyus difsyuif hkudshfsdju abchabcksa
              hgukja svkdasvdk uyisahvd uyjkdas bdkjasbdj kba skjdj bsja kuhfbjd
              hfjkd sghfjsd guk bdyifdsj bdsukf hbavjd ufik dabvjf uihdsb jf
              uiuehvf iujshd vufdjsbv fuidhsvf usdbf ugsdgfy usdif syuif hkuds
              hfsdju abch abcksa hgukja svkdasvdk uyisahv duyj kdas bdkj asbdj
              kbaskjd jbsja kuhfbjd hfjkdsg hfjsd guk bdyif dsj bdsukf hbavjd
              ufikd abvjfui hdsb jf uiuehvf iujshd vufdjsbv fuidhs vfusd bfugsd
              gfyus difsy uif hkudsh fsdju
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

'use client'
import Image from "next/image";
import {useState, useRef, act, useEffect} from 'react';
import ReactDOM from 'react-dom';
import {bandsS10,faceDataS10,faceDataHS10,bandsHS10,faceDataSE} from './bandChoices'
import ImageDiv from './imageDiv'
import { createRoot } from "react-dom/client";

export default function Home() {
  const [bands, setbandset] = useState(bandsS10);
  const [faceData, setfacedata] = useState(faceDataS10);
  const [isAnimated, setIsAnimating] = useState(false);
  const [isSzAnimated, setIsSzAnimating] = useState(false);
  const [selected, setSelected] = useState(0);
  const [bandNo, setBandNo] = useState(36);
  const [caseNo, setCaseNo] = useState(2);
  const [activeCollectionName, setAtiveCollectionName] = useState("Apple Watch Series 10");
  const [activeCollectionNo, setAtiveCollectionNo] = useState(0);
  const [szNo, setSzNo] = useState(1);
  const [bandname, setBandName] = useState("Black Solo Loop");
  const [casename, setCaseName] = useState("Jet Black Aluminum Case");
  const [sizename, setSizeName] = useState("46mm");
  const [faceNo, setFaceNo] = useState(0);
  const [face, setFace] = useState("https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-aluminum-jetblack-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFekM4bU8yL1REVmF4VUkrMW5QRGtKeWZZdXM3S3c2TnF5czBINnVYaTd4cVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv");
  const [side, setSide] = useState("https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYA33ref_FV99_VW_34FR+watch-case-46-aluminum-jetblack-nc-s10_VW_34FR+watch-face-46-aluminum-jetblack-s10_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=S01mb3pHMHA2MzFpM1RZVVFGV0dVRW5TeWJ6QW43NUFnQ2V4cmRFc1VnYUdWejZ5THhpKzJwRmRDYlhxN2o5aXB2QjR6TEZ4ZThxM3VqYkZobmlXM3RGNnlaeXQ4NGFKQTAzc0NGeHR2aVk0VEhOZEFKYmY1ZHNpalQ3YVhOWk9WVlBjZVFuazArV21YaFcvTVJ5dzRuUWsvSndwZkZQSHB4L3lvZ1B2V3ZCbWtNN0I0OEtHSU9TYzk0a1F1ZzFERlNXbWdiWWFMSHpqd3BBNUoxU1YzdG5TRTFsUDY4WC9xSGhtcnppYkpsMA");
  const [src, setSrc] = useState("https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYA33ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=czdWc1FNWHZRRGZrVTlpcjVQTEJxVHVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRDVzaDNYQm9FT2pIMkdXYzlEUEliVWM");
  const heroRef = useRef<HTMLDivElement>(null);
  const imgDivRef = useRef<HTMLDivElement>(null);
  const bandCar = useRef<HTMLDivElement>(null);
  const caseCar = useRef<HTMLDivElement>(null);
  const szCar = useRef<HTMLDivElement>(null);
  const collection = useRef<HTMLDivElement>(null);
  const collSave = useRef<HTMLDivElement>(null);
  const proDet = useRef<HTMLDivElement>(null);
  const hoverIt = useRef<HTMLDivElement>(null);
  const imgside = useRef<HTMLImageElement>(null);
  const imgcase = useRef<HTMLImageElement>(null);
  const imgband = useRef<HTMLImageElement>(null);
  const viewBtn = useRef<HTMLButtonElement>(null);
  const sel0 = useRef<HTMLButtonElement>(null);
  const sel1 = useRef<HTMLButtonElement>(null);
  const sel2 = useRef<HTMLButtonElement>(null);
  const szRef = useRef<HTMLParagraphElement>(null);
  const caseRef = useRef<HTMLParagraphElement>(null);
  const bandRef = useRef<HTMLParagraphElement>(null);
  const szBtn = useRef<HTMLButtonElement>(null);
  const caseBtn = useRef<HTMLButtonElement>(null);
  const bandBtn = useRef<HTMLButtonElement>(null);
  const btn42mm = useRef<HTMLButtonElement>(null);
  const btn46mm = useRef<HTMLButtonElement>(null);
  const displayMenu = useRef<HTMLDivElement>(null);
  const parentHov = useRef<HTMLDivElement>(null);
  const imgParentDiv = useRef<HTMLDivElement>(null);

  
  const handleClickOutside = (event:any) => {
    if (displayMenu.current && parentHov.current && !displayMenu.current.contains(event.target)) {
      const disMen = displayMenu.current
      disMen.style.display="none"
      document.removeEventListener("mousedown", handleClickOutside);
      const hov = parentHov.current
      hov.style.width="0";
      hov.style.height="0";
      hov.style.left="0";
      hov.style.top="0";
      hov.style.position="fixed";
      hov.style.zIndex="-9999";
    }
  };


  const handleScroll = ()=>{
    setTimeout(()=>{
      let ans = getActiveButton()?.getAttribute("data-key")
      if(bandNo.toString()!==ans){
        bandSelect(ans)
      }
    },500)
  }
  const handleCaseScroll = ()=>{
    setTimeout(()=>{
      let ans = getActiveButton()?.getAttribute("data-key")
      if(caseNo.toString()!==ans){
        caseSelect(ans)
      }
    },500)
  }
  const handleSizeScroll = ()=>{
    setTimeout(()=>{
      let ans = getActiveButton()?.getAttribute("data-key")
      szSelect(ans)
    },500)
  }

  const handleTypeChange = (e:any)=>{
    if(sel0.current && sel1.current && sel2.current){
      const s0 = sel0.current
      const s1 = sel1.current
      const s2 = sel2.current
      if(e.target.innerText==="Apple Watch Series 10"){
        s0.style.color="#86868b"
        s2.style.color="#1d1d1f"
        s1.style.color="#1d1d1f"
        setFace(faceDataS10[0].face)
        setSrc(bandsS10[0].src)
        setbandset(bandsS10)
        setfacedata(faceDataS10)
        setAtiveCollectionName("Apple Watch Series 10")
        setAtiveCollectionNo(0)
      }
      else if(e.target.innerText==="Apple Watch Hermès Series 10"){
        s1.style.color="#86868b"
        s2.style.color="#1d1d1f"
        s0.style.color="#1d1d1f"
        setSrc(bandsHS10[0].src)
        setFace(faceDataHS10[0].face)
        setfacedata(faceDataHS10)
        setbandset(bandsHS10)
        setAtiveCollectionName("Apple Watch Hermès Series 10")
        setAtiveCollectionNo(1)
      }
      else if(e.target.innerText==="Apple Watch SE"){
        s2.style.color="#86868b"
        s0.style.color="#1d1d1f"
        s1.style.color="#1d1d1f"
        setbandset(bandsS10)
        setfacedata(faceDataSE)
        setFace(faceDataSE[0].face)
        setSrc(bandsS10[0].src)
        setAtiveCollectionName("Apple Watch SE")
        setAtiveCollectionNo(2)
      }
    }
  }

  const handsizeInClick = (typeStr:string)=>{
    console.log("gre ", typeStr)
  }

  
  const anCloseSize = ()=>{
    if(szBtn.current &&imgParentDiv.current){
      const szbtndiv = szBtn.current;
      setTimeout(() => {
        let currw = szbtndiv.getBoundingClientRect().width
        szbtndiv.animate(
          [
            { width: `${currw}px`},
            { width:`${(currw/1.69)}px` },
          ],
          {
            duration: 400,
            fill: "forwards"
          }
        );
      }, 200);
    }
  }

  const clickSizeActions = ()=>{
    if(isSzAnimated===true)return;
    if(selected===1){
      anCloseCase()
    }
    if(selected===2){
      anCloseBand()
    }
    if(szRef.current && szBtn.current &&imgcase.current&&imgband.current){
      const szDiv = szRef.current;
      const szbtndiv = szBtn.current;
      imgcase.current.style.display="none"
      imgband.current.style.display="none"
      szDiv.innerText="Size"
      setTimeout(() => {
        let currw = szbtndiv.getBoundingClientRect().width
        szbtndiv.animate(
          [
            { width:`${currw}px` },
            { width: `${1.69*currw}px`}
          ],
          {
            duration: 400,
            fill: "forwards"
          }
        );
        setSelected(3)
      }, 200);
    }
  }


  const clickBandActions = ()=>{
    if(selected===3){
      anCloseSize()
    }
    if(selected===1){
      anCloseCase()
    }
    if(bandRef.current && bandBtn.current &&imgband.current){
      const szDiv = bandRef.current;
      const szbtndiv = bandBtn.current;
      setTimeout(() => {
        let szprW = szDiv.getBoundingClientRect().width
        let currw = szbtndiv.getBoundingClientRect().width
        szbtndiv.animate(
          [
            { width:`${szprW}px` },
            { width: `1000px`}
          ],
          {
            duration: 400,
            fill: "forwards"
          }
        );
        szbtndiv.style.width=`${currw+((0.135)*currw)}px`
      }, 200);
      const imgbandDiv = imgband.current;
      imgbandDiv.style.display="none"
      setSelected(2)
    }
  }
  
  const anCloseBand = ()=>{
    if(bandBtn.current &&imgband.current){
      const szbtndiv = bandBtn.current;
      setTimeout(() => {
        let currw = szbtndiv.getBoundingClientRect().width
        szbtndiv.animate(
          [
            { width: `${currw+((0.135)*currw)}px`},
            { width: `100px`},
          ],
          {
            duration: 400,
            fill: "forwards"
          }
        );
      }, 200);
      const imgbandDiv = imgband.current;
      imgbandDiv.style.display="block"
    }
  }
  
  useEffect(()=>{
    const bandDiv = bandCar.current
    if(bandDiv &&bandCar.current){
      const carousel = bandCar.current
      const buttons = Array.from(carousel.children);
      if(activeCollectionNo===0){
        setBandNo(36)
        bandSelectNoFace(36)
        buttons[36].scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
      }else if(activeCollectionNo===1){
        setBandNo(8)
        bandSelectNoFace(8)
        buttons[8].scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
      }else if(activeCollectionNo===2){
        setBandNo(33)
        bandSelectNoFace(3)
        buttons[33].scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
      }

      bandDiv.addEventListener("scroll",handleScroll)
      return()=>{
        bandDiv.removeEventListener("scroll",handleScroll)
      }
    }
    const caseDiv = caseCar.current
    if(caseDiv &&caseCar.current){
      if(activeCollectionNo===0){
        setFaceNo(2)
        caseSelect(2)
        setCaseNo(2)
        const carousel = caseCar.current
        const buttons = Array.from(carousel.children);
        buttons[2].scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
      }else if(activeCollectionNo===1 && imgband.current){
        imgband.current.style.display="block"
        setFaceNo(0)
        caseSelect(0)
        setCaseNo(0)
      }else if(activeCollectionNo===2){
      }

      caseDiv.addEventListener("scroll",handleCaseScroll)
      return()=>{
        caseDiv.removeEventListener("scroll",handleCaseScroll)
      }
    }
    const szDiv = szCar.current
    if(szDiv &&szCar.current){
      szSelect(1)
      setSzNo(1)
      const carousel =szCar.current
      const buttons = Array.from(carousel.children);
      buttons[1].scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
      szDiv.addEventListener("scroll",handleSizeScroll)
      return()=>{
        szDiv.removeEventListener("scroll",handleSizeScroll)
      }
    }
},[selected])
  
const saveClick=()=>{
  console.log("save",getActiveButton())
}

const getActiveButton=():HTMLDivElement|null=> {
  let activeButton = null;
  if(bandCar.current){
    const carousel = bandCar.current
    const buttons = Array.from(carousel.children);
    const carouselRect = carousel.getBoundingClientRect();
    const carouselCenter = carouselRect.left + carouselRect.width / 2;

    let closestDistance = Infinity;

    buttons.forEach((button) => {
      const buttonRect = button.getBoundingClientRect();
      const buttonCenter = buttonRect.left + buttonRect.width / 2;
      const distance = Math.abs(carouselCenter - buttonCenter);
      if (distance < closestDistance) {
        closestDistance = distance;
        activeButton = button;
      }
    })
  }else if(caseCar.current){
    const carousel = caseCar.current
    const buttons = Array.from(carousel.children);
    const carouselRect = carousel.getBoundingClientRect();
    const carouselCenter = carouselRect.left + carouselRect.width / 2;

    let closestDistance = Infinity;

    buttons.forEach((button) => {
      const buttonRect = button.getBoundingClientRect();
      const buttonCenter = buttonRect.left + buttonRect.width / 2;
      const distance = Math.abs(carouselCenter - buttonCenter);
      if (distance < closestDistance) {
        closestDistance = distance;
        activeButton = button;
      }
    })
  }else if(szCar.current){
    const carousel = szCar.current
    const buttons = Array.from(carousel.children);
    const carouselRect = carousel.getBoundingClientRect();
    const carouselCenter = carouselRect.left + carouselRect.width / 2;

    let closestDistance = Infinity;

    buttons.forEach((button) => {
      const buttonRect = button.getBoundingClientRect();
      const buttonCenter = buttonRect.left + buttonRect.width / 2;
      const distance = Math.abs(carouselCenter - buttonCenter);
      if (distance < closestDistance) {
        closestDistance = distance;
        activeButton = button;
      }
    })
  }
  return activeButton;
}
const bandSelect=(e:any)=>{
  if (e && bandCar.current) {
    const carousel = bandCar.current
    const buttons = Array.from(carousel.children);
    let bandName = bands[e].id.split("-").join(" ")
    setBandName(bandName)
    // buttons[e].scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
    if(bands[e].face){
      setFace(bands[e].face)
      setSrc(bands[e].src)
      setSide(bands[e].sidesrc)
    }else if(bands[0].face){
      setFace(bands[0].face)
      setSide(bands[e].sidesrc)
      setSrc(bands[e].src)
    }
  }
}
const bandSelectNoFace=(e:any)=>{
  if (e && bandCar.current) {
    const carousel = bandCar.current
    const buttons = Array.from(carousel.children);
    buttons[e].scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
    let bandName = bands[e].id.split("-").join(" ")
    setBandName(bandName)
    // setBandName()
  }
}
const caseSelect=(e:any)=>{
  if (e && caseCar.current) {
    const carousel = caseCar.current
    const buttons = Array.from(carousel.children);
    let caseName = faceData[e].id.split("-").join(" ")
    setCaseName(caseName)
    // buttons[e].scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
    if(faceData[e].face){
      setFace(faceData[e].face)
    }else if(faceData[0].face){
      setFace(faceData[0].face)
    }
  }
}
const szSelect=(e:any)=>{
  if (e && szCar.current) {
    console.log(e,typeof e)
    if(e==0){
      setSizeName("42mm")
      setSzNo(0)
    }else if(e==1){
      setSizeName("46mm")
      setSzNo(1)
    }
  }
}
const bandSelectSnap=(e:any)=>{
  console.log("snap,",e,bandCar.current)
  if (e!==null && bandCar.current) {
    console.log(getActiveButton()?.style)
    if(getActiveButton()?.style.width==="500px"){
      switchImage()
    }
    const carousel = bandCar.current
    const buttons = Array.from(carousel.children);
    buttons[e].scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
    let bandName = bands[e].id.split("-").join(" ")
    setBandName(bandName)
    if(bands[e].face){
      setFace(bands[e].face)
      setSrc(bands[e].src)
      setSide(bands[e].sidesrc)
    }else{
      if(bands[0].face){
        setFace(bands[0].face)
        setSide(bands[e].sidesrc)
        setSrc(bands[e].src)
      }
    }
  }
}
const caseSelectSnap=(e:any)=>{
  console.log("snap,",e,caseCar.current)
  if (e!==null && caseCar.current) {
    console.log(getActiveButton()?.style)
    if(getActiveButton()?.style.width==="500px"){
      switchImage()
    }
    const carousel = caseCar.current
    const buttons = Array.from(carousel.children);
    let caseName = faceData[e].id.split("-").join(" ")
    setCaseName(caseName)
    buttons[e].scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
    if(faceData[e].face){
      setFace(faceData[e].face)
    }else{
      if(faceData[0].face){
        setFace(faceData[0].face)
      }
    }
  }
}
const sizeSelectSnap=(e:any)=>{
  if (e!==null && szCar.current) {
    if(getActiveButton()?.style.width==="500px"){
      switchImage()
    }
    const carousel = szCar.current
    const buttons = Array.from(carousel.children);
    if(e===0){
      setSizeName("42mm")
      setSzNo(0)
    }else{
      setSizeName("46mm")
      setSzNo(1)
    } 
    buttons[e].scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
    // if(faceData[e].face){
    //   setFace(faceData[e].face)
    // }else{
    //   if(faceData[0].face){
    //     setFace(faceData[0].face)
    //   }
    // }
  }
}


  const clickCaseActions = ()=>{
    if(selected===3){
      anCloseSize()
    }
    if(selected===2){
      anCloseBand()
    }
    if(caseRef.current && caseBtn.current&&imgcase.current){
      const szDiv = caseRef.current;
      const szbtndiv = caseBtn.current;
      szDiv.innerText="Size"
      setTimeout(() => {
        let currw = szbtndiv.getBoundingClientRect().width
        szbtndiv.animate(
          [
            { width:`${currw+20}px` },
            { width: `${2.2*currw+(0.05*currw)}px`}
          ],
          {
            duration: 400,
            fill: "forwards"
          }
        );
        setSelected(1)
      }, 200);
      const imgCase = imgcase.current;
      imgCase.style.display="none"
    }
  }
  const anCloseCase = ()=>{
    if(caseBtn.current &&imgcase.current){
      const szDiv = caseRef.current;
      const szbtndiv = caseBtn.current;
      let currw = szbtndiv.getBoundingClientRect().width
      // szbtndiv.style.width=`0.48*${currw}`
      setTimeout(() => {
        szbtndiv.animate(
          [
            { width: `${currw}px`},
            { width:`100px`},
          ],
          {
            duration: 400,
            fill: "forwards"
          }
        );
      }, 200);
      const imgCase = imgcase.current;
      imgCase.style.display="block"
    }
  }

  const sizebtns = (str:string)=>{
    if(str==="42mm"){
      sizeSelectSnap(0)
    }
    else if(str==="46mm"){
      sizeSelectSnap(1)
    }
  }
  const caseBtns = (str:string)=>{
    if(str==="alm"){
      caseSelectSnap(0)
    }
    else if(str==="tnm"){
      caseSelectSnap(3)
    }
  }
  const bandbtns = (str:string)=>{
    if(str==="steel"){
      console.log(str)
      bandSelectSnap(0)
    }
    else if(str==="sportLoop"){
      bandSelectSnap(6)
    }
    else if(str==="sportBand"){
      bandSelectSnap(13)
    }
    else if(str==="fineWoven"){
      bandSelectSnap(23)
    }
    else if(str==="braided"){
      bandSelectSnap(26)
    }
    else if(str==="solo"){
      bandSelectSnap(33)
    }
    else if(str==="nikeLoop"){
      bandSelectSnap(38)
    }
    else if(str==="nikeBand"){
      bandSelectSnap(43)
    }
  }
  const anImgDiv = ()=>{
    // 5% extra to button and then 

    if(szRef.current && szBtn.current){
      setIsSzAnimating(true)
      const szDiv = szRef.current;
      const szbtndiv = szBtn.current;
      szDiv.innerText="Size"
      setTimeout(() => {
        let currw = szbtndiv.getBoundingClientRect().width
        szDiv.innerText = "42mm 46mm";
        szbtndiv.animate(
          [
            { width:`${currw}px` },
            { width: `${1.69*currw}px`}
          ],
          {
            duration: 400,
            fill: "forwards"
          }
        );
        setTimeout(()=>{
          const szAnimate = szbtndiv.animate(
            [
              { width: `${1.69*currw}px`},
              { width:`${currw}px` },
            ],
            {
              duration: 400,
              fill: "forwards"
            }
          );
          Promise.all([szAnimate.finished,]).then(() => {
            szDiv.innerText="Size"
            setIsSzAnimating(false)
          });
        },1000)
      }, 200);
    }
  }

  const dispMenu = ()=>{
    if(displayMenu.current&&parentHov.current && sel0.current){
      const disMen = displayMenu.current
      const s1 = sel0.current
      s1.style.color="#86868b"
      disMen.style.display="flex"
      document.addEventListener("mousedown", handleClickOutside);
      const hov = parentHov.current
      hov.style.width="100%";
      hov.style.height="100%";
      hov.style.left="0";
      hov.style.top="0";
      hov.style.position="fixed";
      hov.style.zIndex="9999";
      disMen.style.transition="0.3s ease-in-out"
    }
  }

  const nextAn = ()=>{

    if(heroRef.current && imgDivRef.current &&collSave.current && proDet.current &&hoverIt.current){
      const hero = heroRef.current;
      const img = imgDivRef.current;
      const colSDiv = collSave.current;
      const proDiv = proDet.current
      const hov= hoverIt.current
      const sz = window.innerWidth
      let currHeight = hero.getBoundingClientRect().height
      let currSWidth = screen.width
      let currSHeight = screen.height
      if(sz>1080){
        currHeight+=125
      }else{
        currHeight+=350
      }

      if(currSWidth/currSHeight>2.1){
        console.log("here")
        hov.style.bottom="2vh"
        hero.style.marginTop="0"
        proDiv.style.marginTop="0"
      }
      if(currSWidth<1525){
        console.log("here")
        hov.style.bottom="4vh"
        // hero.style.marginTop="1rem"
        proDiv.style.marginTop="2vh"
      }

      const img2Animation = img.animate(
        [{transform:"scale(2)"}, {transform:"scale(1)"}],
        {
          duration: 1000,
          easing: 'ease-in-out',
          fill: 'forwards',
        }
      );
      const heroAnimation = hero.animate(
        [{height:`${currHeight}px`}, {height:"0px"}],
        {
          duration: 1000,
          easing: 'ease-in-out',
          fill: 'forwards',
        }
      );
      
      Promise.all([img2Animation.finished,heroAnimation.finished]).then(() => {
        hero.style.height="0";
        img.style.transform="scale(1) tranlateY(0rem)"
        colSDiv.style.display="block"
        proDiv.style.display="block"
        hov.style.display="flex"
        anImgDiv()
      });
      
    }
  }
  
  const switchImage=()=>{
    if(bandCar.current&&viewBtn.current){
      const viewBtnD = viewBtn.current;
      if (viewBtnD.innerText === "Front view") {
        bandCar.current.style.overflowX = "scroll";
      }else{
        bandCar.current.style.overflowX = "hidden";
      }
    }
    if(caseCar.current&&viewBtn.current){
      const viewBtnD = viewBtn.current;
      if (viewBtnD.innerText === "Front view") {
        caseCar.current.style.overflowX = "scroll";
      }else{
        caseCar.current.style.overflowX = "hidden";
      }
    }
    if(szCar.current&&viewBtn.current){
      const viewBtnD = viewBtn.current;
      if (viewBtnD.innerText === "Front view") {
        szCar.current.style.overflowX = "scroll";
      }else{
        szCar.current.style.overflowX = "hidden";
      }
    }
    if(imgcase.current&&imgband.current&&imgside.current&&viewBtn.current&&imgDivRef.current){
      const icase = imgcase.current;
      const iband = imgband.current;
      const iside = imgside.current;
      const idiv = imgDivRef.current;
      const viewBtnD = viewBtn.current
      if(viewBtnD.innerText==="Side view"){
        const idivAnimation = idiv.animate(
          [{opacity:1}, { opacity:0}],
          {
            duration: 100,
            easing: 'ease-in-out',
            fill: 'forwards',
          }
        );
        const curButtonAnimation = getActiveButton()?.animate(
          [{width:"312px"}, { width:"500px"}],
          {
            duration: 300,
            easing: 'ease-in-out',
            fill: 'forwards',
          }
        );
        Promise.all([idivAnimation.finished]).then(() => {
          iside.style.display="block"
          icase.style.display="none"
          iband.style.display="none"
          const activeButton = getActiveButton();
          if (activeButton) {
            activeButton.style.width = "500px";
          }
          const idivAnimation = idiv.animate(
            [{opacity:0}, { opacity:1}],
            {
              duration: 100,
              easing: 'ease-in-out',
              fill: 'forwards',
            }
          );
          viewBtnD.innerText="Front view"
        });
      }else if(viewBtnD.innerText==="Front view"){
        const idivAnimation = idiv.animate(
          [{opacity:1}, { opacity:0}],
          {
            duration: 100,
            easing: 'ease-in-out',
            fill: 'forwards',
          }
        );
        Promise.all([idivAnimation.finished]).then(() => {
          icase.style.display="block"
          iband.style.display="block"
          iside.style.display="none"
          viewBtnD.innerText="Side view"
          const curButtonAnimation = getActiveButton()?.animate(
            [{width:"500px"}, { width:"312px"}],
            {
              duration: 100,
              easing: 'ease-in-out',
              fill: 'forwards',
            }
          );
          const idivAnimation = idiv.animate(
            [{opacity:0}, { opacity:1}],
            {
              duration: 100,
              easing: 'ease-in-out',
              fill: 'forwards',
            }
          );
          Promise.all([curButtonAnimation?.finished]).then(()=>{
            const activeButton = getActiveButton();
            if (activeButton) {
              activeButton.style.width = "312px";
            }
          })
          if(selected===2){
            iband.style.display="none";
          }
          if(selected===3){
            icase.style.display="none";
            iband.style.display="none";
          }
        });
        
      }
    }
  }
  const handleClick = () => {
    setIsAnimating(true)
    if (heroRef.current&&imgDivRef.current &&collection.current) {
      const hero = heroRef.current;
      const imgDiv = imgDivRef.current;
      const colDiv = collection.current;
      const herodisappAnimation = hero.animate(
        [{opacity:1}, { opacity:0}],
        {
          duration: 600,
          easing: 'ease-in-out',
          fill: 'forwards',
        }
      );
      Promise.all([herodisappAnimation.finished]).then(() => {
        colDiv.style.display="block"
        hero.style.opacity="0";
        imgDiv.style.marginTop="4rem"
        nextAn()
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen min-w-full p-8 pb-20">
      <div className="flex flex-row align-top justify-start min-w-full">
        <Image src="/Logo.jpeg" alt="alt" width={90} height={20} />
      </div>
      <div ref={heroRef} className="mt-12 flex flex-col align-top justify-start z-50">
        <p className="mt-16 text-xl pb-4 text-[#1D1D1F]">Apple Watch Studio</p>
        <h1 className="herotext text-[#1D1D1F]">Choose a case.</h1>
        <h1 className="herotext text-[#1D1D1F]">Pick a band.</h1>
        <h1 className="herotext text-[#1D1D1F]">Create your own style.</h1>
        <button
          onClick={handleClick}
          disabled={isAnimated}
          className="getS w-max bg-[#0071e3] text-white py-3 p-6 rounded-3xl mt-12"
        >
          Get started
        </button>
      </div>
      <div className="pb-2 relative w-screen" ref={imgParentDiv}>
        <div
          ref = {imgDivRef} 
          aria-hidden="false"
          role="img"
          className="relative max-w-[500px] w-[52vh] h-[53vh] z-10 text-center hero-img-container pointer-events-none"
        >
          <Image
            ref={imgband}
            aria-hidden="true"
            className="absolute w-[52vh] max-w-[500px] h-auto"
            src={src}
            alt="alt"
            style={{display:"block"}}
            width={500}
            height={500}
          />
          <Image
            ref={imgcase}
            aria-hidden="true"
            className="absolute w-[52vh] max-w-[500px] h-auto"
            src={face}
            alt="alt"
            style={{display:"block"}}
            width={500}
            height={500}
          />
          <Image
            ref={imgside}
            aria-hidden="true"
            className="absolute w-[52vh] max-w-[500px] h-auto"
            src={side}
            alt="alt"
            style={{display:"none"}}
            width={500}
            height={500}
          />
        </div>
        {(selected===2)&&(
          <div ref={bandCar} className="whitespace-nowrap scroll-smooth overflow-x-scroll noscrollbar w-screen overflow-y-hidden absolute left-0 top-0 mt-16 snap-x snap-mandatory" style={{paddingInlineStart:"calc(50vw - 156px)",paddingInlineEnd:"calc(50vw - 156px)"}}>
              {bands.map((band,index)=>{
                return(
                  <button onClick={()=>bandSelectSnap(index)} data-key={index} key={index} className="inline-block w-[312px] text-center whitespace-normal overflow-hidden bg-none snap-center cursor-pointer">
                    <ImageDiv key={index} src={band.src}/>
                  </button>
                )
              })}
          </div>
        )}
        {(selected===1)&&(
          <div ref={caseCar} className="whitespace-nowrap scroll-smooth overflow-x-scroll noscrollbar w-screen overflow-y-hidden absolute left-0 top-0 mt-16 snap-x snap-mandatory" style={{paddingInlineStart:"calc(50vw - 156px)",paddingInlineEnd:"calc(50vw - 156px)",zIndex:"50"}}>
              {faceData.map((face,index)=>{
                return(
                  <button onClick={()=>caseSelectSnap(index)} data-key={index} key={index} className="inline-block w-[312px] text-center whitespace-normal overflow-hidden bg-none snap-center cursor-pointer">
                    <ImageDiv key={index} face={face.face}/>
                  </button>
                )
              })}
          </div>
        )}
        {(selected===3)&&(
          <div ref={szCar} className="whitespace-nowrap scroll-smooth overflow-x-scroll noscrollbar w-screen overflow-y-hidden absolute left-0 top-0 mt-16 snap-x snap-mandatory" style={{paddingInlineStart:"calc(50vw - 156px)",paddingInlineEnd:"calc(50vw - 156px)"}}>
            <button onClick={()=>sizeSelectSnap(0)} data-key={0} className="inline-block w-[312px] text-center whitespace-normal overflow-hidden bg-none snap-center cursor-pointer">
              <ImageDiv src={src} face={face}/>
            </button>
            <button onClick={()=>sizeSelectSnap(1)} data-key={1} className="inline-block w-[312px] text-center whitespace-normal overflow-hidden bg-none snap-center cursor-pointer">
              <ImageDiv src={src} face={face}/>
            </button>
          </div>
        )}

      </div>
      <div ref={collection} style={{display:"none"}} className="absolute top-8 ease-in-out text-center">
        <button onClick={dispMenu} className="relative">
          Collections ˅
        </button>
        <div ref={parentHov} className="text-center bg-[#32323270]">
          <div ref={displayMenu} style={{display:"none",transition:"0.4s ease-in-out"}} className="relative mt-2 flex flex-col bg-white rounded-xl px-5 w-max top-14 ml-auto mr-auto">
            <button ref={sel0} onClick={(e)=>{handleTypeChange(e)}} className="p-4">
              Apple Watch Series 10
            </button>
            <hr></hr>
            <button ref={sel1} onClick={(e)=>{handleTypeChange(e)}} className="p-4">
              Apple Watch Hermès Series 10
            </button>
            <hr></hr>
            <button ref={sel2} onClick={(e)=>{handleTypeChange(e)}} className="p-4">
              Apple Watch SE
            </button>
          </div>
        </div>        
      </div>
      <div ref={collSave} style={{display:"none"}} className="absolute top-6 right-4 ease-in-out">
        <button onClick={saveClick} className="getS w-max bg-[#0071e3] text-white py-2 p-4 rounded-3xl ease-in-out text-xs">
          Save
        </button>
      </div>
      <div ref={proDet} style={{display:"none",marginTop:"6vh"}} className="ease-in-out flex flex-col text-center">
        <button ref={viewBtn} onClick={switchImage} className="text-blue-500 underline text-xs mb-3">Side view</button>
        <p className="text-[#6e6e73] font-semibold mb-1 text-xs">{activeCollectionName}</p>
        <p className="text-[#1d1d1f] mb-1 overflow-hidden text-sm boldsm-statement">{sizename} {casename} with {bandname}</p>
        <p className="text-[#1d1d1f] mb-1 overflow-hidden text-sm">From $429</p>
      </div>
      
      <div ref={hoverIt} style={{display:"none",bottom:"10vh"}} className="w-screen overflow-x-scroll noscrollbar whitespace-nowrap absolute text-center">
        <div className="flex align-middle justify-center flex-row flex-nowrap m-auto">
          <button onClick={clickSizeActions} ref={szBtn} className="w-max flex flex-row flex-nowrap text-[#1d1d1f] bg-[#e8e8ed] px-4 py-1 rounded-full m-2">
            <div className="inline-block p-1">
              <svg height="25" viewBox="0 0 19 25" width="19" xmlns="http://www.w3.org/2000/svg"><path d="m0 0h19v25h-19z" fill="none"></path><path d="m18.25 9.038v1.7427c0 .2972-.0833.5382-.25.7227-.1665.1847-.385.277-.6553.277h-.3447v5.1904c0 2.2253-1.804 4.0293-4.0293 4.0293h-2.3643c.3291-.2865.6082-.6216.8301-1h1.5342c1.6704 0 3.0293-1.3589 3.0293-3.0293v-8.9414c0-1.6704-1.3589-3.0293-3.0293-3.0293h-6.9414c-1.3074 0-2.4136.8372-2.8372 2h-.1748c-.3113 0-.6113.0437-.9026.1111.417-1.781 2.0063-3.1111 3.9146-3.1111h6.9414c2.2253 0 4.0293 1.804 4.0293 4.0293v.0225h.3447c.2703 0 .4888.0902.6553.2703.1667.1803.25.4187.25.7159zm-7.25 8.9447c0 1.6664-1.3508 3.0173-3.0173 3.0173h-4.9654c-1.6665 0-3.0173-1.351-3.0173-3.0173v-6.9653c0-1.6664 1.3508-3.0173 3.0173-3.0173h4.9653c1.6665 0 3.0173 1.351 3.0173 3.0173v.1215h.3076c.2068 0 .3738.069.5012.2067.1274.1379.1912.3202.1912.5475v1.3326c0 .2273-.0637.4116-.1912.5526-.1274.1412-.2944.2118-.5012.2118h-.3076v3.9927zm-1-6.9653c0-1.1123-.905-2.0173-2.0173-2.0173h-4.9654c-.0059 0-.0115.0017-.0173.0017-.366.0032-.7048.1096-1 .2837-.5952.3511-1 .9922-1 1.7319v6.9653c0 1.1123.905 2.0173 2.0173 2.0173h4.9653c1.1123 0 2.0173-.905 2.0173-2.0173v-6.9653z" fill="#1d1d1f"></path></svg>
            </div>
            {(selected<=2)?(
              <p ref={szRef} className="inline-block p-1 overflow-hidden text-nowrap">
                Size
              </p>
            ):(
              <div className="inline-block p-1 overflow-hidden text-nowrap">
                <div className="inline-block" onClick={()=>sizebtns("42mm")}>42mm</div>
                <div className="inline-block" onClick={()=>sizebtns("46mm")} style={{marginLeft:'5%'}}>46mm</div>
              </div>
            )}
          </button>
          <button onClick={clickCaseActions} ref={caseBtn} className="w-max flex flex-row flex-nowrap text-[#1d1d1f] bg-[#e8e8ed] px-4 py-1 rounded-full m-2">
            <div className="inline-block p-1">
              <svg height="25" viewBox="0 0 17 25" width="17" xmlns="http://www.w3.org/2000/svg"><path d="m0 0h17v25h-17z" fill="none"></path><path d="m16 8.2017c-.1665-.1801-.385-.2703-.6553-.2703h-.3447v-.0225c0-2.2253-1.804-4.0293-4.0293-4.0293h-6.9414c-2.2253.0001-4.0293 1.804-4.0293 4.0294v8.9414c0 2.2253 1.804 4.0293 4.0293 4.0293h6.9414c2.2253 0 4.0293-1.804 4.0293-4.0293v-5.1904h.3447c.2703 0 .4888-.0923.6553-.277.1667-.1844.25-.4254.25-.7227v-1.7427c0-.2972-.0833-.5356-.25-.7159zm-2 8.6487c0 1.6704-1.3589 3.0293-3.0293 3.0293h-6.9414c-1.6704 0-3.0293-1.3589-3.0293-3.0293v-8.9414c0-1.6704 1.3589-3.0293 3.0293-3.0293h6.9414c1.6704 0 3.0293 1.3589 3.0293 3.0293z" fill="#1d1d1f"></path></svg>
            </div>
            {(selected===1)?(
              <div className="inline-block p-1 overflow-visible text-nowrap">
                <div className="inline-block" onClick={()=>caseBtns("alm")}>Aluminum</div>
                <div className="inline-block" onClick={()=>caseBtns("tnm")} style={{marginLeft:'5%'}}>Titanium</div>
              </div>
            ):(
              <p ref={caseRef} className="inline-block p-1 overflow-hidden text-nowrap">
                Case
              </p>
            )}
          </button>
          <button onClick={clickBandActions} ref={bandBtn} className="w-max flex flex-row flex-nowrap text-[#1d1d1f] bg-[#e8e8ed] px-4 py-1 rounded-full m-2">
            <div className="inline-block p-1">
              <svg height="25" viewBox="0 0 10 25" width="10" xmlns="http://www.w3.org/2000/svg"><path d="m0 0h10v25h-10z" fill="none"></path><path d="m9.5 22.5a.5.5 0 0 1 -.5.5h-8a.5.5 0 1 1 0-1h.015a.485.485 0 0 0 .485-.485v-6.2216a4.5231 4.5231 0 0 0 1 .9448v5.2768a1.4779 1.4779 0 0 1 -.0813.485h5.1627a1.4758 1.4758 0 0 1 -.0814-.485v-5.2768a4.5209 4.5209 0 0 0 1-.9448v6.2216a.4851.4851 0 0 0 .4851.485h.0149a.5.5 0 0 1 .5.5zm-1.9194-19.5h-5.1621a1.4732 1.4732 0 0 1 .0815.485v9.015a2.5 2.5 0 0 0 5 0v-9.015a1.4873 1.4873 0 0 1 .0806-.485m1.4194-1a.5.5 0 0 1 .5.5.5.5 0 0 1 -.5.5h-.015a.485.485 0 0 0 -.485.485v9.015a3.5 3.5 0 0 1 -3.5 3.5 3.5 3.5 0 0 1 -3.5-3.5v-9.015a.485.485 0 0 0 -.485-.485h-.015a.5.5 0 0 1 0-1zm-3.2179 10.5a.75.75 0 1 0 -.75.75.75.75 0 0 0 .75-.75zm0-2.5a.75.75 0 1 0 -.75.75.75.75 0 0 0 .75-.75zm0-2.5a.75.75 0 1 0 -.75.75.75.75 0 0 0 .75-.75z" fill="#1d1d1f"></path></svg>
            </div>
            {(selected===2)?(
              <div className="inline-block p-1 text-nowrap whitespace-nowrap">
                <div className="inline-block" onClick={()=>bandbtns("steel")}>Stainless Steel</div>
                <div className="inline-block" onClick={()=>bandbtns("sportLoop")} style={{marginLeft:'2%'}}>Sport Loop</div>
                <div className="inline-block" onClick={()=>bandbtns("sportBand")} style={{marginLeft:'2%'}}>Sport Band</div>
                <div className="inline-block" onClick={()=>bandbtns("fineWoven")} style={{marginLeft:'2%'}}>FineWoven</div>
                <div className="inline-block" onClick={()=>bandbtns("braided")} style={{marginLeft:'2%'}}>Braided Solo Loop</div>
                <div className="inline-block" onClick={()=>bandbtns("solo")} style={{marginLeft:'2%'}}>Solo Loop</div>
                <div className="inline-block" onClick={()=>bandbtns("nikeLoop")} style={{marginLeft:'2%'}}>Nike Sport Loop</div>
                <div className="inline-block" onClick={()=>bandbtns("nikeBand")} style={{marginLeft:'2%'}}>Nike Sport Band</div>
              </div>
            ):(
              <p ref={bandRef} className="inline-block p-1 overflow-hidden text-nowrap">
                Band
              </p>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
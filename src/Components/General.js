import React from "react";
import generalStyles from "../Assets/css/General.module.css";
// import generalStyles from "./css/General.module.css";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { useState } from "react";
import Navbar from "./Navbar/Navbar";
// import {Modal, ModalHeader, ModalBody} from "reactstrap";

const General = ({lang, currency}) => {
    const [lanVal, setLanVal] = useState("English")
    const [curVal, setCurVal] = useState("Rupee(₹)")
    const selectLan = (event) => {
        setLanVal(event.target.value)
    }
    const selectCur = (e) => {
        setCurVal(e.target.value1)
    }
    const [val,setVal] = useState([]);
    const handleAdd = () => {
        const abc = [...val,[]]
        setVal(abc)
    }
    return(
        <div>
            <Navbar/>
            {/* <Modal>
                isOpen={modal}
                toggle={() => setmodal(!modal)}
                <ModalHeader>
                toggle={() => setmodal(!modal)}
                
                </ModalHeader>
                <ModalBody>

                </ModalBody>
            </Modal> */}
            <div className={generalStyles.generalhead}>
                
                <button><FaChevronLeft className={generalStyles.leftarrow}/></button>
                <h1>General Settings</h1>
            </div>
            <div className={generalStyles.generalbody}>
                <div className={generalStyles.generaltheme}>
                    <h2>Theme</h2>
                    <div className={generalStyles.gende}>
                    <input type="radio" id="default" value="Default"></input>
                    <label for="default">Default</label>
                    </div>
                    <div className={generalStyles.gendar}>
                    <input type="radio" id="dark" value="Dark"></input>
                    <label for="dark">Dark</label><br></br>
                    </div>
                </div>
                
                <div className={generalStyles.generallanguage}>
                    <h2>Language</h2>
                    <p>{lanVal}</p>
                    <>
                    <button onClick={handleAdd}><FaChevronRight className={generalStyles.rightarrow}/></button>
                    {val.map((data,i)=>{
                    return(
                        <div className={generalStyles.generallanpop}>
                    <h1>Language</h1>
                    <div className={generalStyles.generallanbody}>
                        <div className={generalStyles.left}>
                        <button onClick={selectLan} value='English'>English</button>
                        <button onClick={selectLan} value='Español'>Español</button>
                        <button onClick={selectLan} value='Italiona'>Italiona</button>
                        <button onClick={selectLan} value='Deutsch'>Deutsch</button>
                        <button onClick={selectLan} value='Türk'>Türk</button>
                        <button onClick={selectLan} value='中国人'>中国人</button>
                        <button onClick={selectLan} value='日本'>日本</button>
                        <button onClick={selectLan} value='Română'>Română</button>
                        <button onClick={selectLan} value='русский'>русский</button>
                        <button onClick={selectLan} value='български'>български</button>
                        </div>
                        <div className={generalStyles.right}>
                        <button onClick={selectLan} value='한국어'>한국어</button>
                        <button onClick={selectLan} value='แบบไทย'>แบบไทย</button>
                        <button onClick={selectLan} value='Pilipino'>Pilipino</button>
                        <button onClick={selectLan} value='українська'>українська</button>
                        <button onClick={selectLan} value='ქართველი'>ქართველი</button>
                        <button onClick={selectLan} value='Ελληνικά'>Ελληνικά</button>
                        <button onClick={selectLan} value='ייִדיש'>ייִדיש</button>
                        <button onClick={selectLan} value='монгол'>монгол</button>
                        <button onClick={selectLan} value='فارسی'>فارسی</button>
                        <button onClick={selectLan} value='Português'>Português</button>
                        </div>
                        
                    </div>
                </div>
                    )
                })}
                </>
                </div>
                <div className={generalStyles.generalcurrency}>
                    <h2>Currency</h2>
                    <p>{curVal}</p>
                    <>
                    <button onClick={handleAdd}><FaChevronRight className={generalStyles.rightarrow}/></button>
                    {val.map((data,i)=>{
                    return(
                        <div className={generalStyles.generalcurpop}>
                    <h1>Currency</h1>
                    <div className={generalStyles.generalcurbody}>
                        <button onClick={selectCur} value1='Rupee(₹)'>Rupee(₹)</button>
                        <button onClick={selectCur} value1='US Dollar($)'>US Dollar($)</button>
                        <button onClick={selectCur} value1='Pound Sterling(£)'>Pound Sterling(£)</button>
                        <button onClick={selectCur} value1='Euro(€)'>Euro(€)</button>
                        <button onClick={selectCur} value1='Kuwaiti Dinar(KD)'>Kuwaiti Dinar(KD)</button>
                        <button onClick={selectCur} value1='Japanese Yen(¥)'>Japanese Yen(¥)</button>
                        <button onClick={selectCur} value1='Russian Ruble(₽)'>Russian Ruble(₽)</button>
                        <button onClick={selectCur} value1='Mexican Peso(Mex$)'>Mexican Peso(Mex$)</button>
                        <button onClick={selectCur} value1='Polish Zloty(zł)'>Polish Zloty(zł)</button>
                        <button onClick={selectCur} value1='Swedish Krona(kr)'>Swedish Krona(kr)</button>
                    </div>
                        </div>
                          )
                        })}
                    </>
                </div>
            </div>
        </div>
    )
}

export default General;
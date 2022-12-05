import React from "react";
import generalStyles from "../Assets/css/General.module.css";
import { FaChevronLeft } from "react-icons/fa";
import { useState } from "react";
import { Link } from 'react-router-dom'
import Navbar from "./Navbar/Navbar";
import { IntlProvider, FormattedMessage } from "react-intl";

const General = () => {
    const messages = {
        English: {
            heading:'General Settings',
            language:'Language',
            lname:'English',
            currency:'Currency',
            sharing:'Sharing',
            sh:'Display a popup to allow sharing your traders with others'
        },
        Spanish: {
            heading:'Ajustes Generales',
            language:'Idioma',
            lname:'Español',
            currency:'Divisa local',
            sharing:'Compartir',
            sh:'Mostrar un mensaje emergente para permitir compartir sus operaciones con otros'
        },
        Italian: {
            heading:'Impostazioni generali',
            language:'Linguaggio',
            lname:'Italiano',
            currency:'Moneta',
            sharing:'Condivisione',
            sh:'Visualizza un popup per consentire la condivisione dei tuoi trader con altri'
        },
        Duits: {
            heading:'Algemene instellingen',
            language:'Taal',
            lname:'Duits',
            currency:'Munteenheid',
            sharing:'Delen',
            sh:'Geef een pop-up weer om uw handelaren met anderen te kunnen delen'
        },
        Turkish: {
            heading:'Genel Ayarlar',
            language:'Dil',
            lname:'Türk',
            currency:'Para birimi',
            sharing:'paylaşım',
            sh:'Yatırımcılarınızı başkalarıyla paylaşmanıza izin vermek için bir açılır pencere görüntüleyin'
        },
        Japanese: {
            heading:'一般設定',
            language:'言語',
            lname:'日本',
            currency:'通貨',
            sharing:'共有',
            sh:'ポップアップを表示してトレーダーを他の人と共有できるようにする'
        },
        Chinese: {
            heading:'通用设置',
            language:'语',
            lname:'中国人',
            currency:'货币',
            sharing:'分享',
            sh:'显示弹出窗口以允许与他人共享您的交易者'
        },
        Romanian: {
            heading:'setari generale',
            language:'Limba',
            lname:'Română',
            currency:'Valută',
            sharing:'Partajarea',
            sh:'Afișează o fereastră pop-up pentru a permite partajarea comercianților tăi cu alții'
        },
        Russian: {
            heading:'общие настройки',
            language:'Язык',
            lname:'Русский',
            currency:'Валюта',
            sharing:'Обмен',
            sh:'Показать всплывающее окно, чтобы разрешить делиться своими трейдерами c другими'
        },
        Bulgarian: {
            heading: 'Основни настройки',
            language:'език',
            lname:'български',
            currency:'Валута',
            sharing:'Споделяне',
            sh:'Покажете изскачащ прозорец, за да позволите споделянето на вашите търговци други'
        }
      }

    const [lanVal, setLanVal] = useState("English")
    const [curVal, setCurVal] = useState("Rupee(₹)")
    const selectLan = (event) => {
        setLanVal(event.target.value)
    }
    const selectCur = (event) => {
        setCurVal(event.target.value)
    }
    
    return(
        <div>
            <Navbar/>
            <div className={generalStyles.generalhead}>
                
                <Link to='/settings'><button><FaChevronLeft className={generalStyles.leftarrow}/></button></Link>
                <IntlProvider locale={lanVal} messages={messages[lanVal]}><h1><FormattedMessage id="heading" defaultMessage="General Settings" value={lanVal}></FormattedMessage></h1></IntlProvider>
            </div>
            <div className={generalStyles.generalbody}>
                
                <div className={generalStyles.generallanguage}>
                <IntlProvider locale={lanVal} messages={messages[lanVal]}><h2><FormattedMessage id="language" defaultMessage="Language" value={lanVal}></FormattedMessage></h2></IntlProvider>
                <IntlProvider locale={lanVal} messages={messages[lanVal]}><p><FormattedMessage id="lname" defaultMessage="English" value={lanVal}></FormattedMessage></p></IntlProvider>

                    <select onClick={selectLan} defaultValue={lanVal}>
            {['English','Spanish','Italian','Duits','Turkish','Japanese','Chinese','Romanian','Russian'].map((x) => (
                <option key={x}>{x}</option>
            ))}
            </select>
                    
                </div>
                
                <div className={generalStyles.generalcurrency}>
                <IntlProvider locale={lanVal} messages={messages[lanVal]}><h2><FormattedMessage id="currency" defaultMessage="Currency" value={lanVal}></FormattedMessage></h2></IntlProvider>
                
                    <p>{curVal}</p>
                    <button>
                    <select onClick={selectCur} defaultValue={curVal}>
                        <option value='Rupee(₹)'>Rupee(₹)</option>
                        <option value='US Dollar($)'>US Dollar($)</option>
                        <option value='Pound Sterling(£)'>Pound Sterling(£)</option>
                        <option value='Euro(€)'>Euro(€)</option>
                        <option value='Kuwaiti Dinar(KD)'>Kuwaiti Dinar(KD)</option>
                        <option value='Japanese Yen(¥)'>Japanese Yen(¥)</option>
                        <option value='Russian Ruble(₽)'>Russian Ruble(₽)</option>
                        <option value='Mexican Peso(Mex$)'>Mexican Peso(Mex$)</option>
                        <option value='Polish Zloty(zł)'>Polish Zloty(zł)</option>
                        <option value='Swedish Krona(kr)'>Swedish Krona(kr)</option>
                    </select>
                    </button>
                    
                </div>
                <div className={generalStyles.sharing}>
                <IntlProvider locale={lanVal} messages={messages[lanVal]}><h2><FormattedMessage id="sharing" defaultMessage="Sharing" value={lanVal}></FormattedMessage></h2></IntlProvider>
                    <div className={generalStyles.tg}>
                    <IntlProvider locale={lanVal} messages={messages[lanVal]}><p><FormattedMessage id="sh" defaultMessage="Display a popup to allow sharing your traders with others" value={lanVal}></FormattedMessage></p></IntlProvider>
                    <label className={generalStyles.switch}>
                        <input type='checkbox'></input>
                        <span className={generalStyles.slider}></span> 
                    </label>
                    </div>
                </div>
                </div>
        </div>
    )
}

export default General;
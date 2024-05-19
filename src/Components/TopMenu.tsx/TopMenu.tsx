import bellIcon from '../../images/bellIcon.png';
import menuIcon from '../../images/menuIcon.png';
import searchIcon from '../../images/searchIcon.png';
import phoneIcon from '../../images/phoneIcon.svg';
import './TopMenu.css'
import { useState } from 'react';
import { ClickableText } from './ClickableText';
import { PersonallyDetails } from '../PersonallyDetails/PesonallyDetails';

export const TopMenu = () => {
    const [selectedText, setSelectedText] = useState('');

    const handleClick = (text: string) => {
        setSelectedText(text);
    };
    const handleSearch = () => {
    };
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', width: '82%', background: '#2785ba', padding: '10px', marginTop: '20px', margin: '10px', borderRadius: '10px' }}>
                <div style={{ display: 'flex', justifyContent: 'flex-start', width: '50%' }}>
                    <button onClick={handleSearch} style={{ border: 'none', background: 'none', cursor: 'pointer', alignSelf: 'center' }}>
                        <img src={menuIcon} style={{ width: '15px', height: '15px', marginRight: '0px' }} />
                    </button>
                    <button onClick={handleSearch} style={{ border: 'none', background: 'none', cursor: 'pointer', alignSelf: 'center' }}>
                        <img src={bellIcon} style={{ width: '15px', height: '15px', marginRight: '0px' }} />
                    </button>
                    <div style={{ display: 'flex', alignItems: 'center', background: 'white', borderRadius: '10px', width: '160px', borderColor: '#0054A6', height: '20px', padding: '0 5px' }}>
                        <button onClick={handleSearch} style={{ border: 'none', background: 'none', cursor: 'pointer', alignSelf: 'center', height: '15px' }}>
                            <img src={searchIcon} style={{ width: '15px', height: '15px', marginRight: '10px' }} alt="Search" />
                        </button>
                        <input dir='rtl' type="text" placeholder="חפשו זהות לקוח" style={{ color: '#959595', border: 'none', outline: 'none', background: 'transparent', height: '20px', width: '120px', marginRight: '5px' }} />
                    </div>
                    <div style={{ color: 'white', fontSize: '10px', marginLeft: '10px', alignContent: 'center' }}>זהות לקוח</div>

                </div>
                <div style={{ display: 'flex' }}>
                    <ClickableText text="תפקידי לקוח" isClicked={selectedText === "תפקידי לקוח"} onClick={() => handleClick("תפקידי לקוח")} />
                    <ClickableText text="משימות ותהליכים" isClicked={selectedText === "משימות ותהליכים"} onClick={() => handleClick("משימות ותהליכים")} />
                    <ClickableText text="מסמכים ומכתבים" isClicked={selectedText === "מסמכים ומכתבים"} onClick={() => handleClick("מסמכים ומכתבים")} />
                    <ClickableText text="ועדות" isClicked={selectedText === "ועדות"} onClick={() => handleClick("ועדות")} />
                    <ClickableText text="כספים" isClicked={selectedText === "כספים"} onClick={() => handleClick("כספים")} />
                    <ClickableText text="גמלאות" isClicked={selectedText === "גמלאות"} onClick={() => handleClick("גמלאות")} />
                    <ClickableText text="פרטי לקוח" isClicked={selectedText === "פרטי לקוח"} onClick={() => handleClick("פרטי לקוח")} />
                </div>
            </div >


            <div style={{ display: 'flex', justifyContent: 'flex-end', width: '82%', background: '#58ACE8', padding: '10px', margin: '10px', borderRadius: '10px' }}>
                <div className="separator">
                    <span style={{ color: 'white', fontSize: '10px', marginLeft: '5px', alignContent: 'center' }}>ת. פרישה: 00/00/2025</span>
                </div>
                <div className="separator">
                    <span style={{ color: 'white', fontSize: '10px', marginLeft: '5px', alignContent: 'center' }}>הרצליה</span>
                </div>
                <div className="separator">
                    <span style={{ color: 'white', fontSize: '10px', marginLeft: '5px', alignContent: 'center' }}>052-5555555</span>
                    <img src={phoneIcon} style={{ width: '15px', height: '15px', marginLeft: '5px', marginBottom: '-3px' }} alt="phone" />
                </div>
                <div className="separator">
                    <span style={{ color: 'white', fontSize: '10px', marginLeft: '5px', alignContent: 'center' }}>נשוי</span>
                </div>
                <div className="separator">
                    <span style={{ color: 'white', fontSize: '10px', marginLeft: '5px', alignContent: 'center' }}>גיל: 00</span>
                </div>
                <div className="separator">
                    <span style={{ color: 'white', fontSize: '10px', marginLeft: '5px', alignContent: 'center' }}>ת. לידה: 01/01/1970</span>
                </div>
                <div className="separator">
                    <span style={{ color: 'white', fontSize: '10px', marginLeft: '5px', alignContent: 'center' }}>זכר</span>
                </div>
                <div className="separator">
                    <span style={{ color: 'white', fontSize: '10px', marginLeft: '5px', alignContent: 'center' }}>33223322-3</span>
                </div>
                <div className="separator">
                    <span style={{ color: 'white', fontSize: '10px', marginLeft: '5px', alignContent: 'center' }}>ישראל ישראלי</span>
                </div>
            </div>
            <div style={{
                display: 'flex', justifyContent: 'flex-end', width: '82%', height: '10px', background: 'white', padding: '10px', margin: '10px', borderRadius: '10px', boxShadow: '0px 4px 4px 0px #00000040'
            }}>

                <div style={{
                    fontSize: '10px', color: '#3691BE',
                    fontWeight: 'bold', width: '90%'
                }}>פרטים אישיים</div>
            </div>
            <PersonallyDetails />

        </div >

    )
}
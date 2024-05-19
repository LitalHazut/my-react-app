import './PersonallyDetails.css'

export const PersonallyDetails = () => {
    return (
        <div >
            <div style={{ width: '65%', display: 'flex', justifyContent: 'space-between' }}>
                <div style={{
                    fontSize: '10px',
                    width: '100px',
                    height: '20px',
                    borderRadius: '10px 10px 0 0',
                    background: '#FFFCE4',
                    fontWeight: 'bold',
                    marginLeft: '135px',
                    boxShadow: '0px 0px 4px 4px #58ACE81A',
                }}>מעמד משרד הפנים</div>
                <div style={{
                    fontSize: '10px',
                    width: '100px',
                    height: '20px',
                    borderRadius: '10px 10px 0 0',
                    background: '#FFFCE4',
                    fontWeight: 'bold',
                    boxShadow: '0px 0px 4px 4px #58ACE81A',
                }}>פרטים עיקריים</div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', fontSize: '10px' }}>
                <div className="template" style={{ display: 'flex', flexDirection: 'row-reverse', alignItems: 'flex-start' }}>
                    <div style={{ textAlign: 'right', marginRight: '10px', whiteSpace: 'nowrap' }}>
                        <div>
                            <span style={{ display: 'inline-block' }}>אורח</span>
                            <span style={{ fontWeight: 'bold', display: 'inline-block', width: '70px', }}>:מעמד</span>
                        </div>
                        <div>
                            <span style={{ display: 'inline-block' }}>00/00/2025</span>
                            <span style={{ fontWeight: 'bold', display: 'inline-block', width: '70px', }}>:תקופה</span>
                        </div>
                        <div>
                            <span style={{ display: 'inline-block' }}></span>
                            <span style={{ fontWeight: 'bold', display: 'inline-block', width: '70px', }}>:אשרה</span>
                        </div>
                    </div>
                    <div style={{ textAlign: 'left' }}>
                        <div>
                            <span style={{ display: 'inline-block', marginRight: '10px', width: '80px', textAlign: 'right' }}>כן</span>
                            <span style={{ fontWeight: 'bold', display: 'inline-block', width: '100px' }}>: תושב</span>
                        </div>
                        <div>
                            <span style={{ display: 'inline-block', marginRight: '10px', width: '80px', textAlign: 'right' }}>00/00/2025</span>
                            <span style={{ fontWeight: 'bold', display: 'inline-block', width: '100px' }}>:תקופה</span>
                        </div>
                        <div>
                            <span style={{ display: 'inline-block', marginRight: '10px', width: '80px', textAlign: 'right' }}></span>
                            <span style={{ fontWeight: 'bold', display: 'inline-block', width: '70px', }}>:נימוק</span>
                        </div>
                    </div>

                </div>

                <div className="template" style={{ display: 'flex', flexDirection: 'row-reverse', alignItems: 'flex-start' }}>
                    <div style={{ textAlign: 'right', marginRight: '20px', whiteSpace: 'nowrap', position: 'relative' }}>
                        <div>
                            <span style={{ display: 'inline-block' }}>ישראל</span>
                            <span style={{ fontWeight: 'bold', display: 'inline-block', width: '70px', }}> :שם פרטי </span>
                        </div>
                        <div>
                            <span style={{ display: 'inline-block' }}>ישראלי</span>
                            <span style={{ fontWeight: 'bold', display: 'inline-block', width: '70px', }}> :שם משפחה </span>
                        </div>

                    </div>

                    <div style={{ textAlign: 'left' }}>
                        <div>
                            <span style={{ display: 'inline-block', marginRight: '10px', width: '80px', textAlign: 'right' }}>ישראל</span>
                            <span style={{ fontWeight: 'bold', display: 'inline-block', width: '100px' }}> :שם האב </span>
                        </div>
                        <div>
                            <span style={{ display: 'inline-block', marginRight: '10px', width: '80px', textAlign: 'right' }}>ישראלי</span>
                            <span style={{ fontWeight: 'bold', display: 'inline-block', width: '100px' }}> :שם האם </span>
                        </div>
                        <div>
                            <span style={{ display: 'inline-block', marginRight: '10px', width: '80px', textAlign: 'right' }}>ישראלי</span>
                            <span style={{ fontWeight: 'bold', display: 'inline-block', width: '100px' }}> :שם הסב </span>
                        </div>
                    </div>

                </div>

                <div className="template" style={{ display: 'flex', flexDirection: 'row-reverse', alignItems: 'flex-start' }}>
                    <div style={{ textAlign: 'right', marginRight: '20px', whiteSpace: 'nowrap' }}>
                        <div>
                            <span style={{ display: 'inline-block' }}>01/01/1970</span>
                            <span style={{ fontWeight: 'bold', display: 'inline-block', width: '70px', }}> :כניסה ראשונה  </span>
                        </div>
                    </div>
                    <div style={{ textAlign: 'left' }}>
                        <div>
                            <span style={{ display: 'inline-block', marginRight: '10px', width: '80px', textAlign: 'right' }}>00/00/2025</span>
                            <span style={{ fontWeight: 'bold', display: 'inline-block', width: '100px' }}> :תאריך כניסה </span>
                        </div>
                        <div>
                            <span style={{ display: 'inline-block', marginRight: '10px', width: '80px', textAlign: 'right' }}>00/00/2025</span>
                            <span style={{ fontWeight: 'bold', display: 'inline-block', width: '100px' }}> :תאריך יציאה </span>
                        </div>
                    </div>
                </div>
                <div className="template" style={{ display: 'flex', flexDirection: 'row-reverse', alignItems: 'flex-start' }}>
                    <div style={{ textAlign: 'right', marginRight: '20px', whiteSpace: 'nowrap' }}>
                        <div>
                            <span style={{ display: 'inline-block' }}>ישראל</span>
                            <span style={{ fontWeight: 'bold', display: 'inline-block', width: '70px', }}> :תעודת זהות </span>
                        </div>
                        <div>
                            <span style={{ display: 'inline-block' }}>ישראלי</span>
                            <span style={{ fontWeight: 'bold', display: 'inline-block', width: '70px', }}> :מעמד משפטי </span>
                        </div>
                    </div>
                    <div style={{ textAlign: 'left' }}>
                        <div>
                            <span style={{ display: 'inline-block', marginRight: '10px', width: '80px', textAlign: 'right' }}>זכר</span>
                            <span style={{ fontWeight: 'bold', display: 'inline-block', width: '100px' }}> :מגדר </span>
                        </div>

                    </div>

                </div>
                <div className="template" style={{ display: 'flex', flexDirection: 'row-reverse', alignItems: 'flex-start' }}>
                    <div style={{ textAlign: 'right', marginRight: '20px', whiteSpace: 'nowrap' }}>
                        <div>
                            <span style={{ display: 'inline-block' }}>01/01/1970</span>
                            <span style={{ fontWeight: 'bold', display: 'inline-block', width: '70px', }}> :תעודת עלייה  </span>
                        </div>
                    </div>
                    <div style={{ textAlign: 'left' }}>
                        <div>
                            <span style={{ display: 'inline-block', marginRight: '10px', width: '80px', textAlign: 'right' }}>לא</span>
                            <span style={{ fontWeight: 'bold', display: 'inline-block', width: '100px' }}>:הגירה </span>
                        </div>

                    </div>
                </div>
                <div className="template" style={{ display: 'flex', flexDirection: 'row-reverse', alignItems: 'flex-start' }}>
                    <div style={{ textAlign: 'right', marginRight: '20px', whiteSpace: 'nowrap' }}>
                        <div>
                            <span style={{ display: 'inline-block' }}>01/01/1970</span>
                            <span style={{ fontWeight: 'bold', display: 'inline-block', width: '70px', }}> :תעודת לידה </span>
                        </div>
                        <div>
                            <span style={{ display: 'inline-block' }}>00/00/2025</span>
                            <span style={{ fontWeight: 'bold', display: 'inline-block', width: '70px', }}> : תאריך פרישה </span>
                        </div>
                    </div>
                    <div style={{ textAlign: 'left' }}>
                        <div>
                            <span style={{ display: 'inline-block', marginRight: '10px', width: '80px', textAlign: 'right' }}></span>
                            <span style={{ fontWeight: 'bold', display: 'inline-block', width: '100px' }}> :תאריך פטירה </span>
                        </div>
                    </div>

                </div>
                <div className="template" style={{ display: 'flex', flexDirection: 'row-reverse', alignItems: 'flex-start' }}>
                    <div style={{ textAlign: 'right', marginRight: '20px', whiteSpace: 'nowrap' }}>
                        <div>
                            <span style={{ display: 'inline-block' }}>-</span>
                            <span style={{ fontWeight: 'bold', display: 'inline-block', width: '70px', }}> : אזרחות זרה</span>
                        </div>
                    </div>
                    <div style={{ textAlign: 'left', marginRight: '30px' }}>
                        <div>
                            <span style={{ display: 'inline-block', marginRight: '10px', width: '80px', textAlign: 'right' }}>-</span>
                            <span style={{ fontWeight: 'bold', display: 'inline-block', width: '100px' }}>:תקופה נפקדת </span>
                        </div>

                    </div>
                </div>
                <div className="template" style={{ display: 'flex', flexDirection: 'row-reverse', alignItems: 'flex-start' }}>
                    <div style={{ textAlign: 'right', marginRight: '20px', whiteSpace: 'nowrap' }}>
                        <div>
                            <span style={{ display: 'inline-block' }}>נשוי</span>
                            <span style={{ fontWeight: 'bold', display: 'inline-block', width: '70px', }}> :מצב משפחתי </span>
                        </div>
                        <div>
                            <span style={{ display: 'inline-block' }}>ישראל ישראלי</span>
                            <span style={{ fontWeight: 'bold', display: 'inline-block', width: '70px', }}> :בן\בת זוג </span>
                        </div>
                    </div>
                </div>
                <div className="template" style={{ display: 'flex', flexDirection: 'row-reverse', alignItems: 'flex-start' }}>
                    <div style={{ textAlign: 'right', marginRight: '20px', whiteSpace: 'nowrap' }}>
                        <div>
                            <span style={{ display: 'inline-block' }}></span>
                            <span style={{ fontWeight: 'bold', display: 'inline-block', width: '70px', }}> :דרכון זר</span>
                        </div>
                    </div>
                    <div style={{ textAlign: 'left', marginRight: '30px' }}>
                        <div>
                            <span style={{ display: 'inline-block', marginRight: '10px', width: '80px', textAlign: 'right' }}></span>
                            <span style={{ fontWeight: 'bold', display: 'inline-block', width: '100px' }}>:סל קליטה </span>
                        </div>

                    </div>
                </div>
                <div className="template" style={{ display: 'flex', flexDirection: 'row-reverse', alignItems: 'flex-start' }}>
                    <div style={{ textAlign: 'right', marginRight: '20px', whiteSpace: 'nowrap' }}>
                        <div>
                            <span style={{ display: 'inline-block' }}>מכבי</span>
                            <span style={{ fontWeight: 'bold', display: 'inline-block', width: '70px', }}> :קופת חולים </span>
                        </div>
                        <div>
                            <span style={{ display: 'inline-block' }}>00/00/2025</span>
                            <span style={{ fontWeight: 'bold', display: 'inline-block', width: '70px', }}>:תקופה</span>
                        </div>
                    </div>
                    <div style={{ textAlign: 'left' }}>
                        <div>
                            <span style={{ display: 'inline-block' }}>קיימים נתוני ניגוד עניינים </span>
                            <span style={{ fontWeight: 'bold', display: 'inline-block', width: '100px' }}> :ניגוד עניינים </span>
                        </div>
                    </div>

                </div>
                <div className="template" style={{ display: 'flex', flexDirection: 'row-reverse', alignItems: 'flex-start' }}>
                    <div style={{ textAlign: 'right', marginRight: '20px', whiteSpace: 'nowrap' }}>
                        <div>
                            <span style={{ display: 'inline-block' }}>אין נתונים להצגה</span>
                            <span style={{ fontWeight: 'bold', display: 'inline-block', width: '70px', }}> : השכלה </span>
                        </div>
                    </div>
                    <div style={{ textAlign: 'left' }}>
                        <div>
                            <span style={{ display: 'inline-block' }}></span>
                            <span style={{ fontWeight: 'bold', display: 'inline-block', width: '100px' }}> :מאפיין יישות </span>
                        </div>
                    </div>

                </div>
                <div className="template" style={{ display: 'flex', flexDirection: 'row-reverse', alignItems: 'flex-start' }}>
                    <div style={{ textAlign: 'right', marginRight: '20px', whiteSpace: 'nowrap' }}>
                        <div>
                            <span style={{ display: 'inline-block' }}>אין נתונים להצגה</span>
                            <span style={{ fontWeight: 'bold', display: 'inline-block', width: '70px', }}> : השכלה </span>
                        </div>
                    </div>
                    <div style={{ textAlign: 'left' }}>
                        <div>
                            <span style={{ display: 'inline-block' }}></span>
                            <span style={{ fontWeight: 'bold', display: 'inline-block', width: '100px' }}> :מאפיין יישות </span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
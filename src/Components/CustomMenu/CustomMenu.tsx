import React, { useState } from 'react';
import { Menu } from 'antd';
import Avatar from '../../images/Avatar.png';
import star from '../../images/star.png';
import { StarFilled } from '@ant-design/icons';
import { StarOutlined } from '@mui/icons-material';

const { SubMenu } = Menu;

export const CustomMenu = () => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    return (
        <div style={{ position: 'fixed', top: 0, right: 0, height: '100%', backgroundColor: '#2785ba', zIndex: 1000, width: collapsed ? '120px' : '175px', transition: 'width 0.3s' }}>
            <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', paddingTop: '10px', cursor: 'pointer' }} onClick={toggleCollapsed}>
                <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                    {!collapsed ? (
                        <>
                            <svg width="27" height="27" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '10px', marginLeft: '-10px', transform: 'rotate(180deg)' }}>
                                <g filter="url(#filter0_d_107_5688)">
                                    <circle cx="18.5" cy="14.5" r="14.5" fill="#58ACE8" />
                                </g>
                                <path d="M23.141 8.26326V6.75349C23.141 6.62263 22.9906 6.55036 22.8891 6.63044L14.0844 13.5074C14.0096 13.5656 13.949 13.6401 13.9074 13.7252C13.8658 13.8103 13.8441 13.9038 13.8441 13.9986C13.8441 14.0934 13.8658 14.1869 13.9074 14.272C13.949 14.3571 14.0096 14.4316 14.0844 14.4898L22.8891 21.3668C22.9926 21.4469 23.141 21.3746 23.141 21.2437V19.734C23.141 19.6383 23.0961 19.5465 23.0219 19.4879L15.9906 13.9996L23.0219 8.50935C23.0961 8.45076 23.141 8.35896 23.141 8.26326Z" fill="white" />
                            </svg>
                            <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
                                <img src={Avatar} alt="שלום" style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '30px' }} />
                            </div>
                        </>
                    ) : (
                        <>
                            <svg width="27" height="27" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '10px', marginLeft: '-10px' }}>
                                <g filter="url(#filter0_d_107_5688)">
                                    <circle cx="18.5" cy="14.5" r="14.5" fill="#58ACE8" />
                                </g>
                                <path d="M23.141 8.26326V6.75349C23.141 6.62263 22.9906 6.55036 22.8891 6.63044L14.0844 13.5074C14.0096 13.5656 13.949 13.6401 13.9074 13.7252C13.8658 13.8103 13.8441 13.9038 13.8441 13.9986C13.8441 14.0934 13.8658 14.1869 13.9074 14.272C13.949 14.3571 14.0096 14.4316 14.0844 14.4898L22.8891 21.3668C22.9926 21.4469 23.141 21.3746 23.141 21.2437V19.734C23.141 19.6383 23.0961 19.5465 23.0219 19.4879L15.9906 13.9996L23.0219 8.50935C23.0961 8.45076 23.141 8.35896 23.141 8.26326Z" fill="white" />
                            </svg>
                            <div style={{ display: 'flex', justifyContent: 'center', width: '60%' }}>
                                <img src={Avatar} alt="שלום" style={{ width: '40px', height: '40px', borderRadius: '50%', }} />
                            </div>
                        </>
                    )}
                </div>
            </div>
            {collapsed ? (
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginLeft: '3px', marginBottom: '5px' }}>
                    <p style={{ fontSize: '10px', marginTop: '5px', marginBottom: '0', color: 'white' }}>,שלום</p>
                    <p style={{ fontSize: '10px', marginTop: '0', marginBottom: '0', color: 'white' }}>ישראל ישראלי</p>
                </div>
            ) : (
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginLeft: '70px', marginBottom: '5px' }}>
                    <p style={{ fontSize: '10px', marginTop: '5px', marginBottom: '0', color: 'white' }}>,שלום</p>
                    <p style={{ fontSize: '10px', marginTop: '0', marginBottom: '0', color: 'white' }}>ישראל ישראלי</p>
                </div>
            )}
            <div style={{ textAlign: 'right', color: 'white', paddingTop: '10px' }}>
                {!collapsed ? (
                    <>
                        <div>
                            <div style={{ fontSize: '10px', color: 'white', marginRight: '7px', fontWeight: 'bold' }} >
                                ניהול כללי
                            </div>
                            <div style={{ color: 'white', fontSize: '8px', marginRight: '15px' }}>ניהול משימות</div>
                            <div style={{ color: 'white', fontSize: '8px', marginRight: '15px' }}>שליחת מסרון מלל חופשי</div>
                        </div>
                        <div style={{ paddingTop: '30px' }}>
                            <div style={{ fontSize: '10px', color: 'white', marginRight: '7px', fontWeight: 'bold' }} >
                                ניהול גמלאות
                            </div>
                            <div style={{ color: 'white', fontSize: '8px', marginRight: '15px' }}>
                                'אופציה א
                            </div>
                            <div style={{ color: 'white', fontSize: '8px', marginRight: '15px' }}>
                                'אופציה ב
                            </div>
                        </div>
                        <div style={{ paddingTop: '30px' }}>
                            <div style={{ fontSize: '10px', color: 'white', marginRight: '7px', fontWeight: 'bold' }} >
                                תפריט
                            </div>
                            <div style={{ color: 'white', fontSize: '8px', marginRight: '15px' }}>
                                'אופציה א
                            </div>
                            <div style={{ color: 'white', fontSize: '8px', marginRight: '15px' }}>
                                'אופציה ב
                            </div>
                        </div>
                        <div style={{ paddingTop: '30px' }}>
                            <div style={{ fontSize: '10px', color: 'white', marginRight: '7px', fontWeight: 'bold' }} >
                                תפריט
                            </div>
                            <div style={{ color: 'white', fontSize: '8px', marginRight: '15px' }}>
                                'אופציה א
                            </div>
                            <div style={{ color: 'white', fontSize: '8px', marginRight: '15px' }}>
                                'אופציה ב
                            </div>
                        </div>
                        <div style={{ paddingTop: '30px' }}>
                            <div style={{ fontSize: '10px', color: 'white', marginRight: '7px', fontWeight: 'bold' }} >
                                תפריט
                            </div>
                            <div style={{ color: 'white', fontSize: '8px', marginRight: '15px' }}>
                                'אופציה א
                            </div>
                            <div style={{ color: 'white', fontSize: '8px', marginRight: '15px' }}>
                                'אופציה ב
                            </div>
                        </div>

                    </>
                ) : (
                    <div>
                        {[...Array(6)].map((_, index) => (
                            <div key={index} style={{
                                marginRight: '5px', padding: '15px', display: 'flex', justifyContent: 'center'

                            }}>
                                <img src={star} style={{ width: '15px', height: '15px' }} />
                            </div>
                        ))}
                    </div>

                )}
            </div>
        </div>
    );
};

export default CustomMenu;

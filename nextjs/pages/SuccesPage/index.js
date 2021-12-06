import React from 'react';

const index = () => {
    return (
        <div className="grid-rows-none">
            <div className="bg-black h-16 flex justify-center items-center">
                <p style={{ color: "white", fontSize: 40, fontFamily: "inherit" }}>Yolculuğa Başla</p>
            </div>
            <div className="flex justify-center items-center">
                <div>
                    Tamamlandı...
                </div>
            </div>
        </div>
    );
}

export default index;

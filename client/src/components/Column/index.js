import React from "react";
import "./style.css";

function Column({children}) {

    return (
        <div className="col-sm font-item">
            <div className="row">
                <div className="col-sm">
                    <ul>
                        {children}
                    </ul>
                </div>
            </div>

        </div>
    );
}

export default Column;
import React from "react";
import "./style.css";

function Column({children}) {

    return (
        <div className="col-sm">
            <div className="row">
                <div className="col">
                    <ul>
                        {children}
                    </ul>
                </div>
            </div>

        </div>
    );
}

export default Column;
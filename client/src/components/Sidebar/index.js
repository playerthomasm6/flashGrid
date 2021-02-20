import React from "react";
import "./styles.css"
import AccountBar from '../AccountBar'

function Sidebar() {
    return (
        <div>
         <AccountBar/>
         <div className="row padding light-border">
                    <div className="col padding">
                        <h6>This is a title of a thing</h6>
                        <p>This is describing that thing in more detail.  Think of all the helpfull information we could add here.
                            Maybe some tips or other kinds of words and such.  The skys the limits.
                        </p>
                    </div>
                </div>
        </div>          
    );
}

export default Sidebar; 

import React from "react";
import "./style.css";
import Jumbotron from "../Jumbotron";
import Sidebar from "../Sidebar";
import Column from "../Column";

function TasksContainer() {
    const listItems = ["Asign Team Members", "Fight the Mafia", "Implement a Hit"]
    return (
        <div className="container-fluid space-out">

            <div className="row">
                <Column>
                    {listItems.map(item => (
                        <p>{item}</p>
                    ))}
                </Column>
            </div>

        </div>
    );
}

export default TasksContainer;
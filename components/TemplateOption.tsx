import React from "react";
import Calendar from "./icons/calendar";
import Peoples from "./icons/Peoples";

interface Props {
    type: string;
    selectedTemplate: string;
    selectTemplate: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const TemplateOption: React.FunctionComponent<Props> = ({ type, selectedTemplate, selectTemplate }) => {
    enum Color {
        idle = "black",
        active = "#4486FB",
    };

    function getIcon() {
        if(type === 'Calendar') {
            return (
                <Calendar
                    color={
                        getChecked() ? Color.active : Color.idle
                    }
                ></Calendar>
            )
        } else {
            return (
                <Peoples
                    color={
                        getChecked() ? Color.active : Color.idle
                    }
                ></Peoples>
            )
        }
    }

    function getChecked() {
        if(type === "Calendar") {
            return selectedTemplate === "first"
        } 
        else {
            return selectedTemplate === "second"
        }
    }

    return (
        <div
            className={
                (getChecked()
                    ? "border-blue-300 "
                    : "border-gray-300 ") +
                "flex-1 flex border flex-col relative transition-4"
            }
        >
            <div
                className={
                    (getChecked()
                        ? "border-b-blue-300 "
                        : "border-b-gray-300 ") +
                    "border flex flex-col items-center py-2 transition-4"
                }
            >
            {getIcon()}
            </div>
            <div className="flex flex-col py-5 items-center">
                <span className="font-medium">First option</span>
                <span className="font-regular">Description for</span>
                <span>this option</span>
            </div>
            <input
                type="radio"
                name="template"
                value={ type === 'Calendar' ? 'first' : 'second'}
                checked={getChecked()}
                onChange={selectTemplate}
                className="absolute cursor-pointer left-0 right-0 top-0 bottom-0 opacity-0"
            ></input>
        </div>
    );
};

export default TemplateOption;

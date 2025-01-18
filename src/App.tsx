import { useState } from "react";
import TemplateOption from "../components/TemplateOption";

function App() {
    const [selectedTemplate, setSelectedTemplate] = useState('second');

    function selectTemplate(event: React.ChangeEvent<HTMLInputElement>) {
        const selected = event.target.value;
        setSelectedTemplate(selected);
    }

    return (
        <div className="sm:container mx-auto ">
            <div className="w-3/5 mx-auto font-roboto shadow-xl">
                <div className="px-8 py-10 text-2xl font-medium shadow-xl">
                    Choose a template
                </div>
                <div className="mt-20 flex justify-center gap-6 w-2/3 mx-auto">
                    <TemplateOption type="Calendar" selectedTemplate={selectedTemplate} selectTemplate={selectTemplate}></TemplateOption>
                    <TemplateOption type="Peoples" selectedTemplate={selectedTemplate} selectTemplate={selectTemplate}></TemplateOption>
                </div>
                <div className="px-10 mt-8 font-regular">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                </div>
                <div className="mt-24 px-10 pb-6">
                    <button className="bg-blue-500 text-white py-2.5 px-10 rounded text-xl">
                        Do it!
                    </button>
                    <button className="border border-gray-400 py-2.5 px-10 rounded text-xl ml-5">
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;

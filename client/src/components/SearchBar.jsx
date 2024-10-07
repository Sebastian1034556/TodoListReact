import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef } from "react";

export function SearchBar() {
    const inputReference = useRef(null);
    
    useEffect(() => {
        inputReference.current.focus();
    }, []);
    
    return (
        <>
            <div className="relative w-full">
                <input
                    id="searchBar"
                    type="search"
                    className="w-full rounded-full p-1 pl-10 border-2 border-gray-500 focus:border-gray-800 shadow-md focus:shadow-lg transition duration-200 outline-none bg-gray-100"
                    placeholder="Search"
                    ref={inputReference}
                />
                <FontAwesomeIcon
                    icon={faSearch}
                    className="absolute top-1/2 left-4 transform -translate-y-1/2 text-slate-500"
                />
            </div>
        </>
    );
}

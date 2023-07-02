import { HiOutlineSearch } from "react-icons/hi";
import { useState, useRef } from "react";

const SearchBar = () => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    //TODO: handle search
  };

  return (
    <form onSubmit={submitHandler} className=" w-full" >
      <div
        className={`nav__searchbar ms:w-auto w-full md:py-2 flex items-center rounded-3xl border bg-search-bg-color-light dark:bg-search-bg-color-dark ${
          isFocused ? "border-blue-500" : "border dark:border-black"
        }`}
      >
        <HiOutlineSearch
          className={`w-5 h-5  mx-2 ${
            isFocused ? "stroke-blue-500" : "stroke-search-text-color"
          }`}
        />
        <input
          type="text"
          placeholder="Search Twitter"
          ref={inputRef}
          className=" w-full px-0 text-xs mmd:text-base py-[4px] mmd:px-[12px] text-black dark:text-white bg-transparent focus:outline-none"
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>
    </form>
  );
};

export default SearchBar;

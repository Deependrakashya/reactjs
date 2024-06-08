import { useEffect, useState, useRef, useCallback } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllow, setNumberAllow] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);
  const [copytext, setcopytext] = useState("copy");

  useEffect(() => {
    const generatePassword = () => {
      let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      let symbols = `!#$%^&*()_{}?><"'`;
      let numbers = "1234567890";
      setcopytext("copy");
      if (charAllowed) {
        characters += symbols;
      }
      if (numberAllow) {
        characters += numbers;
      }

      let tempPassword = "";
      let hasNumber = false;
      let hasSymbol = false;

      while (tempPassword.length < length) {
        let char = characters.charAt(
          Math.floor(Math.random() * characters.length)
        );
        tempPassword += char;

        if (numberAllow && numbers.includes(char)) {
          hasNumber = true;
        }
        if (charAllowed && symbols.includes(char)) {
          hasSymbol = true;
        }
      }

      // Ensure the password meets the required criteria
      if ((numberAllow && !hasNumber) || (charAllowed && !hasSymbol)) {
        return generatePassword();
      }

      setPassword(tempPassword);
      console.log("Generated password: " + tempPassword);
    };

    generatePassword();
  }, [length, numberAllow, charAllowed]);

  const toggleNumberAllow = () => {
    setNumberAllow((prev) => !prev);
    console.log(numberAllow);
  };

  const toggleCharAllowed = () => {
    setCharAllowed((prev) => !prev);
    console.log(charAllowed);
  };

  const copyPassword = useCallback(() => {
    if (passwordRef.current) {
      passwordRef.current.select();
      document.execCommand("copy");
      setcopytext("Copied");
    }
  }, [password]);

  return (
    <div className="box-content m-auto mt-40 rounded-xl w-3/4  p-4 border-4 items-center justify-center flex flex-col bg-orange-300">
      <h1 className="text-blue-700 text-6xl font-extrabold mb-10">
        Password Generator
      </h1>
      <div className="w-full">
        <input
          type="text"
          className="rounded-md p-2 w-5/6 text-xl"
          readOnly
          placeholder="password"
          value={password}
          ref={passwordRef}
        />
        <button
          onClick={copyPassword}
          className="m-4 p-2 rounded-md bg-blue-600 text-xl"
        >
          {copytext}
        </button>
      </div>

      <div className="flex items-center p-2 rounded-md ">
        <input
          type="range"
          min={8}
          max={32}
          value={length}
          className="cursor-pointer"
          onChange={(e) => setLength(e.target.value)}
        />
        <label className=" font-bold m-2 text-xl">Length: {length}</label>
        <div className="symbol">
          <input type="checkbox" name="Symbols" onClick={toggleCharAllowed} />
          <label className="font-bold m-2 text-xl"> Symbol</label>
        </div>
        <div className="m-2">
          <input
            className="m-1"
            type="checkbox"
            name="Numbers"
            onClick={toggleNumberAllow}
          />
          <label className="font-bold  text-xl">Numbers</label>
        </div>
      </div>
    </div>
  );
}

export default App;

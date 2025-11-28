import React ,{useState} from 'react'

export default function DarkMode() {
  const [isDark, setIsDark] = useState(false);

    const setDarkMode = ()=>{
        document.querySelector("body").setAttribute("data-theme", "dark")
    }
    const setLightMode = ()=>{
        document.querySelector("body").setAttribute("data-theme", "light")
    }
    const toggleTheme = (e) => {
    if (e.target.checked) {
      setDarkMode();
      setIsDark(true);
    } else {
      setLightMode();
      setIsDark(false);
    }
  };

  return (
    <div>
      <label>
        Dark Mode
        <input type="checkbox" checked={isDark} onChange={toggleTheme} />
      </label>
    </div>
  );
}

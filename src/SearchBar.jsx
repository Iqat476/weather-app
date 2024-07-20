export const SearchBar = ({ theme, onSend }) => {
    const lightColor = theme === "dark" ? "#efefef" : "#333";
    const lighterColor = theme === "dark" ? "#efefef" : "#555";
    const darkColor = theme === "light" ? "#efefef" : "#555";

    return (
        <div>
            <input className="text-field" type="text" id="city"
                style={{
                    marginTop: '-30px', backgroundColor: darkColor, color: lightColor,
                    height: "40px", width: '50vw', fontSize: "200%", border: `3px solid ${lighterColor}`, borderRadius: '20px', paddingLeft: '10px'
                }} />
            <button className="hover-scale"
                style={{
                    cursor: 'pointer', marginLeft: '10px', height: "45px", width: "60px", borderRadius: '8px',
                    backgroundColor: darkColor, border: `3px solid ${lighterColor}`, transition: '0.2s'
                }} onClick={() => onSend(document.getElementById("city").value)}>
                <svg fill="none" height="24" stroke={lighterColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24">
                    <circle cx="11" cy="11" r="8" /><line x1="21" x2="16.65" y1="21" y2="16.65" />
                </svg>
            </button>
        </div>
    )
}

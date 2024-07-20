import { SearchBar } from "./SearchBar"

export const Weather = ({ theme, onSend, status, data }) => {

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <SearchBar theme={theme} onSend={onSend} />
            <div className="content"
                style={{
                    backgroundColor: `${theme === "dark" ? "#555" : "#cdcdcd"}`, width: "50vw", height: "50vh", marginTop: "20px", borderRadius: '20px',
                    display: 'flex', alignItems: 'center', flexDirection: "column", paddingLeft: '20px', paddingRight: '20px', overflow: 'hidden'
                }}>
                <h2 id="status" style={{ textWrap: 'nowrap', marginBottom: '10px' }}>
                    {status}
                </h2>
                <hr style={{ width: '80%', opacity: '1' }}></hr>
                {data && data.location && data.current ? (
                    <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <img src={data.current.condition.icon} alt="" />
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'auto', width: '100%' }}>

                            <div style={{
                                display: 'flex', justifyContent: 'space-around', gridRowStart: '1', gridRowEnd: '3', width: '100%'
                            }}>
                                <h3 style={{ fontSize: 'calc(7px + 2vmin)', fontWeight: '500' }}>
                                    {data.current.condition.text}</h3>
                            </div>
                            <div style={{
                                display: 'flex', justifyContent: 'space-around', gridRowStart: '4', gridRowEnd: '6', width: '100%'
                            }}>
                                <h3>{data.current.temp_c}°C</h3>
                                <h3>Feels like {data.current.feelslike_c}°C</h3>
                                <h3>{data.current.temp_f}°F</h3>
                            </div>
                            <div style={{
                                display: 'flex', justifyContent: 'space-around', gridRowStart: '7', gridRowEnd: '9', width: '100%'
                            }}>
                                <h3>{data.current.heatindex_f}°F Heat Index</h3>
                                <h3>{data.current.heatindex_c}°C Heat Index</h3>
                            </div>
                            <div style={{
                                display: 'flex', justifyContent: 'space-around', gridRowStart: '10', gridRowEnd: '12', width: '100%'
                            }}>
                                <h3>{data.current.humidity}% Humidity</h3>
                                <h3>{data.current.wind_kph} km/h Wind Speed {data.current.wind_dir}</h3>
                                <h3>{data.current.precip_mm}mm precipitation</h3>
                            </div>
                        </div>
                    </div>) : ""
                }
            </div>
        </div >
    )
}

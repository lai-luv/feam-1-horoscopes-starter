import horoscopesData from "./data.js";
import "./App.css";
import { useState } from "react";

const SignInfo = ({ sign, closeSignInfo, introText }) => {
  console.log(sign);
  return (
    <div className="sign-info">
      <p>{introText}</p>
      <h2>{sign.signName}</h2>
      <img src={sign.img} alt={`${sign.signName} zodiac sign symbol`} />
      <p>
        {sign.startDate} - {sign.endDate}
      </p>
      <p>Lucky Number's : {sign.luckyNumbers.toString()}</p>
      <p>Traits : {sign.traits}</p>
      <p> Today's Horoscopes:{sign.dailyHoroscope} </p>

      <button onClick={closeSignInfo}>GoBack</button>
    </div>
  );
};
const App = () => {
  const [slectedSign, setSlectedSign] = useState(null);
  const [formData, setFormData] = useState({ birthDate: "" });
  const [userSign, setUserSign] = useState(null);
  //  get the astro sign
  const signsData = horoscopesData.horoscopes.astroSigns;

  // goal: get the  current  zodiac sgin data based on a given date
  //
  //
  //
  //
  //

  const findSign = (date) => {
    const zodiacSign = signsData.find((sign) => {
      const startDate = new Date(sign.startDate + " " + date.getFullYear());
      const endDate = new Date(sign.endDate + " " + date.getFullYear());
      console.log(sign.signName, startDate, endDate);
      return date >= startDate && date <= endDate;
    });
    console.log(zodiacSign);
    return zodiacSign;
  };
  // get todats date
  const currentDate = new Date();
  const currentSign = findSign(currentDate);

  //  get end date
  const nextSignStartDate = new Date(
    currentSign.endDate + " " + currentDate.getFullYear()
  );
  console.log("before adding ", nextSignStartDate);

  //  add a day
  nextSignStartDate.setDate(nextSignStartDate.getDate() + 1);
  console.log("after adding ", nextSignStartDate);

  const nextSign = findSign(nextSignStartDate);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const userBirthDate = new Date(formData.birthDate);
    const foundSign = findSign(userBirthDate);
    setUserSign(foundSign);
    setFormData({birthDate:'',})
  };

  return (
    <>
      <h1>Horoscopes</h1>

<> <section className="about-today">
        <h2>About Today</h2>
        <p>Today is {formatDate(currentDate)}</p>
        <p> We are currently in {currentSign.signName} Season </p>
        <p>
          {nextSign.signName} Season starts on {formatDate(nextSignStartDate)}
        </p>
      </section>
      <section className="whats-your-sign">
        {userSign ? ( <SignInfo
        introText='your sign is .....'
            sign={userSign}
            closeSignInfo={() => {
              setUserSign(null);
            }}
          />): (<>
          <h2>Whats your sign</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="birthDate">
              Enter your birthday to learn you Zodiac sign.
            </label>
            
            <input
              name="birthDate"
              type="date"
              value={formData.birthDate}
              onChange={handleInputChange}
            />
            
            <button type="submit">Submit</button>
          </form></> )}

       
        
      </section>
      <section className="sign-picker">
        {slectedSign ? (
          <SignInfo
          introText='you selected .....'
            sign={slectedSign}
            closeSignInfo={() => {
              setSlectedSign(null);
            }}
          />
        ) : (
          <div className="sign-buttons">
            {" "}
            <h2>All Zodiac Sign</h2>
            <p>Choose a sign to read its Daliy Horoscopes</p>
            <div className="buttons">
              {signsData.map((sign, index) => (
                <button
                  key={sign.key}
                  className="sign-button"
                  onClick={() => setSlectedSign(sign)}
                >
                  {sign.signName}
                </button>
              ))}
            </div>
          </div>
        )}
      </section>
      </>

      
    </>
  );
};

export default App;

const formatDate = (date) => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  };
  return date.toLocaleDateString("en-US", options);
};

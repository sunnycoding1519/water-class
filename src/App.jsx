import "./App.css";
import { useState } from "react";

function App() {

  const [formData, setFormData] = useState({
    name: "",
    number: "",
    city: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("https://script.google.com/macros/s/AKfycbwXwkkdiuiw5Hru_LeQAygovWylhVs2KRO30cxnkr56qeT3RusnsHgh_VdbFpiCnnKp/exec", {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify(formData)
    });

    setSubmitted(true);
  };

  // ✅ THANK YOU PAGE
  if (submitted) {
    return (
      <div className="thankyou">
        <h1>🎉 Registration Successful</h1>
        <p>Aapka registration ho gaya hai</p>

        <a
          href="https://chat.whatsapp.com/LUn3Jfpf4gH7bvwufBIROn?mode=gi_t"
          target="_blank"
          className="whatsapp-btn"
        >
          👉 WhatsApp Group Join Karein
        </a>
      </div>
    );
  }

  return (
    <div className="main">

      {/* NAVBAR */}
      <header className="navbar">
        <div className="logo">
          <img src="/logo.png" alt="logo" />
          <div>
            <h3>Shashwat Chikitsa</h3>
            <p>Natural Healing</p>
          </div>
        </div>

        <a href="#form" className="nav-btn">Join Now</a>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-text">
          <p className="tag">💧 100% Natural Healing Therapy</p>

          <h1>Paani se Natural Healing 💧</h1>

          <p>
            Aaj ke time me stress, anxiety aur health problems bahut common ho chuki hain.
            Par kya aap jaante hain ki aapki body khud ko heal kar sakti hai — bina medicines ke?
          </p>

          <p>
            Water Healing Therapy ek aisi powerful natural technique hai jo paani ki energy ke through 
            aapke body, mind aur emotions ko balance karti hai aur andar se healing start karti hai.
          </p>

          <p>
            ✨ No Side Effects | 🌿 100% Natural | ⚡ Boost Energy
          </p>

          <div className="hero-btns">
            <a href="#form" className="btn-primary">Join Now</a>
            <a href="#about" className="btn-outline">Learn More</a>
          </div>
        </div>

        <div className="hero-img">
          <img src="/hero.jpg" alt="water healing" />
        </div>
      </section>

      {/* ABOUT */}
      <section className="about" id="about">
        <div className="about-text">
          <h2>Water Healing Therapy Kya Hai?</h2>

          <p>
            Water Healing Therapy ek holistic healing science hai jisme paani ki natural energy 
            ka use karke body ke internal system ko activate aur balance kiya jata hai.
          </p>

          <p>
            Human body me lagbhag 70% paani hota hai. Jab yeh paani energetic level par activate hota hai,
            to body ke cells revive hone lagte hain aur natural healing process automatically start ho jata hai.
          </p>

          <p>
            Aaj ke stressful lifestyle, negative thinking aur unhealthy habits ki wajah se body me energy blockage ho jata hai.
            Yeh blockage hi maximum diseases ka main reason hota hai.
          </p>

          <p>
            Water Healing Therapy isi blockage ko remove karti hai aur body ko apni natural healing mode me le aati hai.
          </p>

          <p>
            इस विशेष वेबिनार में आपको बताया जाएगा कि कैसे
            वैदिक विज्ञान और जल की शक्ति का उपयोग करके आप
            अपने जीवन में स्वास्थ्य, शांति और समृद्धि ला सकते हैं 💧
          </p>

          <div className="about-points">
            <div>✔ Body ke energy flow ko balance karta hai</div>
            <div>✔ Stress aur anxiety ko naturally reduce karta hai</div>
            <div>✔ Body ke self-healing power ko activate karta hai</div>
          </div>
        </div>

        <div className="about-img">
          <img src="/about.jpg" alt="therapy" />
        </div>
      </section>

      {/* BENEFITS */}
      <section className="benefits">
        <h2>Aapko Kin Problems Me Help Milegi?</h2>

        

        <div className="benefit-grid">
          <div>✔️ प्राकृतिक तरीके से शरीर को स्वस्थ रखने की तकनीक</div>
          <div>✔️ Water Healing के माध्यम से रोगों को कम करने के उपाय</div>
          <div>✔️ वात, पित्त, कफ संतुलन की वैदिक विधियाँ</div>
          <div>✔️ शरीर की healing power को activate करने के तरीके</div>
          <div>✔️ मानसिक शांति और सकारात्मक ऊर्जा बढ़ाने के उपाय</div>
          <div>✔️ स्वास्थ्य के साथ-साथ आर्थिक उन्नति के वैदिक रहस्य</div>
          <div>✔️ Digestion Issues</div>
          <div>✔️ Skin & Hair Problems</div>
        </div>

        <p style={{ marginTop: "20px" }}>
          ✨ Regular practice se aapko mental clarity, emotional stability aur physical energy me noticeable improvement milega.
        </p>
        <p>
          👉 यह सिर्फ एक वेबिनार नहीं, बल्कि एक
Life Transformation Experience है

🧘‍♂️ प्राकृतिक उपचार
🧠 मानसिक संतुलन
💰 जीवन में समृद्धि
        </p>
      </section>

      {/* GURU */}
      <section className="guru">
        <div className="guru-img">
          <img src="/swami ji.jpg" alt="guru" />
        </div>

        <div className="guru-text">
          <h2>Swami Bhakti Parkash Ji</h2>

          <p>
          बाबा स्वामी भक्ति प्रकाश जी अखिल भारत वर्षीय धर्म संघ, करपात्री फाउंडेशन से संबद्ध प्रतिष्ठित संत हैं। विगत 30 वर्षों से “योगी–निरोगी–उपयोगी” सूत्र पर आधारित साधना, अध्ययन एवं समाज सेवा में निरंतर सक्रिय हैं।

          आप अथर्ववेद आधारित शाश्वत चिकित्सा के गहन ज्ञाता एवं मर्मज्ञ हैं। शारीरिक, मानसिक एवं आध्यात्मिक स्वास्थ्य हेतु समाज सेवा में समर्पित हैं।
          </p>

          <div className="guru-stats">
            <div>✨ 30+ Years Experience</div>
            <div>👥 5000+ Happy Students</div>
            <div>🌿 100% Natural Healing</div>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="form-section" id="form">
        <div className="form-box">
          <h2>Ab Apni Healing Journey Start Karein</h2>

          <form onSubmit={handleSubmit}>
  <input type="text" name="name" placeholder="Your Name" onChange={handleChange} required />
  <input type="text" name="number" placeholder="Mobile Number" onChange={handleChange} required />
  <input type="text" name="city" placeholder="City" onChange={handleChange} required />

            <button type="submit">Register Now</button>
          </form>

          <p style={{ fontSize: "12px", marginTop: "10px", opacity: "0.7" }}>
            🔒 Aapki details 100% safe hain | No spam
          </p>
        </div>
      </section>

      {/* FLOATING BUTTON */}
      <a href="#form" className="floating-btn">Join Now</a>

    </div>
  );
}

export default App;
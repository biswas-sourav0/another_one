let heartCount = 0;
let coinCount = 100;
let copyCount = 0;

const heartCountEl = document.getElementById("heartCount");
const coinCountEl = document.getElementById("coinCount");
const copyCountEl = document.getElementById("copyCount");
const historyList = document.getElementById("historyList");
const clearHistoryBtn = document.getElementById("clearHistory");

// Card data
const services = [
  { name: "National Emergency Number", number: "999", category: "All" },
  { name: "Police Helpline Number", number: "999", category: "Police" },
  { name: "Fire Service Number", number: "999", category: "Fire" },
  { name: "Ambulance Service", number: "1994-999999", category: "Health" },
  { name: "Women & Child Helpline", number: "109", category: "Help" },
  { name: "Anti-Corruption Helpline", number: "106", category: "Govt." },
  { name: "Electricity Helpline", number: "16216", category: "Electricity" },
  { name: "Brac Helpline", number: "16445", category: "NGO" },
  { name: "Bangladesh Railway Helpline", number: "163", category: "Travel" }
];

// Render cards
const cardSection = document.getElementById("cardSection");
services.forEach(service => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
    <div class="card-header"><button class="heart-btn">🤍</button></div>
    <h3>${service.name}</h3>
    <p>${service.number}</p>
    <span class="badge">${service.category}</span>
    <div class="card-actions">
      <button class="copy-btn">📋 Copy</button>
      <button class="call-btn">📞 Call</button>
    </div>
  `;
  cardSection.appendChild(card);

  // Heart click
  card.querySelector(".heart-btn").addEventListener("click", () => {
    heartCount++;
    heartCountEl.textContent = heartCount;
  });

  // Copy click
  card.querySelector(".copy-btn").addEventListener("click", () => {
    navigator.clipboard.writeText(service.number);
    alert(`Copied ${service.number}`);
    copyCount++;
    copyCountEl.textContent = copyCount;
  });

  // Call click
  card.querySelector(".call-btn").addEventListener("click", () => {
    if (coinCount < 20) {
      alert("Not enough coins to make a call!");
      return;
    }
    coinCount -= 20;
    coinCountEl.textContent = coinCount;
    alert(`Calling ${service.name} (${service.number})`);

    const time = new Date().toLocaleTimeString();
    const li = document.createElement("li");
    li.textContent = `${service.name} (${service.number}) - ${time}`;
    historyList.appendChild(li);
  });
});

// Clear History
clearHistoryBtn.addEventListener("click", () => {
  historyList.innerHTML = "";
});

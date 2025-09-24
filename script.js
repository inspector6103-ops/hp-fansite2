async function loadData(file) {
  const response = await fetch(file);
  return await response.json();
}

// 인물 검색
async function searchCharacters() {
  const data = await loadData("characters_official.json");
  const input = document.getElementById("search").value.toLowerCase();
  const results = data.filter(c => c.name.toLowerCase().includes(input));
  const list = document.getElementById("results");
  list.innerHTML = results.slice(0, 20).map(c =>
    `<li>${c.name} (${c.house}) - ${c.role}</li>`
  ).join("");
}

// 주문 검색
async function searchSpells() {
  const data = await loadData("spells_official.json");
  const input = document.getElementById("spellSearch").value.toLowerCase();
  const results = data.filter(s => s.name.toLowerCase().includes(input));
  const list = document.getElementById("spellResults");
  list.innerHTML = results.slice(0, 20).map(s =>
    `<li>${s.name} (${s.korean_name}) - ${s.description}</li>`
  ).join("");
}

// 기숙사 대표 인물 불러오기
async function loadHouseMembers(house, elementId) {
  const data = await loadData("characters_official.json");
  const members = data.filter(c => c.house === house).slice(0, 10);
  document.getElementById(elementId).innerHTML =
    members.map(m => `<li>${m.name} - ${m.role}</li>`).join("");
}

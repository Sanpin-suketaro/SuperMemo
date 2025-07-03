const input = document.getElementById("memoInput");
const save = document.getElementById("saveButton");
const list = document.getElementById("memoList");
const memoCount = document.getElementById("memoCount"); 

function loadMemos() {
  const memos = JSON.parse(localStorage.getItem("memos") || "[]");
  list.innerHTML = "";
  memos.forEach(memo => {
    const li = document.createElement("li");
    li.textContent = memo;
    list.appendChild(li);
  });
  memoCount.textContent = memos.length;
}

save.addEventListener("click", () => {
  const text = input.value.trim();
  if (text === "") return;

  const memos = JSON.parse(localStorage.getItem("memos") || "[]");
  memos.push(text);
  localStorage.setItem("memos", JSON.stringify(memos));

  input.value = "";
  loadMemos(); // 再表示と件数更新
});

window.addEventListener("load", loadMemos);

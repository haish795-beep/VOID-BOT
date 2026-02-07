const btn = document.getElementById("btn");
const title = document.getElementById("title");

btn.addEventListener("click", () => {
  title.textContent = "정상 작동 중!";
});
function copyCmd() {
  navigator.clipboard.writeText("/도움말");
  alert("명령어가 복사되었습니다!");
}

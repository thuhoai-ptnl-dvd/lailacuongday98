const POSTER_URL = "Đồng chí Nguyễn Hữu Cường.png"; // đường dẫn ảnh gốc
const downloadBtn = document.getElementById("downloadBtn");

downloadBtn.addEventListener("click", async () => {
  try {
    const res = await fetch(POSTER_URL);
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Đồng chí Nguyễn Hữu Cường.png";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  } catch (err) {
    window.open(POSTER_URL, "_blank");
  }
});

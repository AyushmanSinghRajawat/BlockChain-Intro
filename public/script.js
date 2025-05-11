document.getElementById("verifyForm").addEventListener("submit", async function (e) {
  e.preventDefault();
  const id = document.getElementById("certificateId").value.trim();

  const resultHeading = document.getElementById("result");
  const detailsBox = document.getElementById("details");
  resultHeading.style.display = "none";
  detailsBox.style.display = "none";

  const res = await fetch(`/api/verify?code=${id}`);
  const data = await res.json();

  document.getElementById("verifyForm").style.display = "none";
  resultHeading.style.display = "block";

  if (data.valid) {
    resultHeading.textContent = "✅ Certificate is valid.";
    resultHeading.style.color = "green";
    detailsBox.innerHTML = `
      <table>
        <tr><th>Name</th><td>${data.name}</td></tr>
        <tr><th>Organization</th><td>${data.organization}</td></tr>
        <tr><th>Duration</th><td>${data.duration}</td></tr>
        <tr><th>Role</th><td>${data.role}</td></tr>
      </table>
    `;
    detailsBox.style.display = "block";
  } else {
    resultHeading.textContent = "❌ Certificate not found.";
    resultHeading.style.color = "red";
  }
});

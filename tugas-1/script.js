document.getElementById('huntingForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const roblox = document.getElementById('robloxUser').value;
    const role = document.getElementById('role').value;
    const isJoined = document.getElementById('rodtotem').checked;

    const statusText = isJoined ? "Obtained" : "Not Obtained";
    const statusClass = isJoined ? "obtained" : "not-obtained";

    const tableBody = document.querySelector('#participantTable tbody');
    const row = document.createElement('tr');

    row.innerHTML = `
        <td><strong>${roblox}</strong></td>
        <td>${role}</td>
        <td><span class="status-badge ${statusClass}">${statusText}</span></td>
    `;

    tableBody.appendChild(row);

    this.reset();
});

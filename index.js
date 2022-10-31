const BASE_URL = "https://melon-potent-period.glitch.me/skills";
const DELETE_URL = "https://melon-potent-period.glitch.me/skill";

// const BASE_URL = "https://golden-whispering-show.glitch.me";

document.getElementById("btn-add").addEventListener("click", () => {
  window.location.href = "add.html";
});

async function getSkillsData(url) {
  try {
    const response = await fetch(url);
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.log(error);
    return null;
  }
}

async function deleteItem(url) {
  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    window.location.reload();
  } catch (error) {
    console.log(error);
  }
}

async function getSkillsFromUrl(url) {
  const data = await getSkillsData(url);
  drawSkillsTable(data);
  console.log(data);
}

function drawSkillsTable(skills) {
  const tBody = document.getElementById("table-content");

  skills.forEach((dataItem) => {
    const contentRow = document.createElement("tr");
    const content = document.createElement("td");
    content.textContent = dataItem.id;

    const skill = document.createElement("td");
    skill.textContent = dataItem.skill;

    const btnCell = document.createElement("td");
    const deleteButton = document.createElement("button");
    deleteButton.setAttribute("class", "delete-button");
    deleteButton.textContent = "Delete skill";

    deleteButton.addEventListener("click", () => {
      alert("Skill deleted");
      deleteItem(DELETE_URL + "/" + dataItem.id);
    });

    btnCell.append(deleteButton);
    contentRow.append(content, skill, btnCell);
    tBody.append(contentRow);
  });
}

getSkillsFromUrl(BASE_URL);

const BASE_URL = "https://melon-potent-period.glitch.me/skills";

// const BASE_URL = "https://golden-whispering-show.glitch.me";

document.getElementById("btn-index").addEventListener("click", () => {
  window.location.href = "index.html";
});

async function postItemData(url, data) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(data),
    });
    const responseData = await response.json();
    window.location.href = "./index.html";
    return responseData;
  } catch (error) {
    console.log(error);
    return null;
  }
}

document.getElementById("add-skill-button").addEventListener("click", () => {
  // const skillId = document.getElementById("skill-id").value.trim();
  const skillDescription = document.getElementById("skill-descr").value.trim();

  if (skillDescription) {
    const data = {
      skill: skillDescription,
    };

    alert("Skill added");
    postItemData(BASE_URL, data);
  } else {
    alert("You failed add skill, please try again");
  }
});

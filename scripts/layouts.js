// Function to inject each page data into the main content area
function loadPage(page, button) {
  fetch(page)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("content").innerHTML = data;
    });
}

// Load the default page (dashboard) when the page first loads
document.addEventListener("DOMContentLoaded", function () {
  loadPage("../pages/dashboard.html");
});

function toggleContent(event, target) {
  document
    .querySelectorAll(".content")
    .forEach((content) => content.classList.add("hide"));
  document.querySelector(".content." + target).classList.remove("hide");
  document
    .querySelectorAll(".toggle-button")
    .forEach((button) => button.classList.remove("active"));
  event.target.classList.add("active");
}

// Function to toggle tables
function showTable(tableId) {
  const table1 = document.getElementById("table1");
  const table2 = document.getElementById("table2");
  const button1 = document.getElementById("button1");
  const button2 = document.getElementById("button2");

  if (tableId === "table1") {
    table1.classList.remove("hidden");
    table2.classList.add("hidden");
    button1.classList.add("bg-[#002855]", "text-white");
    button1.classList.remove("bg-white", "text-[#002855]");
    button2.classList.remove("bg-[#002855]", "text-white");
    button2.classList.add("bg-white", "text-[#002855]");
  } else if (tableId === "table2") {
    table2.classList.remove("hidden");
    table1.classList.add("hidden");
    button2.classList.add("bg-[#002855]", "text-white");
    button2.classList.remove("bg-white", "text-[#002855]");
    button1.classList.remove("bg-[#002855]", "text-white");
    button1.classList.add("bg-white", "text-[#002855]");
  }
}

// Function to show action dropdown
function actionmenu(event) {
  const dropdown = event.currentTarget.nextElementSibling;
  dropdown.style.display =
    dropdown.style.display === "none" || dropdown.style.display === ""
      ? "block"
      : "none";
}

//this ensures that the code inside the function runs only after the entire HTML document has been fully loaded and parsed.

document.addEventListener("DOMContentLoaded", function () {
  const topDivs = document.querySelectorAll(".top-div");
  topDivs.forEach(function (topDiv) {
    topDiv.addEventListener("click", actionmenu);
  });
});

// Function to toggle tables(more than 2 tables)
function showTable2(tableId) {
  const tables = ["table1", "table2", "table3"];
  const buttons = ["button1", "button2", "button3"];
  const activeClass = ["bg-white", "text-[#002855]"];
  const btnInitialClasses = {
    button1: ["bg-white", "text-[#002855]"],
    button2: ["bg-[#002855]", "text-white"],
    button3: ["bg-[#C61531]", "text-white"],
  };

  // Remove the active class from all buttons and restore initial classes
  buttons.forEach((buttonId) => {
    const button = document.getElementById(buttonId);
    button.classList.remove(...activeClass);
    button.classList.add(...btnInitialClasses[buttonId]);
  });

  // Add the active class to the clicked button
  const activeButton = document.getElementById(
    buttons[tables.indexOf(tableId)]
  );
  activeButton.classList.add(...activeClass);
  activeButton.classList.remove(...btnInitialClasses[activeButton.id]);

  // Hide all tables and show the selected table
  tables.forEach((id) => {
    const table = document.getElementById(id);
    if (id === tableId) {
      table.classList.remove("hidden");
    } else {
      table.classList.add("hidden");
    }
  });
}

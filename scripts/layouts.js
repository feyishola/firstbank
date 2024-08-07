// Function to inject each page data into the main content area
function loadPage(page, button) {
  fetch(page)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("content").innerHTML = data;
      initChart();
      initChart2();
    });
}

// Load the default page (dashboard) when the page first loads
document.addEventListener("DOMContentLoaded", function () {
  loadPage("../pages/dashboard.html");
});

// function to handle the click event and update the background color of the clicked list item.

document.addEventListener("DOMContentLoaded", function () {
  const navList = document.getElementById("navList");
  const navItems = navList.getElementsByClassName("nav-item");

  for (let i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener("click", function () {
      // Remove the background color from all nav items
      for (let j = 0; j < navItems.length; j++) {
        navItems[j].classList.remove("bg-[#E6B014]");
      }

      // Add the background color to the clicked nav item
      this.classList.add("bg-[#E6B014]");
    });
  }
});

// dropdown navbar handler starts

document
  .getElementById("dropdown-toggle")
  .addEventListener("click", function () {
    var dropdown = document.getElementById("dropdown-menu");
    if (dropdown.style.display === "none" || dropdown.style.display === "") {
      dropdown.style.display = "block";
    } else {
      dropdown.style.display = "none";
    }
  });

// Close the dropdown if the user clicks outside of it
window.addEventListener("click", function (e) {
  if (
    !document.querySelector(".material-icons").contains(e.target) &&
    !document.getElementById("dropdown-menu").contains(e.target)
  ) {
    document.getElementById("dropdown-menu").style.display = "none";
  }
});
// dropdown navbar handler ends

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

// Function to toggle Admin tables
function showTable3(tableId) {
  const tables = ["table1", "table2", "table3"];

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

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("statusbtn");
  btn.addEventListener("click", toggleStatus);
});

function toggleStatus() {
  const btn = document.getElementById("statusbtn");
  const statusText = document.getElementById("status");

  if (btn.innerHTML === "Re-activate") {
    btn.innerHTML = "Suspend";
    btn.classList.remove("bg-[var(--green-color)]");
    btn.classList.add("bg-[#C61531]");
    statusText.innerHTML = "Active";
    statusText.classList.remove("text-[#C61531]");
    statusText.classList.add("text-green-500");
  } else {
    btn.innerHTML = "Re-activate";
    btn.classList.remove("bg-red-500");
    btn.classList.add("bg-[var(--green-color)]");
    statusText.innerHTML = "Suspend";
    statusText.classList.remove("text-green-500");
    statusText.classList.add("text-[#C61531]");
  }
}

function showModal() {
  modal = document.getElementById("modal");
  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

function closeModal() {
  modal = document.getElementById("modal");
  modal.classList.add("hidden");
  modal.classList.remove("flex");
}

function showModal2() {
  modal = document.getElementById("modal2");
  modal.classList.remove("hidden");
  modal.classList.add("flex");
  console.log("hello");
}

function showModal3() {
  modal = document.getElementById("modal3");
  modal.classList.remove("hidden");
  modal.classList.add("flex");
  console.log("hello2");
}

// function to toggle form

function toggleSection() {
  const individualFormSection = document.getElementById(
    "individualFormSection"
  );
  const bulkUploadSection = document.getElementById("bulkUploadSection");
  const individualRadio = document.getElementById("individualRadio");
  const bulkRadio = document.getElementById("bulkRadio");

  if (individualRadio.checked) {
    individualFormSection.classList.remove("hidden");
    bulkUploadSection.classList.add("hidden");
  } else if (bulkRadio.checked) {
    individualFormSection.classList.add("hidden");
    bulkUploadSection.classList.remove("hidden");
  }
}

// ***********************************************************

// [4] incomeBreakdownDashboard.html chartjs
function initChart() {
  const ctx = document.getElementById("myChart");
  if (!ctx) return;

  const data = {
    labels: ["Motor", "Term Life", "Group Life", "Leadway Savings"],
    datasets: [
      {
        label: "Fee (Net of Probate)",
        data: [10000, 30000, 65023.26, 169302.33],
        backgroundColor: "rgba(102, 194, 165, 1)",
        borderColor: "rgba(102, 194, 165, 1)",
        borderWidth: 1,
        barPercentage: 0.3,
        categoryPercentage: 0.8,
      },
      {
        label: "VAT @ 7.5% of Fee",
        data: [750, 2000, 4876.74, 12697.67],
        backgroundColor: "rgba(252, 141, 98, 1)",
        borderColor: "rgba(252, 141, 98, 1)",
        borderWidth: 1,
        barPercentage: 0.3,
        categoryPercentage: 0.8,
      },
      {
        label: "Probate Fee",
        data: [0, 10000, 10000, 10000],
        backgroundColor: "rgba(141, 160, 203, 1)",
        borderColor: "rgba(141, 160, 203, 1)",
        borderWidth: 1,
        barPercentage: 0.3,
        categoryPercentage: 0.8,
      },
    ],
  };

  const options = {
    // responsive: true,
    // animation: false,
    responsive: false,
    animation: {
      duration: 0,
    },
    layout: {
      // padding: {
      //   left: 50,
      //   right: 50,
      //   top: 60,
      //   bottom: 50,
      // },
    },
    scales: {
      y: {
        beginAtZero: true,
        stacked: true,
        title: {
          display: true,
          text: "Amount (N)",
          color: "#333333",
        },
        ticks: {
          color: "#333333",
        },
      },
      x: {
        stacked: true,
        title: {
          display: true,
          text: "Products",
          color: "#333333",
        },
        ticks: {
          color: "#333333",
        },
        grid: {
          display: false,
        },
        // barPercentage: 0.9,
        // categoryPercentage: 0.1,
      },
    },
    plugins: {
      legend: {
        position: "right",
        align: "end",
        color: "#333333",
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          padding: 20,
        },
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return tooltipItem.dataset.label + ": ₦" + tooltipItem.raw;
          },
        },
      },
      datalabels: {
        anchor: "center",
        align: "center",
        color: "#333333",
        font: {
          weight: "normal",
          size: 11,
        },
      },
    },
    // maintainAspectRatio: true,
  };

  new Chart(ctx, {
    type: "bar",
    data: data,
    options: options,
    plugins: [ChartDataLabels],
  });
}

// [5] fullReportDashboard.html chartjs
function initChart2() {
  const ctx = document.getElementById("myChart2");
  if (!ctx) return;

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      datasets: [
        {
          label: "Motor",
          data: [137, 181, 57, 127, 169, 80, 21],
          backgroundColor: "rgba(141, 211, 199, 1)",
          borderColor: "rgba(141, 211, 199, 1)",
          borderWidth: 1,
          pointStyle: "circle",
        },
        {
          label: "Term Life",
          data: [83, 110, 113, 39, 111, 153, 83],
          backgroundColor: "rgba(255, 255, 179, 1)",
          borderColor: "rgba(255, 255, 179, 1)",
          borderWidth: 1,
          pointStyle: "circle",
        },
        {
          label: "Group Life",
          data: [70, 75, 54, 153, 127, 43, 127],
          backgroundColor: "rgba(190, 186, 218, 1)",
          borderColor: "rgba(190, 186, 218, 1)",
          borderWidth: 1,
          pointStyle: "circle",
        },
        {
          label: "Leadway Savings",
          data: [68, 165, 183, 185, 42, 100, 61],
          backgroundColor: "rgba(251, 128, 114, 1)",
          borderColor: "rgba(251, 128, 114, 1)",
          borderWidth: 1,
          pointStyle: "circle",
        },
      ],
    },

    options: {
      responsive: false,
      animation: {
        duration: 0,
      },
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: "Amount (000)",
            color: "#333333",
          },
          ticks: {
            color: "#333333",
          },
          grid: {
            drawBorder: false,
            drawOnChartArea: true,
            drawTicks: false,
            borderDash: [5, 5],
            color: function (context) {
              if (
                context.tick.value === 0 ||
                context.tick.value === context.chart.scales.y.max
              ) {
                return "rgba(0,0,0,0)";
              }
              return "rgba(0,0,0,0.1)";
            },
          },
        },
        x: {
          title: {
            display: true,
            text: "Period",
            color: "#333333",
          },
          ticks: {
            color: "#333333",
          },
        },
      },
      plugins: {
        legend: {
          position: "right",
          align: "end",
          color: "#333333",
          labels: {
            usePointStyle: true,
            pointStyle: "circle",
            padding: 20,
          },
        },
        datalabels: {
          anchor: "end",
          align: "bottom",
          formatter: (value) => value,
          color: "#333333",
          font: {
            weight: "normal",
            size: 10,
          },
        },
      },
    },
    plugins: [ChartDataLabels],
  });
}

// Your sectionMap object (unchanged)
const sectionMap = {
  reports: [
    "reports.html",
    "reportsDashboard.html",
    "reportsIncomeBreakdown.html",
    "reportsAll.html",
  ],
  dashboard: ["dashboard.html"],
  prospects: ["prospects.html"],
  settings: ["settings.html"],
};

// ***************************************************

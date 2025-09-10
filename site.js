/* Data for all courses  
I PUT PLACE HOLDER PICTURES SO WE CAN ADD LATER
MUST BE 4220x260 Please and name picture files as listed please */

/* 6 Week Course Data */
const COURSE_DATA = {
  "6-week": [
    {
      slug: "child-minding",
      name: "Child Minding",
      price: 750,
      img: "https://via.placeholder.com/420x260?text=Child+Minding",
      purpose: "A child minding course provides training for individuals who want to care for children in a safe, nurturing, and stimulating environment.....",
      content: ["Child development and safety","Health, first aid basics","Nutrition and play-based learning","Educational toys & activities"]
    },
    {
      slug: "cooking",
      name: "Cooking",
      price: 750,
      img: "https://via.placeholder.com/420x260?text=Cooking",
      purpose: "A Cooking course Teaches essential skills and techniques needed to prepare a variety of meals with confidence.....",
      content: ["Food safety & hygiene","Meal planning & budgeting","Ingredient preparation","Different cooking methods"]
    },
    {
      slug: "garden-maintenance",
      name: "Garden Maintenance",
      price: 750,
      img: "https://via.placeholder.com/420x260?text=Garden+Maintenance",
      purpose: "A garden maintenance course provides training on how to care for and manage gardens effectively.....",
      content: ["Soil care, planting, pruning","Pest & disease management","Lawn care & seasonal upkeep","Basic garden design & layout"]
    }
  ],
  /* 6 Month Course Data */
  "6-month": [
    {
      slug: "first-aid",
      name: "First Aid",
      price: 1500,
      img: "https://via.placeholder.com/420x260?text=First+Aid",
      purpose: "A first aid course trains individuals to respond effectively in medical emergencies.....",
      content: ["CPR basics","Wound care","Treating burns","Managing choking/fractures"]
    },
    {
      slug: "sewing",
      name: "Sewing",
      price: 1500,
      img: "https://via.placeholder.com/420x260?text=Sewing",
      purpose: "A sewing course teaches fundamental skills to create, repair and alter garments or fabric items....",
      content: ["Hand stitching","Machine sewing","Pattern reading","Fabric selection"]
    },
    {
      slug: "landscaping",
      name: "Landscaping",
      price: 1500,
      img: "https://via.placeholder.com/420x260?text=Landscaping",
      purpose: "A landscaping course provides training in designing, planning, and maintaining outdoor spaces....",
      content: ["Plant selection","Soil preparation","Hardscaping basics","Sustainable practices"]
    },
    {
      slug: "life-skills",
      name: "Life Skills",
      price: 1500,
      img: "https://via.placeholder.com/420x260?text=Life+Skills",
      purpose: "A life skills course helps individuals develop essential abilities to manage daily life and personal growth effectively.....",
      content: ["Communication","Problem solving","Financial management","Interpersonal skills"]
    }
  ]
};

function renderCourseList(type, mountId) {
  const list = COURSE_DATA[type] || [];
  const mount = document.getElementById(mountId);
  if (!mount) return;
  mount.innerHTML = "";
  list.forEach(c => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${c.img}" alt="">
      <h3>${c.name}</h3>
      <p>${c.purpose}</p>
      <a class="btn" href="course.html?type=${encodeURIComponent(type)}&slug=${encodeURIComponent(c.slug)}">More Info</a>
    `;
    mount.appendChild(card);
  });
}

function renderCourseDetail() {
  const params = new URLSearchParams(location.search);
  const type = params.get("type");
  const slug = params.get("slug");
  const course = (COURSE_DATA[type] || []).find(c => c.slug === slug);
  if (!course) return;
  document.getElementById("courseTitle").textContent = course.name;
  document.getElementById("courseImg").src = course.img;
  document.getElementById("purposeText").textContent = course.purpose;
  const listEl = document.getElementById("contentList");
  listEl.innerHTML = "";
  course.content.forEach(item => { const li=document.createElement("li"); li.textContent=item; listEl.appendChild(li); });
  document.getElementById("fees").textContent = "R" + course.price;
  document.getElementById("backLink").href = type==="6-month" ? "six-month.html" : "six-week.html";
}

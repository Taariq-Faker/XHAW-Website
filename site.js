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
      img: "Images/Course Images/Child Minding.jpg",
      purpose:"A child minding course provides training for individuals who want to care for children in a safe, nurturing, and stimulating environment. It covers topics such as child development, health and safety, nutrition, play-based learning, and first aid.",
      content: ["Understanding child development and age-appropriate care","Health, hygiene, and safety practices","Nutrition and meal planning for children","Play-based learning and activity planning","Positive behavior management","Communication with parents and guardians","Practical hands-on experience in childcare settings"]
    },
    {
      slug: "cooking",
      name: "Cooking",
      price: 750,
      img: "Images/Course Images/Cooking.jpg",
      purpose: "A cooking course teaches the essential skills and techniques needed to prepare a variety of meals with confidence. It covers areas such as food safety, meal planning, ingredient preparation, and different cooking methods. The course helps learners develop creativity in the kitchen while gaining practical knowledge for both personal and professional use.",
      content: ["Food safety & Basic cooking techniques and kitchen safety","Meal planning and ingredient preparation","Understanding different cooking methods","Nutrition and healthy meal options","Recipe creation and menu planning","Practical hands-on cooking experience"]
    },
    {
      slug: "garden-maintenance",
      name: "Garden Maintenance",
      price: 750,
      img: "Images/Course Images/Gardening.jpg",
      purpose: "A garden maintenance course provides training on how to care for and manage gardens effectively. It covers topics such as soil care, planting, pruning, pest control, and seasonal upkeep. The course equips learners with practical skills to keep gardens healthy, attractive, and sustainable.",
      content: ["Soil preparation and fertilization techniques","Planting, pruning, and watering practices","Pest and disease managemen","Lawn care and seasonal maintenance","Garden design and layout basics","Practical hands-on gardening experience"]
    }
  ],
  /* 6 Month Course Data */
  "6-month": [
    {
      slug: "first-aid",
      name: "First Aid",
      price: 1500,
      img: "Images/Course Images/First Aid.webp",
      purpose: "A first aid course trains individuals to respond effectively in medical emergencies. It covers essential skills such as CPR, wound care, treating burns, and managing choking or fractures. The course prepares learners to provide immediate and potentially life-saving assistance before professional help arrives.",
      content: ["Basic life support and CPR techniques","Treating cuts, burns, and fractures","Managing choking and breathing emergencies","Handling common medical emergencies","Safety and prevention strategies","Practical hands-on first aid training"]
    },
    {
      slug: "sewing",
      name: "Sewing",
      price: 1500,
      img: "Images/Course Images/Sewing.jpeg",
      purpose: "A sewing course teaches the fundamental skills needed to create, repair, and alter garments or fabric items. It covers techniques such as hand stitching, machine sewing, pattern reading, and fabric selection. The course helps learners build confidence in producing quality handmade items for personal use or small business purposes.",
      content: ["Introduction to sewing tools and materials","Hand sewing and machine sewing techniques","Reading and using patterns","Fabric selection and care","Alterations and garment repair","Practical hands-on sewing projects"]
    },
    {
      slug: "landscaping",
      name: "Landscaping",
      price: 1500,
      img: "Images/Course Images/Landscaping.jpg",
      purpose: "A landscaping course provides training in designing, planning, and maintaining outdoor spaces. It covers topics such as plant selection, soil preparation, garden design, hardscaping, and sustainable practices. The course equips learners with the skills to create attractive, functional, and environmentally friendly landscapes.",
      content: ["Garden and outdoor space design principles","Plant selection and soil preparation","Hardscaping and installation techniques","Irrigation and sustainable landscaping practices","Seasonal maintenance and garden care","Practical hands-on landscaping experience"]
    },
    {
      slug: "life-skills",
      name: "Life Skills",
      price: 1500,
      img: "Images/Course Images/Life Skills.jpg",
      purpose: "A life skills course helps individuals develop essential abilities to manage daily life and personal growth effectively. It covers areas such as communication, problem-solving, decision-making, financial management, and interpersonal skills. The course prepares learners to handle real-life challenges with confidence and independence.",
      content: ["Effective communication and interpersonal skills","Problem-solving and decision-making","Time and financial management","Self-confidence and personal development","Health, hygiene, and well-being","Practical exercises for real-life situations"]
    }
  ]
};

function renderCourseList(type, mountId) {
  const list = COURSE_DATA[type] || [];
  const mount = document.getElementById(mountId);
  if (!mount) {
    console.error(`Element with id "${mountId}" not found`);
    return;
  }
  
  if (list.length === 0) {
    mount.innerHTML = "<p>No courses available at the moment.</p>";
    return;
  }
  
  mount.innerHTML = "";
  list.forEach(c => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${c.img}" alt="${c.name} course image" loading="lazy">
      <h3>${c.name}</h3>
      <p>${c.purpose}</p>
      <a class="btn" href="course.html?type=${encodeURIComponent(type)}&slug=${encodeURIComponent(c.slug)}" 
         onclick="return validateCourseLink('${type}', '${c.slug}')">More Info</a>
    `;
    mount.appendChild(card);
  });
}

function validateCourseLink(type, slug) {
  const course = (COURSE_DATA[type] || []).find(c => c.slug === slug);
  if (!course) {
    alert('Course not found. Please try again.');
    return false;
  }
  return true;
}

function renderCourseDetail() {
  const params = new URLSearchParams(location.search);
  const type = params.get("type");
  const slug = params.get("slug");
  
  if (!type || !slug) {
    console.error("Missing type or slug parameters");
    document.getElementById("courseTitle").textContent = "Course Not Found";
    return;
  }
  
  const course = (COURSE_DATA[type] || []).find(c => c.slug === slug);
  if (!course) {
    console.error(`Course not found: ${type}/${slug}`);
    document.getElementById("courseTitle").textContent = "Course Not Found";
    return;
  }
  
  // Update course details
  document.getElementById("courseTitle").textContent = course.name;
  document.getElementById("courseImg").src = course.img;
  document.getElementById("courseImg").alt = `${course.name} course image`;
  document.getElementById("purposeText").textContent = course.purpose;
  
  // Update content list
  const listEl = document.getElementById("contentList");
  if (listEl) {
    listEl.innerHTML = "";
    course.content.forEach(item => { 
      const li = document.createElement("li"); 
      li.textContent = item; 
      listEl.appendChild(li); 
    });
  }
  
  // Update fees
  const feesEl = document.getElementById("fees");
  if (feesEl) {
    feesEl.textContent = "R" + course.price;
  }
  
  // Update back link
  const backLink = document.getElementById("backLink");
  if (backLink) {
    backLink.href = type === "6-month" ? "six-month.html" : "six-week.html";
  }
}

import { createClient } from "https://esm.sh/@sanity/client";
import imageUrlBuilder from "https://esm.sh/@sanity/image-url";

const projectId = "rzwdwics";
const dataset = "production";
const apiVersion = "v2021-10-21";

// Use the globally available sanityClient function
const client = createClient({
  projectId: projectId,
  dataset: dataset,
  apiVersion: apiVersion,
  useCdn: true,
});

// Use the globally available imageUrlBuilder function
const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

// opinions
const fetchOpinions = async () => {
  const query = encodeURIComponent(`*[_type == "opinions"]`);
  const url = `https://${projectId}.api.sanity.io/${apiVersion}/data/query/${dataset}?query=${query}`;

  try {
    const response = await fetch(url, {
      cache: "no-cache",
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    const data = await response.json();
    const opinions = data.result;

    const swiperWrapper = document.querySelector(".opinion-swiper");

    opinions.forEach((opinion) => {
      const imageUrl = urlFor(opinion.image).width(300).url(); // Adjust width as needed

      // Create the swiper slide element
      const slide = document.createElement("div");
      slide.classList.add("swiper-slide");

      // Set the inner HTML with the image and feedback
      slide.innerHTML = `
        <div class="opinion-card">
          <img class="!h-36 !object-contain" src="${imageUrl}" alt="${opinion.image}" />
        </div>
      `;

      // Append the slide to the swiper wrapper
      swiperWrapper.appendChild(slide);
    });

    // Initialize Swiper after slides are added
    new Swiper(".mySwiper", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  } catch (error) {
    console.error("Error fetching opinions:", error);
  }
};

fetchOpinions();

// certificates
const fetchCertificates = async () => {
  const query = encodeURIComponent(`*[_type == "certificates"]`);
  const url = `https://${projectId}.api.sanity.io/${apiVersion}/data/query/${dataset}?query=${query}`;

  try {
    const response = await fetch(url, {
      cache: "no-cache",
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    const data = await response.json();
    const opinions = data.result;

    const swiperWrapper = document.querySelector(".certificate-swiper");

    opinions.forEach((opinion) => {
      const imageUrl = urlFor(opinion.image).width(300).url(); // Adjust width as needed

      // Create the swiper slide element
      const slide = document.createElement("div");
      slide.classList.add("swiper-slide");

      // Set the inner HTML with the image and feedback
      slide.innerHTML = `
        <div class="certificate-card">
          <img class="!h-[375px] !object-contain" src="${imageUrl}" alt="${opinion.image}" />
        </div>
      `;

      // Append the slide to the swiper wrapper
      swiperWrapper.appendChild(slide);
    });

    // Initialize Swiper after slides are added
    new Swiper(".mySwiper", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  } catch (error) {
    console.error("Error fetching opinions:", error);
  }
};

fetchCertificates();

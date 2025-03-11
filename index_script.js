document.addEventListener('click', e => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]")
    if (!isDropdownButton && e.target.closest('[data-dropdown') != null) return

    let currentDropdown
    if (isDropdownButton) {
        currentDropdown = e.target.closest('[data-dropdown]')
        console.log('clear 1')
        currentDropdown.classList.toggle('active')
    }

    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
        if (dropdown === currentDropdown) return
        dropdown.classList.remove('active')
    })
})

// Close dropdowns when loading a new page
document.addEventListener("DOMContentLoaded", function () {
    const contentArea = document.getElementById("content-area");

    const pages = {
        "Home": {
            title: "Welcome to CubeClass!",
            text: `Welcome to CubeClass! Whether you're just starting out or aiming for Sub X, we’ve got you covered with easy-to-follow guides and helpful resources. Our site is regularly updated, so be sure to check back for fresh content! If you enjoy the lessons, please visit my <a href="https://www.youtube.com/channel/UC5rTdixb8Z2sVbpusB_YacQ" target="_blank" class="custom-link">YouTube channel</a> and consider subscribing to support my work. Thank you for your support, and never stop cubing!`,
        },
        "Beginner's Method": {
            title: "Beginner's Method",
            sections: [
                {
                    title: "Overview",
                    text: "Learn how to solve a cube using the Beginner's method. I recommend learning the Layer by Layer method over the more popular beginner's method because it is easier to get faster and is very easy transition to CFOP, the fastest method that almost all professional speedcubers use. However, if your goal is just to solve the cube, which is completely fine, I would recommend the beginner's method as it has easer algorthm memorization. If you are in doubt of what method you should use, I would suggest using the Layer by Layer method. In the following guide, the videos will give you all the information you need, the text is just a summary of the video.",
                    video: null
                },
                {
                    title: "Cross",
                    text: "First, let's create a daisy by placing all the white edge pieces around the yellow center. Then, turn the yellow face so that one of the white edge peices (the 'petals') lines up with it's corresponding center. Once it matches, turn that face 180 degrees (two turns) to solve that white edge. Repeat this for the other white edge pieces until all of them are in place around the white center and the cross is solved.",
                    video: "VIDEO_ID_1"
                },
                {
                    title: "Solve First Layer",
                    text: "We will use the right and left trigger algorithms (Away, Up, Back, Down) to place the white corners in the correct positions. We will use the trigger to get the corner into the top layer, then put it above where it goes, and then face to white part of the corner and do the trigger on the side it is on to solve it. We will repeat this with all the remaining corners to solve the first layer.",
                    video: "VIDEO_ID_2"
                },
                {
                    title: "Solve Second Layer",
                    text: "We'll use the right and left triggers (or just the right Move and the left Move) to solve the second layer. Start by finding a non-yellow edge in the top layer and matching it with its center to create a stripe. Face the stripe and do the trigger on the side the edge belongs on. Afterward, rotate the cube and insert the corner that belongs in that slot. If no non-yellow edges are in the top layer but the second layer isn’t complete, insert a yellow edge into one of the second-layer slots to push a non-yellow edge back into the top layer.",
                    video: "VIDEO_ID_3"
                },
                {
                    title: "Solve Yellow Cross",
                    text: "We will use the following algorithms to solve the yellow cross: [Turn the front clockwise, do the right trigger (or Move), then turn the front counterclockwise]. Now we have 3 cases we have to orient. If we get a dot case, do the algorithm from any side and reevaluate. If we get a line case, do the algorithm with line facing horizontal and reevaluate. If you get a L case, with two edges adgecent, put them in the top left, and and do the algorithm, the cross will then be solved.",
                    video: "VIDEO_ID_4"
                },
                {
                    title: "Solve Edges",
                    text: "Content for Solve Edges goes here.",
                    video: "VIDEO_ID_5"
                },
                {
                    title: "Place Corners",
                    text: "Content for Place Corners goes here.",
                    video: "VIDEO_ID_6"
                },
                {
                    title: "Solve Corners",
                    text: "Content for Solve Corners goes here.",
                    video: "VIDEO_ID_7"
                }
            ]
        },
        "Layer by Layer": {
            title: "Layer by Layer",
            sections: [
                {
                    title: "Overview",
                    text: "Learn how to solve a cube using the Layer by Layer method. I recommend learning this method over the more popular beginner's method because it is easier to get faster and is very easy transition to CFOP, the fastest method that almost all professional speedcubers use. However, if your goal is just to solve the cube, which is completely fine, I would recommend the beginner's method as it has easer algorthm memorization. If you are in doubt of what method you should use, I would suggest using the Layer by Layer method.In the following guide, the videos will give you all the information you need, the text is just a summary of the video.",
                    video: null
                },
                {
                    title: "Cross",
                    text: "First, let's create a daisy by placing all the white edge pieces around the yellow center. Then, turn the yellow face so that one of the white edge peices (the 'petals') lines up with it's corresponding center. Once it matches, turn that face 180 degrees (two turns) to solve that white edge. Repeat this for the other white edge pieces until all of them are in place around the white center and the cross is solved.",
                    video: "VIDEO_ID_1"
                },
                {
                    title: "Solve First Layer",
                    text: "We will use the right and left trigger algorithms (Away, Up, Back, Down) to place the white corners in the correct positions. We will use the trigger to get the corner into the top layer, then put it above where it goes, and then face to white part of the corner and do the trigger on the side it is on to solve it. We will repeat this with all the remaining corners to solve the first layer.",
                    video: "VIDEO_ID_2"
                },
                {
                    title: "Solve Second Layer",
                    text: "We'll use the right and left triggers (or just the right Move and the left Move) to solve the second layer. Start by finding a non-yellow edge in the top layer and matching it with its center to create a stripe. Face the stripe and do the trigger on the side the edge belongs on. Afterward, rotate the cube and insert the corner that belongs in that slot. If no non-yellow edges are in the top layer but the second layer isn’t complete, insert a yellow edge into one of the second-layer slots to push a non-yellow edge back into the top layer.",
                    video: "VIDEO_ID_3"
                },
                {
                    title: "Solve Yellow Cross",
                    text: "We will use the following algorithms to solve the yellow cross: [Turn the front clockwise, do the right trigger (or Move), then turn the front counterclockwise]. Now we have 3 cases we have to orient. If we get a dot case, do the algorithm from any side and reevaluate. If we get a line case, do the algorithm with line facing horizontal and reevaluate. If you get a L case, with two edges adgecent, put them in the top left, and and do the algorithm, the cross will then be solved.",
                    video: "VIDEO_ID_4"
                },
                {
                    title: "Orient Corners",
                    text: "Content for Solve Edges goes here.",
                    video: "VIDEO_ID_5"
                },
                {
                    title: "Solve Corners",
                    text: "Content for Place Corners goes here.",
                    video: "VIDEO_ID_6"
                },
                {
                    title: "Solve Edges",
                    text: "Content for Solve Corners goes here.",
                    video: "VIDEO_ID_7"
                }
            ]
        },
        "How to be sub X": "Coming Sune :)",
        "3x3 Recommendations": "Coming Sune :)"
    };

    // Load the home page content on page load
    const homePage = pages["Home"];
    contentArea.innerHTML = `<h2>${homePage.title}</h2><h4>${homePage.text}</h4>`;

    document.querySelectorAll(".nav-button").forEach(button => {
        button.addEventListener("click", function () {
            const selectedPage = pages[button.textContent];
            if (typeof selectedPage === "object" && selectedPage.sections) {
                contentArea.innerHTML = `<h2>${selectedPage.title}</h2>`;
                const toc = document.createElement("div");
                toc.classList.add("section");  // Added section class for styling
                toc.innerHTML = "<h3>Table of Contents</h3>";

                const tocWrapper = document.createElement("div");
                tocWrapper.classList.add("toc-wrapper"); // Add this class for flexbox styling

                selectedPage.sections.forEach(section => {
                    const sectionButton = document.createElement("button");
                    sectionButton.classList.add("toc-link"); // Add this class
                    sectionButton.textContent = section.title;
                    sectionButton.addEventListener("click", () => {
                        document.getElementById(section.title.replace(/\s+/g, '-')).scrollIntoView({ behavior: 'smooth', block: 'start' });
                    });
                    tocWrapper.appendChild(sectionButton);
                });

                toc.appendChild(tocWrapper);
                contentArea.appendChild(toc);

                selectedPage.sections.forEach(section => {
                    const hr = document.createElement("hr");
                    contentArea.appendChild(hr);

                    const sectionDiv = document.createElement("div");
                    sectionDiv.classList.add("section");  // Added section class for styling
                    sectionDiv.id = section.title.replace(/\s+/g, '-');

                    const contentWrapper = document.createElement("div");
                    contentWrapper.classList.add("content-wrapper");

                    const textDiv = document.createElement("div");
                    textDiv.classList.add("text-area-wrapper");
                    textDiv.innerHTML = `<div class="text-area"><h3>${section.title}</h3><p>${section.text}</p></div>`;

                    contentWrapper.appendChild(textDiv);

                    if (section.video) {
                        const videoDiv = document.createElement("div");
                        videoDiv.classList.add("video-area-wrapper");
                        videoDiv.innerHTML = `<div class="video-area"><iframe class="video-iframe" src="https://www.youtube.com/embed/${section.video}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`;
                        contentWrapper.appendChild(videoDiv);
                    }

                    sectionDiv.appendChild(contentWrapper);
                    contentArea.appendChild(sectionDiv);
                });
            } else {
                contentArea.innerHTML = `<h2>${button.textContent}</h2><h4>${selectedPage}</h4>`;
            }

            // Close all dropdowns
            document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        });
    });

    document.getElementById('home-button').addEventListener('click', function() {
        const homePage = pages["Home"];
        const contentArea = document.getElementById("content-area");
        contentArea.innerHTML = `<h2>${homePage.title}</h2><h4>${homePage.text}</h4>`;
    });

});
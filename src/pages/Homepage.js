import React, { useEffect } from "react";
import HomeSectors from "../component/HomeSectors";
export default function Homepage() {
  useEffect(() => {
    const header = document.querySelector(".introHeader");
    const downArrow = document.querySelector(".downArrow");
    let count = 0;
    const text = [
      " ",
      "this",
      " ",
      "Eromosele",
      " ",
      "am",
      " ",
      "a",
      " ",
      "web",
      " ",
      "developer",
    ];
    const letterShow = setInterval(() => {
      header.textContent += text[count];
      count++;
      if (count >= 12) {
        clearInterval(letterShow);
        downArrow.style.visibility = "visible";
      }
    }, 1000);

    var animationElement = [...document.querySelectorAll(".workcard")];

    function checkIfInView() {
      animationElement.forEach(function (element) {
        //check to see if the container is within view port
        var bounding = element.getBoundingClientRect();
        if (
          bounding.top >= 0 &&
          bounding.left >= 0 &&
          bounding.right <=
            (window.innerWidth || document.documentElement.clientWidth) &&
          bounding.bottom <=
            (window.innerHeight || document.documentElement.clientHeight)
        ) {
          element.children[0].classList.add("view");
          element.children[1].classList.add("view");
        } else {
          element.children[0].classList.remove("view");
          element.children[1].classList.remove("view");
        }
      });
      console.log("here");
    }

    window.addEventListener("scroll", checkIfInView);

    document.querySelector(".next").addEventListener("click", () => {
      document.querySelector(".itemFlow").scrollLeft -= 50;
    });

    document.querySelector(".prev").addEventListener("click", () => {
      document.querySelector(".itemFlow").scrollLeft += 50;
    });

    const container = document.querySelector(".itemFlow");
    console.log(container);

    setInterval(() => {
      //Please see this article to see how the below works
      // https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore
      container.insertBefore(container.firstChild, null);
    }, 900);
  }, []);
  return (
    <div>
      <HomeSectors />
    </div>
  );
}

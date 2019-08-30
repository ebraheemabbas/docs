      /* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
        var dropdown = document.getElementsByClassName("dropdown-btn");
        var i;
        
        for (i = 0; i < dropdown.length; i++) {
          dropdown[i].addEventListener("click", function() {
          this.classList.toggle("active");
          var dropdownContent = this.nextElementSibling;
          if (dropdownContent.style.display === "block") {
          dropdownContent.style.display = "none";
          } else {
          dropdownContent.style.display = "block";
          }
          });
        }
        function aboutshow(){var element=document.getElementById("introduce");
        element.style.display="block";
        var element1=document.getElementById("Whatlearned");
        element1.style.display="none";
        }
        function learnshow(){var element=document.getElementById("Whatlearned");
        element.style.display="block";
        var element1=document.getElementById("introduce");
        element1.style.display="none";
        }

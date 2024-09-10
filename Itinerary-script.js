document.addEventListener("DOMContentLoaded", () => {
    // Edit buttons
    const editButtons = document.querySelectorAll(".edit-btn");
    editButtons.forEach((btn) => 
      btn.addEventListener("click", () => {
        alert("You can now edit the itinerary.");
      })
    );
  
    // Approve Itinerary
    const approveBtn = document.querySelector(".approve-btn");
    const finalizeBtn = document.getElementById("finalize-btn");
    let approvedMembers = 4;
    const totalMembers = 6;
  
    approveBtn.addEventListener("click", () => {
      alert("You have approved the itinerary!");
      approvedMembers += 1;
  
      // Update the finalize button if everyone has approved
      if (approvedMembers === totalMembers) {
        finalizeBtn.removeAttribute("disabled");
      }
    });
  
    // Finalize Itinerary
    finalizeBtn.addEventListener("click", () => {
      if (approvedMembers === totalMembers) {
        alert("The itinerary has been finalized!");
      } else {
        alert("Not everyone has approved yet!");
      }
    });
  });  
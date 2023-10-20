function Status() {
    return (
      <div class="d-none d-xl-block col-auto" style={{width:"20%"}} >
        <p>Course Status</p>
        <div class="d-flex" style={{ marginLeft: "5px" }}>
          <button
            type="button"
            class="btn btn-secondary"
            style={{ width: "50%", fontSize: "15px", whiteSpace: "nowrap" }}
          >
            <i class="fa-solid fa-ban"></i>
            Unpublish
          </button>
          <button
            type="button"
            class="btn btn-success disabled"
            style={{ width: "50%", fontSize: "15px", whiteSpace: "nowrap" }}
          >
            <i class="fa-regular fa-circle-check"></i> Published
          </button>
        </div>
        <div class="button-container">
          <button
            type="button"
            class="gray-btn btn-block"
            style={{ whiteSpace: "nowrap" }}
          >
            <i class="fa-solid fa-file-import"></i>Import Existing Content
          </button>
          <button
            type="button"
            class="gray-btn btn-block"
            style={{ whiteSpace: "nowrap" }}
          >
            <i class="fa-solid fa-arrow-right-from-bracket"></i> Import from
            Commons
          </button>
          <button
            type="button"
            class="gray-btn btn-block"
            style={{ whiteSpace: "nowrap" }}
          >
            <i class="fa-solid fa-bullseye"></i> Choose from Homepage
          </button>
          <button
            type="button"
            class="gray-btn btn-block"
            style={{ whiteSpace: "nowrap" }}
          >
            <i class="fa-solid fa-bullhorn"></i> New Annoncementm
          </button>
          <button
            type="button"
            class="gray-btn btn-block"
            style={{ whiteSpace: "nowrap" }}
          >
            <i class="fa-solid fa-chart-simple"></i> New Analytics
          </button>
          <button
            type="button"
            class="gray-btn btn-block"
            style={{ whiteSpace: "nowrap" }}
          >
            <i class="fa-regular fa-bell"></i> View Course Notifications
          </button>
        </div>
  
        <div>
          <div class="courses-home-main-content-right-side-todo-list-item">
            <div class="courses-home-main-content-right-side-todo-list-item">
              <i class="fa-solid fa-1" id="icon-number-one"></i>
              <div class="courses-home-main-content-right-side-todo-list-item-description">
                <a href="#">Grade A1 - ENV + HTML</a>
                <div>100 points Sep 18 at 11:59pm</div>
              </div>
              <div>
                <i class="fa-solid fa-xmark" style={{ color: "gray" }}></i>
              </div>
            </div>
          </div>
        </div>
  
        <div class="courses-home-main-content-right-side-title">
          <div>Coming Up</div>
          <div class="courses-home-main-content-right-side-coming-up-title-item ms-auto p-2">
            <i class="fa-regular fa-calendar-check"></i>
            <a href="#">View Calender</a>
          </div>
        </div>
        <hr />
        <div class="courses-home-main-content-right-side-coming-up-list">
          <div class="courses-home-main-content-right-side-coming-up-list-item">
            <i class="fa-regular fa-calendar-check"></i>
            <div class="courses-home-main-content-right-side-coming-up-list-item-description">
              <a href="#">Lecture</a>
              <div>CS4550.12631.202410</div>
              <div>Sep 11 at 11:45am</div>
            </div>
          </div>
          <div class="courses-home-main-content-right-side-coming-up-list-item">
            <i class="fa-regular fa-calendar-check"></i>
            <div class="courses-home-main-content-right-side-coming-up-list-item-description">
              <a href="#">CS5610 06 SP23 Lecture</a>
              <div>CS4550.12631.202410</div>
              <div>Sep 11 at 6pm</div>
            </div>
          </div>
          <div class="courses-home-main-content-right-side-coming-up-list-item">
            <i class="fa-regular fa-calendar-check"></i>
            <div class="courses-home-main-content-right-side-coming-up-list-item-description">
              <a href="#">
                <span>CS5610 Web Development</span>
                <span>Summer 1 2023 - LECTURE</span>
              </a>
              <div>CS4550.12631.202410</div>
              <div>Sep 11 at 7pm</div>
            </div>
          </div>
          <div class="courses-home-main-content-right-side-coming-up-list-item">
            <a href="#">12 more in the next week...</a>
          </div>
        </div>
      </div>
    );
  }
  export default Status;
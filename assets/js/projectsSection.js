/*JS for loading the projects section from a JSON file*/
/* ==== TEMPLATE ===
<div class="item frontend col-md-3 col-xs-6 ">
    <div class="item-inner">
        <figure class="figure">
            <img class="img-responsive" src="assets/images/portfolio/portfolio-1.jpg" alt="" />
        </figure>
        <div class="content text-left">
            <h3 class="sub-title">Project Lorem Ipsum</h3>
            <div class="meta">AngularJS</div>
            <div class="action" id="bnt1"><a href="#">View on Github</a></button></div>
        </div><!--//content-->
        <a class="link-mask" href="#"></a>
    </div><!--//item-inner-->
</div><!--//item-->
*/

function projectCoverHTML(projectType, imageURL, subTitle, metaTitle, id){
//generate the html for the projects
  return "<div class=\"item " + projectType + " col-md-3 col-xs-6\">\
      <div class=\"item-inner\" onclick=\"generateModal("+ id +")\">\
          <figure class=\"figure\">\
              <img class=\"img-responsive\" src=\""+ imageURL + "\"alt=\"\" />\
          </figure>\
          <div class=\"content text-left\">\
              <h3 class=\"sub-title\"> " + subTitle + "</h3>\
              <div class=\"meta\">"+ metaTitle + "</div>\
              <div class=\"action\"><a href=\"#\">View on Github</a></button></div>\
          </div><!--//content-->\
      </div><!--//item-inner-->\
  </div><!--//item-->"
}

function populateProjects(){
//to generate the projects icons
  for (var i = 0; i < projects.length; i++) {
  var projectsDiv = document.getElementById('project-section');
  var content = projects[i]
  projectsDiv.innerHTML = projectsDiv.innerHTML +
                          projectCoverHTML(content["projectType"],
                                            content["projectImg"],
                                            content["subTitle"],
                                            content["metaTitle"],
                                            i)
}
}

$( document ).ready(function() {
  populateProjects()
});

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

//the modal
var modal = document.getElementById('the-modal');

//modal close button
var spanClose = document.getElementsByClassName('close-modal')[0];


spanClose.onclick = function(){
  modal.style.display = "none";
}

function displayModal(){
//show the modal
  modal.style.display = "block";
}

window.onclick = function(event){
  if(event.traget == modal){
    modal.style.display = "none";
  }
}

function generateFooter(footer){
//to  generate the footer if there is a need to link to an external source
//footer:footer
  if(footer == null){
    var footer = document.getElementsByClassName('modal-footer')[0];
    footer.style.display = "none";
    return null;
  }

   var footerDiv = document.getElementById('the-footer-button');
   footerDiv.innerHTML = "<a class=\"btn btn-default\" href=" + footer['buttonLink']+ ">" + footer['buttonText'] +"</a>"

}

function generateModalTitle(header){
//to generate the title of the modal
//header:string
  var thetitle = document.getElementById('the-modal-title');
  thetitle.innerHTML = header;
}

function generateModalBody(text){
//to generate the modal body
//text:string/html
  var body = document.getElementById('the-modal-body')
  body.innerHTML = text;
}

function generateModalContent(modalContent){
//to load the modal content
//modalContent: modalContent
  generateModalTitle(modalContent["header"]);
  generateModalBody(modalContent["body"]);
  generateFooter(modalContent["footer"]);
}

function generateProjectModal(id){
//main function of generating a modal
//id: int
  generateModalContent(projects[id]["modalContent"]);
  displayModal();
}


function projectCoverHTML(projectType, imageURL, subTitle, metaTitle, id){
//generate the html for the projects
  return "<div class=\"item " + projectType + " project col-md-3 col-xs-6\" title=\"click me to find out more!\">\
      <div class=\"item-inner\" onclick=\"generateProjectModal("+ id +")\">\
          <figure class=\"figure\">\
              <img class=\"img-responsive\" src=\""+ imageURL + "\"alt=\"\" />\
          </figure>\
          <div class=\"content text-left\">\
              <h3 class=\"sub-title\"> " + subTitle + "</h3>\
              <div class=\"meta\">"+ metaTitle + "</div>\
          </div><!--//content-->\
      </div><!--//item-inner-->\
  </div><!--//item-->"
}

function populateProjects(){
//to generate the projects icons from json
  for (var i = 0; i < projects.length; i++) {
  var projectsDiv = document.getElementById('project-section');
  var content = projects[i];
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

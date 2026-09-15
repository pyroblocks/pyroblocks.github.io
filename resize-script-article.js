        var num_ypos_get = Array.from(document.getElementsByClassName("num"));
      var num_ypos = []
      num_ypos_get.forEach((element) => num_ypos.push(element.y.baseVal[0].value));
      //console.log(num_ypos)

      var rbox_widths_get = Array.from(document.getElementsByClassName("ratingbox"));
      var rbox_widths = []
      var rbox_ypos = []
      rbox_widths_get.forEach((element) => rbox_widths.push(element.getAttribute("width")));
      rbox_widths_get.forEach((element) => rbox_ypos.push(element.y.baseVal.value));

      var bottomline_get = Array.from(document.getElementsByClassName("bottomline"));
      var bottomline = []
      bottomline_get.forEach((element) => bottomline.push(element.getBoundingClientRect()['width']));
      //console.log(bottomline)

      var tickline_x_get = Array.from(document.getElementsByClassName("tickline"));
      var tickline_x = []
      var tickline_height = tickline_x_get[0].height.baseVal.value
      tickline_x_get.forEach((element) => tickline_x.push((element.x.baseVal.value - 50) / rbox_widths[0]));
      //console.log(tickline_height)

      var tickmark_x_get = Array.from(document.getElementsByClassName("tickmark"));
      var tickmark_x = []
      tickmark_x_get.forEach((element) => tickmark_x.push((element.x.baseVal[0].value - 50) / rbox_widths[0]));
      //console.log(tickmark_x)

      var rtext_x_get = Array.from(document.getElementsByClassName("ratingtext"));
      var rtext_x = []
      var rtext_y = []
      rtext_x_get.forEach((element) => rtext_x.push(element.getAttribute("x")));
      rtext_x_get.forEach((element) => rtext_y.push(element.y.baseVal[0].value));
      //console.log(rtext_y)

      var rteam_x_get = Array.from(document.getElementsByClassName("ratingteam"));
      var rteam_x = []
      var rteam_y = []
      rteam_x_get.forEach((element) => rteam_x.push(element.getAttribute("x")));
      rteam_x_get.forEach((element) => rteam_y.push(element.y.baseVal.value));

function barResize() {

  if (window.innerWidth < 768) {
    var colorboxes = Array.from(document.getElementsByClassName("colored"));
    colorboxes.forEach((element,index) => element.height.baseVal.value = 24)

    max_width = rbox_widths[1]


    var rboxes = Array.from(document.getElementsByClassName("ratingbox"));

    rbox_widths.forEach((element, index) => {
        if (element < rbox_widths[0] && element > max_width) {
            max_width = element
        }
    })

    rboxes.forEach((element,index) => {
      if (!element.classList.contains("colored")) {
      element.height.baseVal.value = 76
      element.setAttribute('width', (rbox_widths[index]*(window.innerWidth/888)-(rbox_widths[index]*(112/888))) + "px")
    } else {
      element.setAttribute('width', (rbox_widths[index]*(window.innerWidth/888)-(rbox_widths[index]*(112/888)))/(max_width/rbox_widths[0]) + "px")
    }
    element.y.baseVal.value = 15 + (15 + 76) * (Math.floor((index % 32) / 2))


  })
  
  var nums = Array.from(document.getElementsByClassName("num"));
  nums.forEach((element,index) =>{
    element.y.baseVal[0].value = 55 + (15 + 76) * (index % 16)
  });

  var rteams = Array.from(document.getElementsByClassName("ratingteam"));
    rteams.forEach((element,index) => {
    element.x.baseVal.value = 60
    element.y.baseVal.value = 40+(15+76)*(index % 16)
    element.children[1].children[0].style.fontSize="18px"
    element.children[1].children[1].style.fontSize="12px"
    });

    var rtexts = Array.from(document.getElementsByClassName("ratingtext"));
    rtexts.forEach((element,index) => {
    element.y.baseVal[0].value = 27+(15+76)*(index % 16)
    element.style.fontSize="20px"
    element.x.baseVal[0].value = (rbox_widths[2*index+1]*(window.innerWidth/888)-(rbox_widths[2*index+1]*(112/888)))/(max_width/rbox_widths[0])+45
    });

    var ticklines = Array.from(document.getElementsByClassName("tickline"));
    //console.log(ticklines)
    //console.log(rboxes[0])
    fullbox = parseFloat(rboxes[0].getAttribute('width'),100.000000)
    //console.log(fullbox)
    ticklines.forEach((element,index) => {
      if(window.innerWidth <=300 && !element.classList.contains("thickline")) {
        element.width.baseVal.value = 0
      }
      else {
        if (element.classList.contains("thickline")) {
        element.width.baseVal.value = 3
        }
        else {
          element.width.baseVal.value = 1
        }
      }
    //console.log(fullbox*tickline_x[index]+50)
    element.x.baseVal.value = (fullbox*tickline_x[index]/(max_width/rbox_widths[0])+50)
    element.height.baseVal.value = tickline_height+26*(32)/2
  });

    var tickmarks = Array.from(document.getElementsByClassName("tickmark"));
    //console.log(tickmark)
    tickmarks.forEach((element,index) => {
      element.x.baseVal[0].value = (tickmark_x[index]*fullbox/(max_width/rbox_widths[0])+50)
      if (element.y.baseVal[0].value!=-5) {
        element.y.baseVal[0].value = tickline_height+26*(32)/2 + 12
      }
    });

    var bline = Array.from(document.getElementsByClassName("bottomline"));
    //console.log(rboxes)
    bline.forEach((element,index) => {
      element.setAttribute('width', (bottomline[index]*(window.innerWidth/888)-(bottomline[index]*(112/888))) + "px")
      if (element.classList.contains("rankings-bg")){
        element.height.baseVal.value = tickline_height+26*(32)/2 + 35
      } else{
        element.y.baseVal.value = tickline_height+26*(32)/2
      }
  });

  } else if (window.innerWidth < 1001) {

    var nums = Array.from(document.getElementsByClassName("num"));
    nums.forEach((element,index) =>{
    element.y.baseVal[0].value = num_ypos[index]
  });


    var rboxes = Array.from(document.getElementsByClassName("ratingbox"));
    //console.log(rboxes)
    rboxes.forEach((element,index) => {
      element.setAttribute('width', (rbox_widths[index]*(window.innerWidth/888)-(rbox_widths[index]*(112/888))) + "px")
      element.height.baseVal.value = 50
      element.y.baseVal.value = rbox_ypos[index]
  });

    var bline = Array.from(document.getElementsByClassName("bottomline"));
    //console.log(rboxes)
    bline.forEach((element,index) => {
      element.setAttribute('width', (bottomline[index]*(window.innerWidth/888)-(bottomline[index]*(112/888))) + "px")
      if (element.classList.contains("rankings-bg")){
        element.height.baseVal.value = tickline_height+35
      } else{
        element.y.baseVal.value = tickline_height
      }
  });

    var ticklines = Array.from(document.getElementsByClassName("tickline"));
    //console.log(ticklines)
    fullbox = parseFloat(rboxes[0].getAttribute('width'),100.000000)
    //console.log(fullbox)
    ticklines.forEach((element,index) => {
      if(window.innerWidth <=300 && !element.classList.contains("thickline")) {
        element.width.baseVal.value = 0
      }
      else {
        if (element.classList.contains("thickline")) {
        element.width.baseVal.value = 3
        }
        else {
          element.width.baseVal.value = 1
        }
      }
    //console.log(fullbox*tickline_x[index]+50)
    element.height.baseVal.value = tickline_height
    element.x.baseVal.value = (fullbox*tickline_x[index]+50)
  });

    var tickmarks = Array.from(document.getElementsByClassName("tickmark"));
    //console.log(tickmark)
    tickmarks.forEach((element,index) => {
      element.x.baseVal[0].value = (tickmark_x[index]*fullbox+50)
      if (element.y.baseVal[0].value!=-5) {
      element.y.baseVal[0].value = tickline_height+12;
      }
    });

    var rtexts = Array.from(document.getElementsByClassName("ratingtext"));
    rtexts.forEach((element,index) => {
      element.y.baseVal[0].value = (rtext_y[index])
      element.style.fontSize="20px"
    element.x.baseVal[0].value = (rbox_widths[2*index+1]*(window.innerWidth/888)-(rbox_widths[2*index+1]*(112/888))+40)
    });

    var rteams = Array.from(document.getElementsByClassName("ratingteam"));
    rteams.forEach((element,index) => {
    element.x.baseVal.value = (rbox_widths[2*index+1]*(window.innerWidth/888)-(rbox_widths[2*index+1]*(112/888))+63)
    element.y.baseVal.value = rteam_y[index]
    //console.log(element.getBoundingClientRect()['left'])
    //console.log(window.innerWidth)
    element.children[1].children[0].style.fontSize="18px"
    element.children[1].children[1].style.fontSize="12px"
    });



  }
  else {
    var rboxes = Array.from(document.getElementsByClassName("ratingbox"));
    rboxes.forEach((element,index) => {
      element.setAttribute('width', (rbox_widths[index])+ "px")
      element.height.baseVal.value = 50
    element.y.baseVal.value = rbox_ypos[index]
  });
    fullbox = parseFloat(rboxes[0].getAttribute('width'),100.000000)

    var bline = Array.from(document.getElementsByClassName("bottomline"));
    bline.forEach((element,index) => {
      element.setAttribute('width',(bottomline[index])+ "px")
      if (element.classList.contains("rankings-bg")){
        element.height.baseVal.value = tickline_height+35
      } else{
        element.y.baseVal.value = tickline_height
      }
    });

    var ticklines = Array.from(document.getElementsByClassName("tickline"));
    ticklines.forEach((element,index) => {
      element.x.baseVal.value = (tickline_x[index]*fullbox+50)
      element.height.baseVal.value = tickline_height;
  });

    var tickmarks = Array.from(document.getElementsByClassName("tickmark"));
    tickmarks.forEach((element,index) => {
      element.x.baseVal[0].value = (tickmark_x[index]*fullbox+50)
      if (element.y.baseVal[0].value!=-5) {
      element.y.baseVal[0].value = tickline_height+12;
      }
  });

    var rtexts = Array.from(document.getElementsByClassName("ratingtext"));
    rtexts.forEach((element,index) => {
      element.x.baseVal[0].value = (rtext_x[index])
      element.y.baseVal[0].value = (rtext_y[index])
      element.style.fontSize="20px"
    });

    var rteams = Array.from(document.getElementsByClassName("ratingteam"));
    rteams.forEach((element,index) => {
      element.x.baseVal.value = (rteam_x[index])
      element.y.baseVal.value = (rteam_y[index])
      element.children[1].children[0].style.fontSize="18px"
      element.children[1].children[1].style.fontSize="12px"
    });

    var nums = Array.from(document.getElementsByClassName("num"));
    nums.forEach((element,index) =>{
    element.y.baseVal[0].value = num_ypos[index]
  });

  }

}


      window.addEventListener("load", (event) => {barResize()
      });


      window.onresize = function (event) {barResize()}
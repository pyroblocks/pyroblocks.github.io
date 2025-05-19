  dropdown1=0
  dropdown2=0
  dropdownselect = 0
  serieslength=7
  score1=0
  score2=0
  team1=""
  team2=""
  const searchInput1 = document.getElementById('dropdown1-search')
  const searchInput2 = document.getElementById('dropdown2-search')
  const scoreInput1 = document.getElementById('score1')
  const scoreInput2 = document.getElementById('score2')

  base = Array.apply(null, Array(100000)).map(function (_, i) {return (i/100000);})
  simplified = Array.apply(null, Array(100000)).map(function (_, i) {return 6*(i/100000)**5-15*(i/100000)**4+10*(i/100000)**3;})

  function bo5tobo1(bo5odds) {
    returnindx = 0
    for (let i = 0; i < simplified.length; i++) {
      if ((bo5odds-simplified[i])<0) {
        return(base[i])
      }
    }
    
  }

  let dullcolor = {
    "NA":"#FF493C20",
    "EU":"#3078F420",
    "SAM":"#FFCE0020",
    "OCE":"#D231FF20",
    "MENA":"#01BE6E20",
    "APAC":"#8D3BDA20",
    "SSA":"#B7B7B720"
  }

  let fullcolor = {
    "NA":"#FF493C",
    "EU":"#3078F4",
    "SAM":"#FFCE00",
    "OCE":"#D231FF",
    "MENA":"#01BE6E",
    "APAC":"#8D3BDA",
    "SSA":"#B7B7B7"
  }
  // sheetID you can find in the URL of your spreadsheet after "spreadsheet/d/"
const sheetId = "1YpM1AbvYpJArVzom3J1xWWIJq2MU7vyaBGvzoepwAiE";
// sheetName is the name of the TAB in your spreadsheet
const sheetName = encodeURIComponent("Top Teams");
const sheetURL = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv&sheet=${sheetName}`;

function download(content, fileName, contentType) {
    var a = document.createElement("a");
    var file = new Blob([content], {type: contentType});
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}

fetch(sheetURL)
.then((response) => response.text())
.then((csvText) => handleResponse(csvText));

function activateDropdown(id) {
    var dropdownbutton = document.getElementById(id)
    if(id==='dropdown1'){
        if(dropdown1==0) {
            dropdownbutton.classList.add("dropdown-active")
            dropdown1=1
            document.getElementById('dropdown1-search').focus();
        } else {
            dropdownbutton.classList.remove("dropdown-active")
            dropdown1=0 
        }
    } else if(id==='dropdown2'){
        if(dropdown2==0) {
            dropdownbutton.classList.add("dropdown-active")
            dropdown2=1
            document.getElementById('dropdown2-search').focus();
        } else {
            dropdownbutton.classList.remove("dropdown-active")
            dropdown2=0 
        }
    } else if(id==='dropdownSELECT'){
        if(dropdownselect==0) {
            dropdownbutton.classList.add("dropdown-active")
            dropdownselect=1
        } else {
            dropdownbutton.classList.remove("dropdown-active")
            dropdownselect=0 
        }
    }
}

function resizeButtonText() {

    var buttons_get = Array.from(document.getElementsByClassName("dropdown-button"));

    buttons_get.forEach((element,index) =>{     
    teamname=element.innerText
    if(window.innerWidth > 1010) {
        fsize = "28px"
    //console.log(teamname.length)
    if (teamname.length > 20) {
        fsize = "16px"
    } else if (teamname.length > 13) {
        fsize = "20px"
    }

    } else /*if(window.innerWidth > 768)*/ {
        fsize="20px"
    if (teamname.length > 20) {
        fsize = "14px"
    } else if (teamname.length > 13) {
        fsize = "16px"
    }
    }

    element.style.fontSize = fsize

    })




}

function resizeDropdownText() {
    var dropdowns_get = Array.from(document.getElementsByClassName("dropdown-menu"));
    items1 = Array.from(dropdowns_get[0].children[1].children)
    items2 = Array.from(dropdowns_get[1].children[1].children)

    items1.forEach((element,index) =>{

        if(index%2==1) {
            nametext=element.children[4].children[0].innerHTML
            playerstext=element.children[4].children[1].innerHTML
            //console.log(nametext,playerstext,nametext)
            yval="9.5"
        if(window.innerWidth > 1010) {
            default_teamnamesize="18px"
            if (nametext.length >= 20) {
                default_teamnamesize="13.5px"
            }
            default_playerlistsize="12px"
            if (playerstext.length >= 32) {
                default_playerlistsize="11px"
            }
            if (nametext.includes("Non-Qualifying Team")) {
                yval="19"
            }
        } else /*if(window.innerWidth > 768)*/ {
            default_teamnamesize="12.5px"
            if (nametext.length >= 20) {
                default_teamnamesize="9px"
            }
            default_playerlistsize="8px"
            if (playerstext.length >= 32) {
                default_playerlistsize="7px"
            }
            if (nametext.includes("Non-Qualifying Team")) {
                yval="22"
            }
        }

        //console.log(default_teamnamesize,default_playerlistsize,yval)
        element.children[4].children[0].setAttribute('font-size',default_teamnamesize)
        element.children[4].children[1].setAttribute('font-size',default_playerlistsize)
        element.children[4].children[0].setAttribute('y',yval)
        }
    })

    items2.forEach((element,index) =>{

        if(index%2==1) {
            nametext=element.children[4].children[0].innerHTML
            playerstext=element.children[4].children[1].innerHTML
            //console.log(nametext,playerstext,nametext)
            yval="9.5"
        if(window.innerWidth > 1010) {
            default_teamnamesize="18px"
            if (nametext.length >= 20) {
                default_teamnamesize="13.5px"
            }
            default_playerlistsize="12px"
            if (playerstext.length >= 32) {
                default_playerlistsize="11px"
            }
            if (nametext.includes("Non-Qualifying Team")) {
                yval="19"
            }
        } else /*if(window.innerWidth > 768)*/ {
            default_teamnamesize="12.5px"
            if (nametext.length >= 20) {
                default_teamnamesize="9px"
            }
            default_playerlistsize="8px"
            if (playerstext.length >= 32) {
                default_playerlistsize="7px"
            }
            if (nametext.includes("Non-Qualifying Team")) {
                yval="22"
            }
        }

        //console.log(default_teamnamesize,default_playerlistsize,yval)
        element.children[4].children[0].setAttribute('font-size',default_teamnamesize)
        element.children[4].children[1].setAttribute('font-size',default_playerlistsize)
        element.children[4].children[0].setAttribute('y',yval)
        }
    })

}

function handleResponse(csvText) {
let sheetObjects = csvToObjects(csvText);
// sheetObjects is now an Array of Objects
//console.log(sheetObjects)
timestamp=sheetObjects[0]["datetime "] + "m ET"
timestamp = timestamp.replace("|",",")

var timestamp_get = Array.from(document.getElementsByClassName("sheet_timestamp"))[0];
timestamp_get.innerText = timestamp

var buttons_get = Array.from(document.getElementsByClassName("dropdown-button"));
buttons_get[0].innerHTML = "Select a Team<img src='/src/simplearrow.svg' style='vertical-align: middle; padding-left:5px;filter: brightness(10000%);transform:scale(1.3)' alt='sorting arrow'>"
buttons_get[1].innerHTML = "Select a Team<img src='/src/simplearrow.svg' style='vertical-align: middle; padding-left:5px;filter: brightness(10000%);transform:scale(1.3)' alt='sorting arrow'>"

var dropdowns_get = Array.from(document.getElementsByClassName("dropdown-menu"));
//console.log(dropdowns_get)

 // COMMENT LOC 1
dropdowns_get.forEach((dropdown,dropdown_index) =>{
    dropdown.children[1].setAttribute('height',sheetObjects.length*45)
})

dropdowns_get[0].children[1].innerHTML = ''
dropdowns_get[1].children[1].innerHTML = ''
teams = []
regions = []
players=[]
ratings=[]
dropdownstr1=''
dropdownstr2=''
sheetObjects.forEach((element,index) =>{
    //console.log(element)
    teamcolor = dullcolor[element["Reg"]]
    logo_link = "/src/logos/" + element["Team"] + ".webp"
    logo_link = logo_link.replace("%","").replace("!","").replace("'","").replace("+","").replace(/\?/g, "")
    teams.push(element["Team"])
    regions.push(element["Reg"])
    players.push(element["team"].replace("|",",").replace("|",","))
    ratings.push(element["Rating"])

    yval="9.5"

    if(window.innerWidth > 1010) {
        default_teamnamesize="18px"
        if (element["Team"].length >= 20) {
            default_teamnamesize="13.5px"
        }
        default_playerlistsize="12px"
        if (element["team"].length >= 32) {
            default_playerlistsize="11px"
        }
        if (element["Team"].includes("Non-Qualifying Team")) {
            yval="19"
        }
    } else /*if(window.innerWidth > 768)*/ {
        default_teamnamesize="12.5px"
        if (element["Team"].length >= 20) {
            default_teamnamesize="9px"
        }
        default_playerlistsize="8px"
        if (element["team"].length >= 32) {
            default_playerlistsize="7px"
        }
        if (element["Team"].includes("Non-Qualifying Team")) {
            yval="22"
        }
    }

    tname = element["Team"]
    if (tname.includes("'")) {
        tname = tname.slice(0,tname.indexOf("'")) + "\\" + tname.slice(tname.indexOf("'"))
    }
    dropdownstr1 += `<rect x="5" width="calc(100% - 10px)" height="40" y="${5+45*index}" rx="5" fill="${teamcolor}" class="ratingteam" onclick="selectTeam(1,'${tname}')"></rect>\n<svg x="12.5" y="${45*index}" class="ratingteam" width="calc(100% - 12.5px)" onclick="selectTeam(1,'${tname}')"><style>rect{cursor:pointer;}</style><style>image{cursor:pointer;}</style><style>g{cursor:pointer;}</style><image y="10" width="30" height="30" xlink:href="${logo_link}" loading=lazy><desc> Logo</desc></image><g font-family="SUSE, sans-serif" fill="#ffffff"><text x="37.5" y="${yval}" dominant-baseline="hanging" font-weight="600" font-size="${default_teamnamesize}">${element["Team"]}</text><text x="37.5" y="43.5" dominant-baseline="ideographic" font-weight="300" font-size="${default_playerlistsize}">${element["team"].replace("|",",").replace("|",",")}</text></g></svg></a>\n`
    dropdownstr2 += `<rect x="5" width="calc(100% - 10px)" height="40" y="${5+45*index}" rx="5" fill="${teamcolor}" class="ratingteam" onclick="selectTeam(2,'${tname}')"></rect>\n<svg x="12.5" y="${45*index}" class="ratingteam" width="calc(100% - 12.5px)" onclick="selectTeam(2,'${tname}')"><style>rect{cursor:pointer;}</style><style>image{cursor:pointer;}</style><style>g{cursor:pointer;}</style><image y="10" width="30" height="30" xlink:href="${logo_link}" loading=lazy><desc> Logo</desc></image><g font-family="SUSE, sans-serif" fill="#ffffff"><text x="37.5" y="${yval}" dominant-baseline="hanging" font-weight="600" font-size="${default_teamnamesize}">${element["Team"]}</text><text x="37.5" y="43.5" dominant-baseline="ideographic" font-weight="300" font-size="${default_playerlistsize}">${element["team"].replace("|",",").replace("|",",")}</text></g></svg>\n`
})
dropdowns_get[0].children[1].innerHTML = dropdownstr1
dropdowns_get[1].children[1].innerHTML = dropdownstr2 // COMMENT LOC 2
}

function selectSeriesLength(length) {
    serieslength=length
    winProbability()
    wpObj = document.getElementById('finalodds')
    if(wpObj.innerText =="100.0%") {
        wpObj.innerText="~100%"
    }
    bestofbutton=document.getElementById('dropdownSELECT')
    bestofbutton.innerText = "Bo" + length.toString()
    activateDropdown('dropdownSELECT')
}

function selectTeam(num,teamname) {
    if(window.innerWidth > 1010) {
        fsize = "28px"
    //console.log(teamname.length)
    if (teamname.length > 20) {
        fsize = "16px"
    } else if (teamname.length > 13) {
        fsize = "20px"
    }
    } else /*if(window.innerWidth > 768)*/ {
        fsize="20px"
    if (teamname.length > 20) {
        fsize = "14px"
    } else if (teamname.length > 13) {
        fsize = "16px"
    }
    }
    if (num==1) {
        activateDropdown('dropdown1')
        namebox = document.getElementById("dropdown1")
        //console.log(namebox)
        document.getElementById('score1').classList.remove('hide')
        namebox.innerText = teamname
        namebox.style.backgroundColor = fullcolor[regions[teams.indexOf(teamname)]]
        namebox.style.fontSize = fsize
        logo=document.getElementById("teamlogo1")
        //console.log(logo)
        logo_link = "/src/logos/" + teamname + ".webp"
        logo_link = logo_link.replace("%","").replace("!","").replace("'","").replace("+","").replace(/\?/g, "")
        logo.setAttribute('src',logo_link)
        player=document.getElementById('players1')
        player.innerText = players[teams.indexOf(teamname)]
        rating=document.getElementById('rating1')
        rating.innerText=ratings[teams.indexOf(teamname)]
        team1=teamname
        winProbability()
        wpObj = document.getElementById('finalodds')
        if(wpObj.innerText =="100.0%") {
        wpObj.innerText="~100%"
    }
    } else if (num==2) {
        activateDropdown('dropdown2')
        namebox = document.getElementById("dropdown2")
        //console.log(namebox)
        document.getElementById('score2').classList.remove('hide')
        namebox.innerText = teamname
        namebox.style.backgroundColor = fullcolor[regions[teams.indexOf(teamname)]]
        namebox.style.fontSize = fsize
        logo=document.getElementById("teamlogo2")
        //console.log(logo)
        logo_link = "/src/logos/" + teamname + ".webp"
        logo_link = logo_link.replace("%","").replace("!","").replace("'","").replace("+","").replace("?","")
        logo.setAttribute('src',logo_link)
        player=document.getElementById('players2')
        player.innerText = players[teams.indexOf(teamname)]
        rating=document.getElementById('rating2')
        rating.innerText=ratings[teams.indexOf(teamname)]
        team2=teamname
        winProbability()
        wpObj = document.getElementById('finalodds')
        if(wpObj.innerText =="100.0%") {
        wpObj.innerText="~100%"
    }
    }
}

function csvToObjects(csv) {
const csvRows = csv.split("\n");
const propertyNames = csvSplit(csvRows[0]);
let objects = [];
for (let i = 1, max = csvRows.length; i < max; i++) {
  let thisObject = {};
  let row = csvSplit(csvRows[i]);
  for (let j = 0, max = row.length; j < max; j++) {
    thisObject[propertyNames[j]] = row[j];
    // BELOW 4 LINES WILL CONVERT DATES IN THE "ENROLLED" COLUMN TO JS DATE OBJECTS
    // if (propertyNames[j] === "Enrolled") {
    //   thisObject[propertyNames[j]] = new Date(row[j]);
    // } else {
    //   thisObject[propertyNames[j]] = row[j];
    // }
  }
  objects.push(thisObject);
}
return objects;
}

function csvSplit(row) {
return row.split(",").map((val) => val.substring(1, val.length - 1));
}

searchInput1.addEventListener("input", (e) => {
    hiddenteams = []
    var dropdown1_get = document.getElementsByClassName("dropdown-menu")[0]
    svgelements1 = dropdown1_get.children[1].children
    const value = e.target.value.toLowerCase()
    teams.forEach((element,index) => {
        const isVisible = ((element.toLowerCase()).indexOf(value)!== -1)
        //console.log(element,value)
        svgelements1[2*index].classList.toggle('hide',!isVisible)
        svgelements1[2*index+1].classList.toggle('hide',!isVisible)
        if (!isVisible) {
            hiddenteams.push(2*index)
            hiddenteams.push(2*index+1)
        }
    })
    Array.from(svgelements1).forEach((element,index) =>{
        newindex = index-index%2
        all = Array.apply(null, Array(newindex)).map(function (_, i) {return i;})
        var filteredList = all.filter(function(number) {
        return hiddenteams.includes(number);
        });
        //console.log(filteredList)
        fin = newindex-filteredList.length
        //console.log(fin)
        if (index%2==0) {
            element.setAttribute('y',(5+(fin/2)*45).toString())
        } else if (index%2==1) {
            element.setAttribute('y',((fin/2)*45).toString())
        }
    })
    dropdown1_get.children[1].setAttribute('height',(svgelements1.length-hiddenteams.length)*22.5)
})

searchInput2.addEventListener("input", (e) => {
    hiddenteams = []
    var dropdown2_get = document.getElementsByClassName("dropdown-menu")[1]
    svgelements2 = dropdown2_get.children[1].children
    const value = e.target.value.toLowerCase()
    teams.forEach((element,index) => {
        const isVisible = ((element.toLowerCase()).indexOf(value)!== -1)
        //console.log(element,value)
        svgelements2[2*index].classList.toggle('hide',!isVisible)
        svgelements2[2*index+1].classList.toggle('hide',!isVisible)
        if (!isVisible) {
            hiddenteams.push(2*index)
            hiddenteams.push(2*index+1)
        }
    })
    Array.from(svgelements2).forEach((element,index) =>{
        newindex = index-index%2
        all = Array.apply(null, Array(newindex)).map(function (_, i) {return i;})
        var filteredList = all.filter(function(number) {
        return hiddenteams.includes(number);
        });
        //console.log(filteredList)
        fin = newindex-filteredList.length
        //console.log(fin)
        if (index%2==0) {
            element.setAttribute('y',(5+(fin/2)*45).toString())
        } else if (index%2==1) {
            element.setAttribute('y',((fin/2)*45).toString())
        }
    })
    dropdown2_get.children[1].setAttribute('height',(svgelements2.length-hiddenteams.length)*22.5)
})


window.addEventListener('click', function(e){   
  if (document.getElementsByClassName('dropdown-menu')[0].contains(e.target) || document.getElementsByClassName('dropdown-button')[0].contains(e.target) || document.getElementsByClassName('dropdown-menu')[1].contains(e.target) || document.getElementsByClassName('dropdown-button')[1].contains(e.target) || document.getElementsByClassName('dropdown-menuSELECT')[0].contains(e.target) || document.getElementsByClassName('dropdown-buttonSELECT')[0].contains(e.target)){
    true
  } else{
    //console.log("closing!")
    if (dropdown1==1) {
    Array.from(document.getElementsByClassName('dropdown-button'))[0].classList.remove("dropdown-active")
    dropdown1=0 
}
    if (dropdown2==1) {
    Array.from(document.getElementsByClassName('dropdown-button'))[1].classList.remove("dropdown-active")
    dropdown2=0 
}
    if (dropdownselect==1) {
    Array.from(document.getElementsByClassName('dropdown-buttonSELECT'))[0].classList.remove("dropdown-active")
    dropdownselect=0 
    }
  }
});

scoreInput1.addEventListener("input", (e) => {
    const value=e.target.value
    //console.log(value)
    score1=value
    winProbability()
    wpObj = document.getElementById('finalodds')
    if(wpObj.innerText =="100.0%") {
    wpObj.innerText="~100%"
}
})

scoreInput2.addEventListener("input", (e) => {
    const value=e.target.value
    //console.log(value)
    score2=value
    winProbability()
    wpObj = document.getElementById('finalodds')
    if(wpObj.innerText =="100.0%") {
    wpObj.innerText="~100%"
}
})

window.onresize = function(event){
    resizeDropdownText()
    resizeButtonText()
}
function winProbability() {
    imageObj = document.getElementById('finallogo')
    wpObj = document.getElementById('finalodds')
    nameObj = document.getElementById('finalname')
    team1logo= ("/src/logos/" + team1 + ".webp").replace("%","").replace("!","").replace("'","").replace("+","").replace("?","")
    team2logo= ("/src/logos/" + team2 + ".webp").replace("%","").replace("!","").replace("'","").replace("+","").replace("?","")
    //console.log(team1logo,team2logo)
    rating1=ratings[teams.indexOf(team1)]
    rating2=ratings[teams.indexOf(team2)]
    //console.log(rating1,rating2)
    //console.log(team1=="" || team2=="")
    if (team1=="" || team2=="") {
        //BAD RESPONSE
        imageObj.setAttribute('src','/src/logos/placeholder_matchupmaker.webp');nameObj.innerText="⠀";
        wpObj.innerText = ""
        return(false)
    }
    var bo5odds = (1/(1+10**((rating2-rating1)/400)))
    var t1odds = bo5tobo1(bo5odds)
    var t2odds = 1-t1odds
    //console.log(bo5odds,bo1odds)

    if (serieslength == 1) {
        if (score1 > 1 || score2 > 1 || (score1==1 && score2==1)) {
        //BAD RESPONSE
        imageObj.setAttribute('src','/src/logos/placeholder_matchupmaker.webp');nameObj.innerText="⠀";
        wpObj.innerText = ""
        return(false)
        } else if (score1==1){
            imageObj.setAttribute('src',team1logo);nameObj.innerHTML=team1  + " <b>Wins</b>";;
            wpObj.innerText = Number(1).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:0});
            return(true) 
        } else if (score2==1){
            imageObj.setAttribute('src',team2logo);nameObj.innerHTML=team2  + " <b>Wins</b>";;
            wpObj.innerText = Number(1).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:0});
            return(true)      
        } else {
            if (t1odds>=0.5){
                imageObj.setAttribute('src',team1logo);nameObj.innerHTML=team1  + " <b>Favored</b>";;
                wpObj.innerText = t1odds.toLocaleString(undefined,{style: 'percent', minimumFractionDigits:1}); 
                return(true)
            } else {
                imageObj.setAttribute('src',team2logo);nameObj.innerHTML=team2  + " <b>Favored</b>";;
                wpObj.innerText = t2odds.toLocaleString(undefined,{style: 'percent', minimumFractionDigits:1}); 
                return(true)
            }
        }
    } else if (serieslength == 3) {
         if (score1 > 2 || score2 > 2 || (score1==2 && score2==2)) {
        //BAD RESPONSE
        imageObj.setAttribute('src','/src/logos/placeholder_matchupmaker.webp');nameObj.innerText="⠀";
        wpObj.innerText = ""
        return(false)
        } else if (score1==2){
            imageObj.setAttribute('src',team1logo);nameObj.innerHTML=team1  + " <b>Wins</b>";;
            wpObj.innerText = Number(1).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:0});
            return(true) 
        } else if (score2==2){
            imageObj.setAttribute('src',team2logo);nameObj.innerHTML=team2  + " <b>Wins</b>";;
            wpObj.innerText = Number(1).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:0});
            return(true)      
        } else {
            if (score1==1&&score2==1) {
                t1prob=t1odds
                t2prob=1-t1prob
                if (t1prob>=0.5){
                    imageObj.setAttribute('src',team1logo);nameObj.innerHTML=team1  + " <b>Favored</b>";;
                    wpObj.innerText = t1prob.toLocaleString(undefined,{style: 'percent', minimumFractionDigits:1}); 
                    return(true)
                } else {
                    imageObj.setAttribute('src',team2logo);nameObj.innerHTML=team2  + " <b>Favored</b>";;
                    wpObj.innerText = t2prob.toLocaleString(undefined,{style: 'percent', minimumFractionDigits:1}); 
                    return(true)
                }
            } else if (score1==1&&score2==0) {
                t1prob=t1odds+(t1odds*t2odds)
                t2prob=1-t1prob
                    if (t1prob>=0.5){
                    imageObj.setAttribute('src',team1logo);nameObj.innerHTML=team1  + " <b>Favored</b>";;
                    wpObj.innerText = t1prob.toLocaleString(undefined,{style: 'percent', minimumFractionDigits:1}); 
                    return(true)
                } else {
                    imageObj.setAttribute('src',team2logo);nameObj.innerHTML=team2  + " <b>Favored</b>";;
                    wpObj.innerText = t2prob.toLocaleString(undefined,{style: 'percent', minimumFractionDigits:1}); 
                    return(true)
                }
            } else if (score1==0&&score2==1) {
                t1prob=t1odds*t1odds
                t2prob=1-t1prob
                    if (t1prob>=0.5){
                    imageObj.setAttribute('src',team1logo);nameObj.innerHTML=team1  + " <b>Favored</b>";;
                    wpObj.innerText = t1prob.toLocaleString(undefined,{style: 'percent', minimumFractionDigits:1}); 
                    return(true)
                } else {
                    imageObj.setAttribute('src',team2logo);nameObj.innerHTML=team2  + " <b>Favored</b>";;
                    wpObj.innerText = t2prob.toLocaleString(undefined,{style: 'percent', minimumFractionDigits:1}); 
                    return(true)
                }
            } else {
                t1prob = t1odds*(t1odds+(t1odds*t2odds))+t2odds*(t1odds*t1odds)
                t2prob=1-t1prob
                    if (t1prob>=0.5){
                    imageObj.setAttribute('src',team1logo);nameObj.innerHTML=team1  + " <b>Favored</b>";;
                    wpObj.innerText = t1prob.toLocaleString(undefined,{style: 'percent', minimumFractionDigits:1}); 
                    return(true)
                } else {
                    imageObj.setAttribute('src',team2logo);nameObj.innerHTML=team2  + " <b>Favored</b>";;
                    wpObj.innerText = t2prob.toLocaleString(undefined,{style: 'percent', minimumFractionDigits:1}); 
                    return(true)
                }
            }
        }
    } else if (serieslength ==5) {
        if (score1 > 3 || score2 > 3 || (score1==3 && score2==3)) {
        //BAD RESPONSE
        imageObj.setAttribute('src','/src/logos/placeholder_matchupmaker.webp');nameObj.innerText="⠀";
        wpObj.innerText = ""
        return(false)
        } else if (score1==3){
            imageObj.setAttribute('src',team1logo);nameObj.innerHTML=team1  + " <b>Wins</b>";;
            wpObj.innerText = Number(1).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:0});
            return(true) 
        } else if (score2==3){
            imageObj.setAttribute('src',team2logo);nameObj.innerHTML=team2  + " <b>Wins</b>";;
            wpObj.innerText = Number(1).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:0});
            return(true)      
        } else {
            if (score1==2&&score2==2) {
                t1prob=t1odds
                t2prob=1-t1prob
                if (t1prob>=0.5){
                    imageObj.setAttribute('src',team1logo);nameObj.innerHTML=team1  + " <b>Favored</b>";;
                    wpObj.innerText = t1prob.toLocaleString(undefined,{style: 'percent', minimumFractionDigits:1}); 
                    return(true)
                } else {
                    imageObj.setAttribute('src',team2logo);nameObj.innerHTML=team2  + " <b>Favored</b>";;
                    wpObj.innerText = t2prob.toLocaleString(undefined,{style: 'percent', minimumFractionDigits:1}); 
                    return(true)
                }
            } else if (score1==1&&score2==2) {
                t1prob=t1odds*(t1odds)
                t2prob=1-t1prob
                if (t1prob>=0.5){
                    imageObj.setAttribute('src',team1logo);nameObj.innerHTML=team1  + " <b>Favored</b>";;
                    wpObj.innerText = t1prob.toLocaleString(undefined,{style: 'percent', minimumFractionDigits:1}); 
                    return(true)
                } else {
                    imageObj.setAttribute('src',team2logo);nameObj.innerHTML=team2  + " <b>Favored</b>";;
                    wpObj.innerText = t2prob.toLocaleString(undefined,{style: 'percent', minimumFractionDigits:1}); 
                    return(true)
                }
            } else if (score1==2&&score2==1) {
                t1prob=t1odds+t2odds*(t1odds)
                t2prob=1-t1prob
                if (t1prob>=0.5){
                    imageObj.setAttribute('src',team1logo);nameObj.innerHTML=team1  + " <b>Favored</b>";;
                    wpObj.innerText = t1prob.toLocaleString(undefined,{style: 'percent', minimumFractionDigits:1}); 
                    return(true)
                } else {
                    imageObj.setAttribute('src',team2logo);nameObj.innerHTML=team2  + " <b>Favored</b>";;
                    wpObj.innerText = t2prob.toLocaleString(undefined,{style: 'percent', minimumFractionDigits:1}); 
                    return(true)
                }
            } else if (score1==0&&score2==2) {
                t1prob=t1odds*(t1odds*(t1odds))
                t2prob=1-t1prob
                if (t1prob>=0.5){
                    imageObj.setAttribute('src',team1logo);nameObj.innerHTML=team1  + " <b>Favored</b>";;
                    wpObj.innerText = t1prob.toLocaleString(undefined,{style: 'percent', minimumFractionDigits:1}); 
                    return(true)
                } else {
                    imageObj.setAttribute('src',team2logo);nameObj.innerHTML=team2  + " <b>Favored</b>";;
                    wpObj.innerText = t2prob.toLocaleString(undefined,{style: 'percent', minimumFractionDigits:1}); 
                    return(true)
                }
            } else if (score1==2&&score2==0) {
                t1prob=t1odds+t2odds*(t1odds+t2odds*(t1odds))
                t2prob=1-t1prob
                if (t1prob>=0.5){
                    imageObj.setAttribute('src',team1logo);nameObj.innerHTML=team1  + " <b>Favored</b>";;
                    wpObj.innerText = t1prob.toLocaleString(undefined,{style: 'percent', minimumFractionDigits:1}); 
                    return(true)
                } else {
                    imageObj.setAttribute('src',team2logo);nameObj.innerHTML=team2  + " <b>Favored</b>";;
                    wpObj.innerText = t2prob.toLocaleString(undefined,{style: 'percent', minimumFractionDigits:1}); 
                    return(true)
                }
            } else if (score1==1&&score2==1) {
                t1prob=t1odds*(t1odds+t2odds*(t1odds))+t2odds*(t1odds*(t1odds))
                t2prob=1-t1prob
                if (t1prob>=0.5){
                    imageObj.setAttribute('src',team1logo);nameObj.innerHTML=team1  + " <b>Favored</b>";;
                    wpObj.innerText = t1prob.toLocaleString(undefined,{style: 'percent', minimumFractionDigits:1}); 
                    return(true)
                } else {
                    imageObj.setAttribute('src',team2logo);nameObj.innerHTML=team2  + " <b>Favored</b>";;
                    wpObj.innerText = t2prob.toLocaleString(undefined,{style: 'percent', minimumFractionDigits:1}); 
                    return(true)
                }
            } else if (score1==0&&score2==1) {
                t1prob=t1odds*(t1odds*(t1odds+t2odds*(t1odds))+t2odds*(t1odds*(t1odds)))+t2odds*(t1odds*(t1odds*(t1odds)))
                t2prob=1-t1prob
                if (t1prob>=0.5){
                    imageObj.setAttribute('src',team1logo);nameObj.innerHTML=team1  + " <b>Favored</b>";;
                    wpObj.innerText = t1prob.toLocaleString(undefined,{style: 'percent', minimumFractionDigits:1}); 
                    return(true)
                } else {
                    imageObj.setAttribute('src',team2logo);nameObj.innerHTML=team2  + " <b>Favored</b>";;
                    wpObj.innerText = t2prob.toLocaleString(undefined,{style: 'percent', minimumFractionDigits:1}); 
                    return(true)
                }
            } else if (score1==1&&score2==0) {
                t1prob=t1odds*(t1odds+t2odds*(t1odds+t2odds*(t1odds)))+t2odds*(t1odds*(t1odds+t2odds*(t1odds))+t2odds*(t1odds*(t1odds)))
                t2prob=1-t1prob
                if (t1prob>=0.5){
                    imageObj.setAttribute('src',team1logo);nameObj.innerHTML=team1  + " <b>Favored</b>";;
                    wpObj.innerText = t1prob.toLocaleString(undefined,{style: 'percent', minimumFractionDigits:1}); 
                    return(true)
                } else {
                    imageObj.setAttribute('src',team2logo);nameObj.innerHTML=team2  + " <b>Favored</b>";;
                    wpObj.innerText = t2prob.toLocaleString(undefined,{style: 'percent', minimumFractionDigits:1}); 
                    return(true)
                }
            } else {
                t1prob=t1odds*(t1odds*(t1odds+t2odds*(t1odds+t2odds*(t1odds)))+t2odds*(t1odds*(t1odds+t2odds*(t1odds))+t2odds*(t1odds*(t1odds))))+t2odds*(t1odds*(t1odds*(t1odds+t2odds*(t1odds))+t2odds*(t1odds*(t1odds)))+t2odds*(t1odds*(t1odds*(t1odds))))
                t2prob=1-t1prob
                if (t1prob>=0.5){
                    imageObj.setAttribute('src',team1logo);nameObj.innerHTML=team1  + " <b>Favored</b>";;
                    wpObj.innerText = t1prob.toLocaleString(undefined,{style: 'percent', minimumFractionDigits:1}); 
                    return(true)
                } else {
                    imageObj.setAttribute('src',team2logo);nameObj.innerHTML=team2  + " <b>Favored</b>";;
                    wpObj.innerText = t2prob.toLocaleString(undefined,{style: 'percent', minimumFractionDigits:1}); 
                    return(true)
                }
            }
        }
    } else {
        if (score1 > 4 || score2 > 4 || (score1==4 && score2==4)) {
        //BAD RESPONSE
        imageObj.setAttribute('src','/src/logos/placeholder_matchupmaker.webp');nameObj.innerText="⠀";
        wpObj.innerText = ""
        return(false)
        } else if (score1==4){
            imageObj.setAttribute('src',team1logo);nameObj.innerHTML=team1  + " <b>Wins</b>";;
            wpObj.innerText = Number(1).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:0});
            return(true) 
        } else if (score2==4){
            imageObj.setAttribute('src',team2logo);nameObj.innerHTML=team2  + " <b>Wins</b>";;
            wpObj.innerText = Number(1).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:0});
            return(true)      
        } else {
            if (score1==3&&score2==3) {
                t1prob=t1odds
                t2prob=1-t1prob
                if (t1prob>=0.5){
                    imageObj.setAttribute('src',team1logo);nameObj.innerHTML=team1  + " <b>Favored</b>"; + " <b>Favored</b>";
                    wpObj.innerText = t1prob.toLocaleString(undefined,{style: 'percent', minimumFractionDigits:1}); 
                    return(true)
                } else {
                    imageObj.setAttribute('src',team2logo);nameObj.innerHTML=team2  + " <b>Favored</b>";;
                    wpObj.innerText = t2prob.toLocaleString(undefined,{style: 'percent', minimumFractionDigits:1}); 
                    return(true)
                }
            } else if (score1==2&&score2==3) {
                t1prob=t1odds*(t1odds)
                t2prob=1-t1prob
                if (t1prob>=0.5){
                    imageObj.setAttribute('src',team1logo);nameObj.innerHTML=team1  + " <b>Favored</b>";;
                    wpObj.innerText = t1prob.toLocaleString(undefined,{style: 'percent', minimumFractionDigits:1}); 
                    return(true)
                } else {
                    imageObj.setAttribute('src',team2logo);nameObj.innerHTML=team2  + " <b>Favored</b>";;
                    wpObj.innerText = t2prob.toLocaleString(undefined,{style: 'percent', minimumFractionDigits:1}); 
                    return(true)
                }
            } else if (score1==3&&score2==2) {
                t1prob=t1odds+t2odds*(t1odds)
                t2prob=1-t1prob
                if (t1prob>=0.5){
                    imageObj.setAttribute('src',team1logo);nameObj.innerHTML=team1  + " <b>Favored</b>";;
                    wpObj.innerText = t1prob.toLocaleString(undefined,{style: 'percent', minimumFractionDigits:1}); 
                    return(true)
                } else {
                    imageObj.setAttribute('src',team2logo);nameObj.innerHTML=team2  + " <b>Favored</b>";;
                    wpObj.innerText = t2prob.toLocaleString(undefined,{style: 'percent', minimumFractionDigits:1}); 
                    return(true)
                }
            } else if (score1==1&&score2==3) {
                t1prob=t1odds*(t1odds*(t1odds))
                t2prob=1-t1prob
                if (t1prob>=0.5){
                    imageObj.setAttribute('src',team1logo);nameObj.innerHTML=team1  + " <b>Favored</b>";;
                    wpObj.innerText = t1prob.toLocaleString(undefined,{style: 'percent', minimumFractionDigits:1}); 
                    return(true)
                } else {
                    imageObj.setAttribute('src',team2logo);nameObj.innerHTML=team2  + " <b>Favored</b>";;
                    wpObj.innerText = t2prob.toLocaleString(undefined,{style: 'percent', minimumFractionDigits:1}); 
                    return(true)
                }
            } else if (score1==3&&score2==1) {
                t1prob=t1odds+t2odds*(t1odds+t2odds*(t1odds))
                t2prob=1-t1prob
                if (t1prob>=0.5){
                    imageObj.setAttribute('src',team1logo);nameObj.innerHTML=team1  + " <b>Favored</b>";;
                    wpObj.innerText = t1prob.toLocaleString(undefined,{style: 'percent', minimumFractionDigits:1}); 
                    return(true)
                } else {
                    imageObj.setAttribute('src',team2logo);nameObj.innerHTML=team2  + " <b>Favored</b>";;
                    wpObj.innerText = t2prob.toLocaleString(undefined,{style: 'percent', minimumFractionDigits:1}); 
                    return(true)
                }
            } else if (score1==2&&score2==2) {
                t1prob=t1odds*(t1odds+t2odds*(t1odds))+t2odds*(t1odds*(t1odds))
                t2prob=1-t1prob
                if (t1prob>=0.5){
                    imageObj.setAttribute('src',team1logo);nameObj.innerHTML=team1  + " <b>Favored</b>";;
                    wpObj.innerText = t1prob.toLocaleString(undefined,{style: 'percent', minimumFractionDigits:1}); 
                    return(true)
                } else {
                    imageObj.setAttribute('src',team2logo);nameObj.innerHTML=team2  + " <b>Favored</b>";;
                    wpObj.innerText = t2prob.toLocaleString(undefined,{style: 'percent', minimumFractionDigits:1}); 
                    return(true)
                }
            } else if (score1==0&&score2==3) {
                t1prob=t1odds*(t1odds*(t1odds*(t1odds)))
                t2prob=1-t1prob
                if (t1prob>=0.5){
                    imageObj.setAttribute('src',team1logo);nameObj.innerHTML=team1  + " <b>Favored</b>";;
                    wpObj.innerText = t1prob.toLocaleString(undefined,{style: 'percent', minimumFractionDigits:1}); 
                    return(true)
                } else {
                    imageObj.setAttribute('src',team2logo);nameObj.innerHTML=team2  + " <b>Favored</b>";;
                    wpObj.innerText = t2prob.toLocaleString(undefined,{style: 'percent', minimumFractionDigits:1}); 
                    return(true)
                }
            } else if (score1==3&&score2==0) {
                t1prob=t1odds+t2odds*(t1odds+t2odds*(t1odds+t2odds*(t1odds)))
                t2prob=1-t1prob
                if (t1prob>=0.5){
                    imageObj.setAttribute('src',team1logo);nameObj.innerHTML=team1  + " <b>Favored</b>";;
                    wpObj.innerText = t1prob.toLocaleString(undefined,{style: 'percent', minimumFractionDigits:1}); 
                    return(true)
                } else {
                    imageObj.setAttribute('src',team2logo);nameObj.innerHTML=team2  + " <b>Favored</b>";;
                    wpObj.innerText = t2prob.toLocaleString(undefined,{style: 'percent', minimumFractionDigits:1}); 
                    return(true)
                }
            } else if (score1==1&&score2==2) {
                t1prob=t1odds*(t1odds*(t1odds+t2odds*(t1odds))+t2odds*(t1odds*(t1odds)))+t2odds*(t1odds*(t1odds*(t1odds)))
                t2prob=1-t1prob
                if (t1prob>=0.5){
                    imageObj.setAttribute('src',team1logo);nameObj.innerHTML=team1  + " <b>Favored</b>";;
                    wpObj.innerText = t1prob.toLocaleString(undefined,{style: 'percent', minimumFractionDigits:1}); 
                    return(true)
                } else {
                    imageObj.setAttribute('src',team2logo);nameObj.innerHTML=team2  + " <b>Favored</b>";;
                    wpObj.innerText = t2prob.toLocaleString(undefined,{style: 'percent', minimumFractionDigits:1}); 
                    return(true)
                }
            } else if (score1==2&&score2==1) {
                t1prob=t1odds*(t1odds+t2odds*(t1odds+t2odds*(t1odds)))+t2odds*(t1odds*(t1odds+t2odds*(t1odds))+t2odds*(t1odds*(t1odds)))
                t2prob=1-t1prob
                if (t1prob>=0.5){
                    imageObj.setAttribute('src',team1logo);nameObj.innerHTML=team1  + " <b>Favored</b>";;
                    wpObj.innerText = t1prob.toLocaleString(undefined,{style: 'percent', minimumFractionDigits:1}); 
                    return(true)
                } else {
                    imageObj.setAttribute('src',team2logo);nameObj.innerHTML=team2  + " <b>Favored</b>";;
                    wpObj.innerText = t2prob.toLocaleString(undefined,{style: 'percent', minimumFractionDigits:1}); 
                    return(true)
                }
            } else if (score1==0&&score2==2) {
                t1prob=t1odds*(t1odds*(t1odds*(t1odds+t2odds*(t1odds))+t2odds*(t1odds*(t1odds)))+t2odds*(t1odds*(t1odds*(t1odds))))+t2odds*(t1odds*(t1odds*(t1odds*(t1odds))))
                t2prob=1-t1prob
                if (t1prob>=0.5){
                    imageObj.setAttribute('src',team1logo);nameObj.innerHTML=team1  + " <b>Favored</b>";;
                    wpObj.innerText = t1prob.toLocaleString(undefined,{style: 'percent', minimumFractionDigits:1}); 
                    return(true)
                } else {
                    imageObj.setAttribute('src',team2logo);nameObj.innerHTML=team2  + " <b>Favored</b>";;
                    wpObj.innerText = t2prob.toLocaleString(undefined,{style: 'percent', minimumFractionDigits:1}); 
                    return(true)
                }
            } else if (score1==2&&score2==0) {
                t1prob=t1odds*(t1odds+t2odds*(t1odds+t2odds*(t1odds+t2odds*(t1odds))))+t2odds*(t1odds*(t1odds+t2odds*(t1odds+t2odds*(t1odds)))+t2odds*(t1odds*(t1odds+t2odds*(t1odds))+t2odds*(t1odds*(t1odds))))
                t2prob=1-t1prob
                if (t1prob>=0.5){
                    imageObj.setAttribute('src',team1logo);nameObj.innerHTML=team1  + " <b>Favored</b>";;
                    wpObj.innerText = t1prob.toLocaleString(undefined,{style: 'percent', minimumFractionDigits:1}); 
                    return(true)
                } else {
                    imageObj.setAttribute('src',team2logo);nameObj.innerHTML=team2  + " <b>Favored</b>";;
                    wpObj.innerText = t2prob.toLocaleString(undefined,{style: 'percent', minimumFractionDigits:1}); 
                    return(true)
                }
            } else if (score1==1&&score2==1) {
                t1prob=t1odds*(t1odds*(t1odds+t2odds*(t1odds+t2odds*(t1odds)))+t2odds*(t1odds*(t1odds+t2odds*(t1odds))+t2odds*(t1odds*(t1odds))))+t2odds*(t1odds*(t1odds*(t1odds+t2odds*(t1odds))+t2odds*(t1odds*(t1odds)))+t2odds*(t1odds*(t1odds*(t1odds))))
                t2prob=1-t1prob
                if (t1prob>=0.5){
                    imageObj.setAttribute('src',team1logo);nameObj.innerHTML=team1  + " <b>Favored</b>";;
                    wpObj.innerText = t1prob.toLocaleString(undefined,{style: 'percent', minimumFractionDigits:1}); 
                    return(true)
                } else {
                    imageObj.setAttribute('src',team2logo);nameObj.innerHTML=team2  + " <b>Favored</b>";;
                    wpObj.innerText = t2prob.toLocaleString(undefined,{style: 'percent', minimumFractionDigits:1}); 
                    return(true)
                }
            } else if (score1==0&&score2==1) {
                t1prob=t1odds*(t1odds*(t1odds*(t1odds+t2odds*(t1odds+t2odds*(t1odds)))+t2odds*(t1odds*(t1odds+t2odds*(t1odds))+t2odds*(t1odds*(t1odds))))+t2odds*(t1odds*(t1odds*(t1odds+t2odds*(t1odds))+t2odds*(t1odds*(t1odds)))+t2odds*(t1odds*(t1odds*(t1odds)))))+t2odds*(t1odds*(t1odds*(t1odds*(t1odds+t2odds*(t1odds))+t2odds*(t1odds*(t1odds)))+t2odds*(t1odds*(t1odds*(t1odds))))+t2odds*(t1odds*(t1odds*(t1odds*(t1odds)))))
                t2prob=1-t1prob
                if (t1prob>=0.5){
                    imageObj.setAttribute('src',team1logo);nameObj.innerHTML=team1  + " <b>Favored</b>";;
                    wpObj.innerText = t1prob.toLocaleString(undefined,{style: 'percent', minimumFractionDigits:1}); 
                    return(true)
                } else {
                    imageObj.setAttribute('src',team2logo);nameObj.innerHTML=team2  + " <b>Favored</b>";;
                    wpObj.innerText = t2prob.toLocaleString(undefined,{style: 'percent', minimumFractionDigits:1}); 
                    return(true)
                }
            } else if (score1==1&&score2==0) {
                t1prob=t1odds*(t1odds*(t1odds+t2odds*(t1odds+t2odds*(t1odds+t2odds*(t1odds))))+t2odds*(t1odds*(t1odds+t2odds*(t1odds+t2odds*(t1odds)))+t2odds*(t1odds*(t1odds+t2odds*(t1odds))+t2odds*(t1odds*(t1odds)))))+t2odds*(t1odds*(t1odds*(t1odds+t2odds*(t1odds+t2odds*(t1odds)))+t2odds*(t1odds*(t1odds+t2odds*(t1odds))+t2odds*(t1odds*(t1odds))))+t2odds*(t1odds*(t1odds*(t1odds+t2odds*(t1odds))+t2odds*(t1odds*(t1odds)))+t2odds*(t1odds*(t1odds*(t1odds)))))
                t2prob=1-t1prob
                if (t1prob>=0.5){
                    imageObj.setAttribute('src',team1logo);nameObj.innerHTML=team1  + " <b>Favored</b>";;
                    wpObj.innerText = t1prob.toLocaleString(undefined,{style: 'percent', minimumFractionDigits:1}); 
                    return(true)
                } else {
                    imageObj.setAttribute('src',team2logo);nameObj.innerHTML=team2  + " <b>Favored</b>";;
                    wpObj.innerText = t2prob.toLocaleString(undefined,{style: 'percent', minimumFractionDigits:1}); 
                    return(true)
                }
            } else {
                t1prob=t1odds*(t1odds*(t1odds*(t1odds+t2odds*(t1odds+t2odds*(t1odds+t2odds*(t1odds))))+t2odds*(t1odds*(t1odds+t2odds*(t1odds+t2odds*(t1odds)))+t2odds*(t1odds*(t1odds+t2odds*(t1odds))+t2odds*(t1odds*(t1odds)))))+t2odds*(t1odds*(t1odds*(t1odds+t2odds*(t1odds+t2odds*(t1odds)))+t2odds*(t1odds*(t1odds+t2odds*(t1odds))+t2odds*(t1odds*(t1odds))))+t2odds*(t1odds*(t1odds*(t1odds+t2odds*(t1odds))+t2odds*(t1odds*(t1odds)))+t2odds*(t1odds*(t1odds*(t1odds))))))+t2odds*(t1odds*(t1odds*(t1odds*(t1odds+t2odds*(t1odds+t2odds*(t1odds)))+t2odds*(t1odds*(t1odds+t2odds*(t1odds))+t2odds*(t1odds*(t1odds))))+t2odds*(t1odds*(t1odds*(t1odds+t2odds*(t1odds))+t2odds*(t1odds*(t1odds)))+t2odds*(t1odds*(t1odds*(t1odds)))))+t2odds*(t1odds*(t1odds*(t1odds*(t1odds+t2odds*(t1odds))+t2odds*(t1odds*(t1odds)))+t2odds*(t1odds*(t1odds*(t1odds))))+t2odds*(t1odds*(t1odds*(t1odds*(t1odds))))))
                t2prob=1-t1prob
                if (t1prob>=0.5){
                    imageObj.setAttribute('src',team1logo);nameObj.innerHTML=team1  + " <b>Favored</b>";;
                    wpObj.innerText = t1prob.toLocaleString(undefined,{style: 'percent', minimumFractionDigits:1}); 
                    return(true)
                } else {
                    imageObj.setAttribute('src',team2logo);nameObj.innerHTML=team2  + " <b>Favored</b>";;
                    wpObj.innerText = t2prob.toLocaleString(undefined,{style: 'percent', minimumFractionDigits:1}); 
                    return(true)
            }
        }
}
    }
}
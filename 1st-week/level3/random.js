const members = [
    { name: "강한희", part: "Server", group: "OB" },
    { name: "고성용", part: "Server", group: "OB" },
    { name: "구건모", part: "Server", group: "YB" },
    { name: "권세훈", part: "Server", group: "YB" },
    { name: "김영권", part: "Server", group: "YB" },
    { name: "김은지", part: "Server", group: "YB" },
    { name: "김진욱", part: "Server", group: "YB" },
    { name: "김희빈", part: "Server", group: "OB" },
    { name: "남지윤", part: "Server", group: "YB" },
    { name: "문규원", part: "Server", group: "YB" },
    { name: "박나희", part: "Server", group: "OB" },
    { name: "박정현", part: "Server", group: "YB" },
    { name: "박현지", part: "Server", group: "OB" },
    { name: "변주현", part: "Server", group: "OB" },
    { name: "서호영", part: "Server", group: "OB" },
    { name: "설지원", part: "Server", group: "YB" },
    { name: "손시형", part: "Server", group: "YB" },
    { name: "안준영", part: "Server", group: "OB" },
    { name: "장서현", part: "Server", group: "OB" },
    { name: "오예원", part: "Server", group: "OB" },
    { name: "이다은", part: "Server", group: "OB" },
    { name: "이동근", part: "Server", group: "YB" },
    { name: "이솔", part: "Server", group: "OB" },
    { name: "이승헌", part: "Server", group: "YB" },
    { name: "이정은", part: "Server", group: "YB" },
    { name: "이제준", part: "Server", group: "YB" },
    { name: "정설희", part: "Server", group: "OB" },
    { name: "조윤서", part: "Server", group: "OB" },
    { name: "조재호", part: "Server", group: "YB" },
    { name: "조찬우", part: "Server", group: "YB" },
    { name: "주어진사랑", part: "Server", group: "YB" },
    { name: "주효식", part: "Server", group: "YB" },
    { name: "채정아", part: "Server", group: "OB" },
    { name: "최영재", part: "Server", group: "OB" },
    { name: "최유림", part: "Server", group: "YB" },
    { name: "최진영", part: "Server", group: "YB" },
    { name: "허유정", part: "Server", group: "YB" },
  ];

const get_YB = (members) => {
    let YBLists = [];
    members.forEach(member => {
        if(member.group == "YB"){
            YBLists.push(member);
        } 
    });
    return YBLists;
}
const get_OB = (members) => {
    let OBLists = [];
    members.forEach(member => {
        if(member.group == "OB"){
            OBLists.push(member);
        } 
    });
    return OBLists;
}

const YB = get_YB(members);
const OB = get_OB(members);

Math.floor(Math.random() * OB.length);
Math.floor(Math.random() * YB.length);

memberCount = 4; // 조원 수 입력, 조원 수에 따라 조의 수가 달라짐.

teamCount = Math.floor(members.length / memberCount);
teams = []
for(let i = 0;i < teamCount;i++){
    teams.push([]);
}

const OBLen = OB.length;
const YBLen = YB.length;

let index;
for(let i = 0;i < OBLen;i++){
    index = Math.floor(Math.random() * (OB.length))
    if(index == OB.length) index --;
    teams[i % teamCount].push(OB[index])
    OB.splice(index, 1);
}
for(let i = 0;i < YBLen;i++){
    index = Math.floor(Math.random() * (YB.length))
    if(index == YB.length) index --;
    teams[teamCount - 1 - i % teamCount].push(YB[index])
    YB.splice(index, 1);
}
teams.sort((a, b) => a.length - b.length);
index = 0;
teams.forEach(team => {
    index++;
    teamStr = "";
    team.forEach(member => {
        teamStr += member.name + `(${member.group})` + ", ";
    })
    console.log(`${index}팀: ${teamStr}`)
})

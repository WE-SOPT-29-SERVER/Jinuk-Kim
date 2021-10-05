const team = {
    members: [
        { name: "손시형", home: "서울대입구", age: 24, hobby: "네발로 기어가기"},
        { name: "김희빈", home: "대방", age: 24, hobby: "술먹고 잠자기"},
        { name: "김진욱", home: "상도", age: 25, hobby: "몰아가기"},
        { name: "정설희", home: "상도", age: 23, hobby: "술마시고 또 술마시러 가기"},
        ],
    getAllNames: function () {
        let namestr = "조원 이름: "
        this.members.forEach(member => 
            namestr += member.name + ", ");
        return namestr;
    },
    getHome: function (name) {
        let home;
        this.members.forEach(member => {
            if(member.name == name){
                home =  member.home;
            }});
        return home;
    },
    getAge: function (name) {
        let age;
        this.members.forEach(member => {
            if(member.name == name){
                age = member.age;
            }});
        return age;
    },
    getHobby: function (name) {
        let hobby;
        this.members.forEach(member => {
            if(member.name == name){
                hobby = member.hobby;
            }});
        return hobby;
    },
};

console.log(team.getAllNames());
console.log(team.getHome("손시형"));
console.log(team.getAge("김희빈"));
console.log(team.getHobby("정설희"));
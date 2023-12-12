function skillsMember(){
    return{
        restrict: 'E',
        templatUrl: 'modules/skills/views/member.html',
        controller:'SkillsMemberController',
        controllerAs:'vm',
        bindToController: true,
        scope:{
            member:'='
        }
    };
}
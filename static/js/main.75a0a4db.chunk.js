(this["webpackJsonphot-burgers"]=this["webpackJsonphot-burgers"]||[]).push([[0],{41:function(e,a,t){e.exports=t(75)},46:function(e,a,t){},51:function(e,a,t){},52:function(e,a,t){},53:function(e,a,t){},55:function(e,a,t){},56:function(e,a,t){},57:function(e,a,t){},58:function(e,a,t){},59:function(e,a,t){},60:function(e,a,t){},61:function(e,a,t){},62:function(e,a,t){},63:function(e,a,t){},64:function(e,a,t){},65:function(e,a,t){},66:function(e,a,t){},67:function(e,a,t){},68:function(e,a,t){},69:function(e,a,t){},75:function(e,a,t){"use strict";t.r(a);var r=t(1),n=t.n(r),s=t(33),l=t.n(s),c=t(5),o=t(9),i=t(34),m=t(35),u=t(39),p=t(38),E=(t(46),t(87)),g=t(88),b=t(89),d=t(90),N=t(11),f=n.a.createContext(null);function h(){return n.a.createElement(f.Consumer,null,(function(e){return n.a.createElement("div",{className:"topbarContainer"},n.a.createElement("div",{className:"topbarLeft"},n.a.createElement(N.b,{to:"/Profile"},n.a.createElement("span",{className:"logo"},"MySoc"))),n.a.createElement("div",{className:"topbarCenter"},n.a.createElement("div",{className:"searchbar"},n.a.createElement(E.a,{className:"searchIcon"}),n.a.createElement("input",{placeholder:"Search for friend, post or video",className:"searchInput"}))),n.a.createElement("div",{className:"topbarRight"},n.a.createElement("div",{className:"topbarLinks"},n.a.createElement(N.b,{to:"/Profile"},n.a.createElement("span",{className:"topbarLink homepage"},"Homepage")),n.a.createElement(N.b,{to:"/timeline"},n.a.createElement("span",{className:"topbarLink"},"Timeline"))),n.a.createElement("div",{className:"topbarIcons"},n.a.createElement("div",{className:"topbarIconItem"},n.a.createElement(g.a,null),n.a.createElement("span",{className:"topbarIconBadge"},"1")),n.a.createElement(N.b,{to:"/messenger"},n.a.createElement("div",{className:"topbarIconItem"},n.a.createElement(b.a,null),n.a.createElement("span",{className:"topbarIconBadge"},"2"))),n.a.createElement("div",{className:"topbarIconItem"},n.a.createElement(d.a,null),n.a.createElement("span",{className:"topbarIconBadge"},"1"))),n.a.createElement(N.b,{to:"/"},n.a.createElement("img",{onClick:e.onClickTopbarImg,src:e.currentPerson.icon||e.currentPerson.userId&&"assets/person/noAvatar.png",alt:"",className:"topbarImg"}))))}))}t(51);var v=t(91),O=t(92),I=t(93),k=t(94),j=t(95),C=t(96),U=t(97),S=t(98);t(52);function P(e){var a=e.user;return n.a.createElement(f.Consumer,null,(function(e){return n.a.createElement(N.b,{className:"usersLinks",to:"/user"},n.a.createElement("li",{onClick:function(){return e.onClickUser(a.userId)},className:"sidebarFriend"},n.a.createElement("img",{className:"sidebarFriendImg",src:a.icon||"assets/person/noAvatar.png",alt:""}),n.a.createElement("span",{className:"sidebarFriendName"},a.userName||"unknown")))}))}function B(){return n.a.createElement(f.Consumer,null,(function(e){return n.a.createElement("div",{className:"sidebar"},n.a.createElement("div",{className:"sidebarWrapper"},n.a.createElement("ul",{className:"sidebarList"},n.a.createElement("li",{className:"sidebarListItem"},n.a.createElement(v.a,{className:"sidebarIcon"}),n.a.createElement("span",{className:"sidebarListItemText"},"Feed")),n.a.createElement("li",{className:"sidebarListItem"},n.a.createElement(b.a,{className:"sidebarIcon"}),n.a.createElement("span",{className:"sidebarListItemText"},"Chats")),n.a.createElement("li",{className:"sidebarListItem"},n.a.createElement(O.a,{className:"sidebarIcon"}),n.a.createElement("span",{className:"sidebarListItemText"},"Videos")),n.a.createElement("li",{className:"sidebarListItem"},n.a.createElement(I.a,{className:"sidebarIcon"}),n.a.createElement("span",{className:"sidebarListItemText"},"Groups")),n.a.createElement("li",{className:"sidebarListItem"},n.a.createElement(k.a,{className:"sidebarIcon"}),n.a.createElement("span",{className:"sidebarListItemText"},"Bookmarks")),n.a.createElement("li",{className:"sidebarListItem"},n.a.createElement(j.a,{className:"sidebarIcon"}),n.a.createElement("span",{className:"sidebarListItemText"},"Questions")),n.a.createElement("li",{className:"sidebarListItem"},n.a.createElement(C.a,{className:"sidebarIcon"}),n.a.createElement("span",{className:"sidebarListItemText"},"Jobs")),n.a.createElement("li",{className:"sidebarListItem"},n.a.createElement(U.a,{className:"sidebarIcon"}),n.a.createElement("span",{className:"sidebarListItemText"},"Events")),n.a.createElement("li",{className:"sidebarListItem"},n.a.createElement(S.a,{className:"sidebarIcon"}),n.a.createElement("span",{className:"sidebarListItemText"},"Courses"))),n.a.createElement("button",{className:"sidebarButton"},"Show More"),n.a.createElement("hr",{className:"sidebarHr"}),n.a.createElement("ul",{className:"sidebarFriendList"},Object.keys(e.allUsers).map((function(a){if(a!=e.currentPerson.userId)return n.a.createElement(P,{key:a,user:e.allUsers[a]})})))))}))}var y=t(6),L=(t(53),t(99)),T=t(100),w=t(24),x=t.n(w);function F(e){var a=Object(r.useState)(e.post.like),t=Object(y.a)(a,2),s=t[0],l=t[1],c=Object(r.useState)(!1),o=Object(y.a)(c,2),i=o[0],m=o[1],u=Object(r.useState)(!1),p=Object(y.a)(u,2),E=p[0],g=p[1],b=function(a){var t=function(e){return l(i?s-1:s+1),m(!i),i?--e:++e,e}(s);e.onClickLike(a,t)};return n.a.createElement(f.Consumer,null,(function(a){var t;return n.a.createElement("div",{className:"post"},n.a.createElement("div",{className:"postWrapper"},n.a.createElement("div",{className:"postTop"},n.a.createElement("div",{className:"postTopLeft"},n.a.createElement(N.b,{className:"usersLinks",to:"/user"},n.a.createElement("img",{onClick:function(){return a.onClickUser(e.post.id)},className:"postProfileImg",src:a.allUsers[e.post.id]&&a.allUsers[e.post.id].icon?a.allUsers[e.post.id].icon:"",alt:""})),n.a.createElement("span",{className:"postUsername"}),n.a.createElement("span",{className:"postDate"},x()(e.post.date).fromNow())),!e.timeline&&!e.user&&n.a.createElement("div",{className:"postTopRight"},E&&n.a.createElement("button",{onClick:function(a){return function(a){e.onClickDelBut(a),g(!1)}(a)},className:"delButtonPost",index:e.index},"Delete"),n.a.createElement(L.a,{className:"MoreVert",onClick:function(){return g(!E)}}))),n.a.createElement("div",{className:"postCenter"},n.a.createElement("span",{className:"postText"},null===(t=e.post)||void 0===t?void 0:t.desc),n.a.createElement("img",{className:"postImg",src:e.post.photo,alt:""})),e.post.location&&n.a.createElement("div",{className:"locationIcon"},n.a.createElement(T.a,{htmlColor:"green",className:"shareIcon"}),n.a.createElement("span",{className:"shareOptionText"},e.post.location)),n.a.createElement("div",{className:"postBottom"},n.a.createElement("div",{className:"postBottomLeft"},n.a.createElement("img",{index:e.index,className:"likeIcon",src:"assets/like.png",onClick:function(e){return b(e)},alt:""}),n.a.createElement("img",{index:e.index,className:"likeIcon",src:"assets/heart.png",onClick:function(e){return b(e)},alt:""}),n.a.createElement("span",{className:"postLikeCounter"},s," people like it")),n.a.createElement("div",{className:"postBottomRight"},n.a.createElement("span",{className:"postCommentText"},e.post.comment," comments")))))}))}t(55);var D=t(101);function J(e){var a=Object(r.useState)(!1),t=Object(y.a)(a,2),s=t[0],l=t[1],c=Object(r.useState)(""),o=Object(y.a)(c,2),i=o[0],m=o[1],u=Object(r.useState)(!1),p=Object(y.a)(u,2),E=p[0],g=p[1],b=Object(r.useState)(""),d=Object(y.a)(b,2),N=d[0],h=d[1],v=Object(r.useState)(!1),O=Object(y.a)(v,2),I=O[0],k=O[1],j=Object(r.useState)(""),C=Object(y.a)(j,2),U=C[0],S=C[1],P=Object(r.useState)(!1),B=Object(y.a)(P,2),L=B[0],w=B[1],x=function(){e.onClickShare(N,i,U),h(""),m(""),S(""),l(!1),k(!1),g(!1),w(!1)};return n.a.createElement(f.Consumer,null,(function(e){return n.a.createElement("div",{className:"share"},n.a.createElement("div",{className:"shareWrapper"},n.a.createElement("div",{className:"shareTop"},n.a.createElement("img",{className:"shareProfileImg",src:e.currentPerson.icon,alt:""}),n.a.createElement("input",{placeholder:"What's in your mind?",className:"shareInput",value:N,onChange:function(e){return h(e.currentTarget.value)}})),n.a.createElement("hr",{className:"shareHr"}),s&&!E&&n.a.createElement(n.a.Fragment,null,n.a.createElement("input",{value:i,onChange:function(e){return m(e.currentTarget.value)},placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0441\u044b\u043b\u043a\u0443 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0438...",className:"sharePhotoLink"}),n.a.createElement("span",null,n.a.createElement("button",{onClick:function(){return g(!0)},className:"shareButton shareButtonOk"},"Ok"))),E&&n.a.createElement("img",{className:"shareNewImg",src:i,alt:""}),I&&!L&&n.a.createElement(n.a.Fragment,null,n.a.createElement("input",{placeholder:"Your location...",className:"shareLocation",value:U,onChange:function(e){return S(e.currentTarget.value)}}),n.a.createElement("span",null,n.a.createElement("button",{onClick:function(){return w(!0)},className:"shareButton shareButtonOk"},"Ok"))),L&&n.a.createElement("div",{className:"shareOption"},n.a.createElement(T.a,{htmlColor:"green",className:"shareIcon"}),n.a.createElement("span",{className:"shareOptionText"},U)),n.a.createElement("div",{className:"shareBottom"},n.a.createElement("div",{className:"shareOptions newShareOptions"},n.a.createElement("div",{onClick:function(){return l(!0)},className:"shareOption"},n.a.createElement(D.a,{htmlColor:"tomato",className:"shareIcon"}),n.a.createElement("span",{className:"shareOptionText"},"Photo or Video")),n.a.createElement("div",{onClick:function(){return k(!0)},className:"shareOption"},n.a.createElement(T.a,{htmlColor:"green",className:"shareIcon"}),n.a.createElement("span",{className:"shareOptionText"},"Location"))),n.a.createElement("button",{onClick:x,className:"shareButton"},"Share"))))}))}t(56);function R(e){return n.a.createElement(f.Consumer,null,(function(a){var t=[];if(e.home){var r=a.currentPerson&&a.currentPerson.followers?a.currentPerson.followers:[],s=[];r.map((function(e){a.allUsers[e]&&!!a.allUsers[e].posts&&(s=s.concat(a.allUsers[e].posts))})),t=s.sort((function(e,a){return x()(a.date)-x()(e.date)}))}return n.a.createElement("div",{className:"feed"},n.a.createElement("div",{className:"feedWrapper"},e.profile&&n.a.createElement(J,{onClickShare:a.onClickShare}),e.home||e.user||!a.currentPerson.posts?null:a.currentPerson.posts.map((function(e,t){return n.a.createElement(F,{profile:!0,index:t,key:e.id,post:e,onClickDelBut:a.onClickDelBut,onClickLike:a.onClickLike})})),!e.home&&e.user&&a.currentUser.posts?a.currentUser.posts.map((function(t,r){return n.a.createElement(F,{user:e.user,index:r,key:t.id,post:t,onClickDelBut:a.onClickDelBut,onClickLike:a.onClickLike})})):null,e.home&&t.map((function(t,r){return n.a.createElement(F,{timeline:!0,user:e.user,index:r,key:t.id,post:t,onClickDelBut:a.onClickDelBut,onClickLike:a.onClickLike})}))))}))}t(57),t(58);function M(e){var a=e.user;return n.a.createElement(f.Consumer,null,(function(e){return n.a.createElement(N.b,{className:"usersLinks",to:"/user"},n.a.createElement("li",{onClick:function(){return e.onClickUser(a.userId)},className:"rightbarFriend"},n.a.createElement("div",{className:"rightbarProfileImgContainer"},n.a.createElement("img",{className:"rightbarProfileImg",src:a.icon,alt:""}),n.a.createElement("span",{className:"rightbarOnline"})),n.a.createElement("span",{className:"rightbarUsername"},a.userName)))}))}t(59);function W(){return n.a.createElement(f.Consumer,null,(function(e){return n.a.createElement("div",{className:"rightbarFollowings"},e.currentPerson.followers?e.currentPerson.followers.map((function(a){return n.a.createElement(N.b,{className:"usersLinks",to:"/user"},n.a.createElement("div",{onClick:function(){return e.onClickUser(a)},className:"rightbarFollowing"},n.a.createElement("img",{src:e.allUsers[a]&&e.allUsers[a].icon?e.allUsers[a].icon:"",alt:"",className:"rightbarFollowingImg"}),n.a.createElement("span",{className:"rightbarFollowingName"},e.allUsers[a]&&e.allUsers[a].userName?e.allUsers[a].userName.length<11?e.allUsers[a].userName:e.allUsers[a].userName.slice(0,10)+"...":"")))})):[])}))}function A(e){var a=function(){return n.a.createElement(f.Consumer,null,(function(e){var a=e.currentPerson.followers,t=[];return a.map((function(a){e.allUsers[a]&&!!e.allUsers[a].online&&t.push(e.allUsers[a])})),n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"birthdayContainer"},n.a.createElement("img",{className:"birthdayImg",src:"assets/gift.png",alt:""}),n.a.createElement("span",{className:"birthdayText"},n.a.createElement("b",null,"Lera Savinova")," have a birthday today.")),n.a.createElement("img",{className:"rightbarAd",src:"assets/ad.png",alt:""}),n.a.createElement("h4",{className:"rightbarTitle"},"Online Friends"),n.a.createElement("ul",{className:"rightbarFriendList"},e.allUsers&&t.map((function(e){return n.a.createElement(M,{key:e.userId,user:e})}))))}))},t=function(){var e=Object(r.useState)(!1),a=Object(y.a)(e,2),t=a[0],s=a[1],l=Object(r.useState)(""),c=Object(y.a)(l,2),o=c[0],i=c[1],m=Object(r.useState)(!1),u=Object(y.a)(m,2),p=u[0],E=u[1],g=Object(r.useState)(""),b=Object(y.a)(g,2),d=b[0],N=b[1],h=Object(r.useState)(!1),v=Object(y.a)(h,2),O=v[0],I=v[1],k=Object(r.useState)(""),j=Object(y.a)(k,2),C=j[0],U=j[1];return n.a.createElement(f.Consumer,null,(function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement("h4",{className:"rightbarTitle"},"User information"),n.a.createElement("div",{className:"rightbarInfo"},n.a.createElement("div",{className:"rightbarInfoItem"},n.a.createElement("span",{className:"rightbarInfoKey"},"City:"),!t&&n.a.createElement("span",{className:"rightbarInfoValue",onDoubleClick:function(){return s(!0)}},e.currentPerson.city||e.currentPerson.userId&&"Your city..."),t&&n.a.createElement("div",{className:"inputPlusBtnRightbar"},n.a.createElement("input",{value:o,onChange:function(e){return i(e.currentTarget.value)},placeholder:e.currentPerson.city||"Your city...",className:"profileInfoInputs"}),n.a.createElement("span",null,n.a.createElement("button",{onClick:function(){return e.onClickInputButton(o,"city"),s(!1),void i("")},className:"shareButton shareButtonOk"},"Ok")))),n.a.createElement("div",{className:"rightbarInfoItem"},n.a.createElement("span",{className:"rightbarInfoKey"},"From:"),!p&&n.a.createElement("span",{className:"rightbarInfoValue",onDoubleClick:function(){return E(!0)}},e.currentPerson.country||e.currentPerson.userId&&"Your country..."),p&&n.a.createElement("div",{className:"inputPlusBtnRightbar"},n.a.createElement("input",{value:d,onChange:function(e){return N(e.currentTarget.value)},placeholder:e.currentPerson.country||"Your country...",className:"profileInfoInputs"}),n.a.createElement("span",null,n.a.createElement("button",{onClick:function(){return e.onClickInputButton(d,"country"),E(!1),void N("")},className:"shareButton shareButtonOk"},"Ok")))),n.a.createElement("div",{className:"rightbarInfoItem"},n.a.createElement("span",{className:"rightbarInfoKey"},"Relationship:"),!O&&n.a.createElement("span",{className:"rightbarInfoValue",onDoubleClick:function(){return I(!0)}},e.currentPerson.relationship||e.currentPerson.userId&&"Your relationship..."),O&&n.a.createElement("div",{className:"inputPlusBtnRightbar"},n.a.createElement("input",{value:C,onChange:function(e){return U(e.currentTarget.value)},placeholder:e.currentPerson.relationship||"Your relationship...",className:"profileInfoInputs"}),n.a.createElement("span",null,n.a.createElement("button",{onClick:function(){return e.onClickInputButton(C,"relationship"),I(!1),void U("")},className:"shareButton shareButtonOk"},"Ok"))))),n.a.createElement("h4",{className:"rightbarTitle"},"User friends"),n.a.createElement(W,null))}))};return n.a.createElement("div",{className:"rightbar"},n.a.createElement("div",{className:"rightbarWrapper"},e.profile?n.a.createElement(t,null):n.a.createElement(a,null)))}t(60);function Y(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(h,null),n.a.createElement("div",{className:"homeContainer"},n.a.createElement(B,null),n.a.createElement(R,{profile:!1,home:!0}),n.a.createElement(A,{profile:!1})))}t(61);function K(e){var a=Object(r.useState)(""),t=Object(y.a)(a,2),s=t[0],l=t[1],c=Object(r.useState)(""),o=Object(y.a)(c,2),i=o[0],m=o[1];return n.a.createElement("div",{className:"login"},n.a.createElement("div",{className:"loginWrapper"},n.a.createElement("div",{className:"loginLeft"},n.a.createElement("h3",{className:"loginLogo"},"MySoc"),n.a.createElement("span",{className:"loginDesc"},"Connect with friends and the world around you on MySoc.")),n.a.createElement("div",{className:"loginRight"},n.a.createElement("div",{className:"loginBox"},n.a.createElement("input",{value:s,onChange:function(e){return l(e.currentTarget.value)},placeholder:"Email",className:"loginInput"}),n.a.createElement("input",{value:i,onChange:function(e){return m(e.currentTarget.value)},placeholder:"Password",className:"loginInput"}),n.a.createElement(N.b,{to:e.currentPerson?"/profile":"/"},n.a.createElement("button",{onClick:function(){return e.clickLoginButton(s,i)},className:"loginButton"},"Log In")),n.a.createElement("span",{className:"loginForgot"},"Forgot Password?"),n.a.createElement(N.b,{className:"loginRegisterButtonLink",to:"/register"},n.a.createElement("button",{className:"loginRegisterButton"},"Create a New Account"))))))}t(62);function V(){var e=Object(r.useState)(!1),a=Object(y.a)(e,2),t=a[0],s=a[1],l=Object(r.useState)(""),c=Object(y.a)(l,2),o=c[0],i=c[1],m=Object(r.useState)(!1),u=Object(y.a)(m,2),p=u[0],E=u[1],g=Object(r.useState)(""),b=Object(y.a)(g,2),d=b[0],N=b[1],v=Object(r.useState)(!1),O=Object(y.a)(v,2),I=O[0],k=O[1],j=Object(r.useState)(""),C=Object(y.a)(j,2),U=C[0],S=C[1],P=Object(r.useState)(!1),L=Object(y.a)(P,2),T=L[0],w=L[1],x=Object(r.useState)(""),F=Object(y.a)(x,2),D=F[0],J=F[1];return n.a.createElement(f.Consumer,null,(function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement(h,null),n.a.createElement("div",{className:"profile"},n.a.createElement(B,null),n.a.createElement("div",{className:"profileRight"},n.a.createElement("div",{className:"profileRightTop"},n.a.createElement("div",{className:"profileCover"},n.a.createElement("img",{className:"profileCoverImg",src:e.currentPerson.coverUrl||e.currentPerson.userId&&"assets/person/noCover.jpg",onDoubleClick:function(){return k(!0)},alt:""}),I&&n.a.createElement("div",{className:"inputPlusBtnCover"},n.a.createElement("input",{value:U,onChange:function(e){return S(e.currentTarget.value)},placeholder:e.currentPerson.coverUrl||"coverUrl...",className:"profileInfoInputs"}),n.a.createElement("span",null,n.a.createElement("button",{onClick:function(){return e.onClickInputButton(U,"coverUrl"),k(!1),void S("")},className:"shareButton shareButtonOk"},"Ok"))),n.a.createElement("img",{className:"profileUserImg",src:e.currentPerson.icon||e.currentPerson.userId&&"assets/person/noAvatar.png",onDoubleClick:function(){return w(!0)},alt:""}),T&&n.a.createElement("div",{className:"inputPlusBtnIcon"},n.a.createElement("input",{value:D,onChange:function(e){return J(e.currentTarget.value)},placeholder:e.currentPerson.coverUrl||"iconUrl...",className:"profileInfoInputs"}),n.a.createElement("span",null,n.a.createElement("button",{onClick:function(){return e.onClickInputButton(D,"icon"),w(!1),void J("")},className:"shareButton shareButtonOk"},"Ok")))),n.a.createElement("div",{className:"profileInfo"},!t&&n.a.createElement("h4",{className:"profileInfoName",onDoubleClick:function(){return s(!0)}},e.currentPerson.userName||e.currentPerson.userId&&"unknown"),t&&n.a.createElement("div",{className:"inputPlusBtn"},n.a.createElement("input",{value:o,onChange:function(e){return i(e.currentTarget.value)},placeholder:e.currentPerson.userName||"Username...",className:"profileInfoInputs"}),n.a.createElement("span",null,n.a.createElement("button",{onClick:function(){return e.onClickInputButton(o,"userName"),s(!1),void i("")},className:"shareButton shareButtonOk"},"Ok"))),!p&&n.a.createElement("span",{className:"profileInfoDesc",onDoubleClick:function(){return E(!0)}},e.currentPerson.status||e.currentPerson.userId&&"Your status..."),p&&n.a.createElement("div",{className:"inputPlusBtnStatus"},n.a.createElement("input",{value:d,onChange:function(e){return N(e.currentTarget.value)},placeholder:e.currentPerson.status||"Your status...",className:"profileInfoInputs"}),n.a.createElement("span",null,n.a.createElement("button",{onClick:function(){return e.onClickInputButton(d,"status"),E(!1),void N("")},className:"shareButton shareButtonOk"},"Ok"))))),n.a.createElement("div",{className:"profileRightBottom"},n.a.createElement(R,{profile:!0}),n.a.createElement(A,{profile:!0})))))}))}t(63);function H(e){var a=Object(r.useState)(""),t=Object(y.a)(a,2),s=t[0],l=t[1],c=Object(r.useState)(""),o=Object(y.a)(c,2),i=o[0],m=o[1],u=Object(r.useState)(""),p=Object(y.a)(u,2),E=p[0],g=p[1],b=Object(r.useState)(""),d=Object(y.a)(b,2),f=d[0],h=d[1];return n.a.createElement("div",{className:"login"},n.a.createElement("div",{className:"loginWrapper"},n.a.createElement("div",{className:"loginLeft"},n.a.createElement("h3",{className:"loginLogo"},"MySoc"),n.a.createElement("span",{className:"loginDesc"},"Connect with friends and the world around you on MySoc.")),n.a.createElement("div",{className:"loginRight"},n.a.createElement("div",{className:"loginBox"},n.a.createElement("input",{value:s,onChange:function(e){return l(e.currentTarget.value)},placeholder:"Username",className:"loginInput"}),n.a.createElement("input",{value:i,onChange:function(e){return m(e.currentTarget.value)},placeholder:"Email",className:"loginInput"}),n.a.createElement("input",{value:E,onChange:function(e){return g(e.currentTarget.value)},placeholder:"Password",className:"loginInput"}),n.a.createElement("input",{value:f,onChange:function(e){return h(e.currentTarget.value)},placeholder:"Password Again",className:"loginInput"}),n.a.createElement(N.b,{to:"/profile"},n.a.createElement("button",{onClick:function(){return e.clickRegisterButton(s,i,E)},className:"loginButton"},"Sign Up")),n.a.createElement(N.b,{className:"loginRegisterButtonLink",to:"/"},n.a.createElement("button",{className:"loginRegisterButton"},"Log into Account"))))))}t(64),t(65);function z(){return n.a.createElement(f.Consumer,null,(function(e){return n.a.createElement(n.a.Fragment,null,e.currentPerson.followers&&e.currentPerson.followers.map((function(a){return n.a.createElement("div",{onClick:function(){return e.onClickUser(a)},className:"conversation"},n.a.createElement("img",{className:"conversationImg",src:e.allUsers[a]&&e.allUsers[a].icon?e.allUsers[a].icon:"",alt:""}),n.a.createElement("span",{className:"conversationName"},e.allUsers[a]&&e.allUsers[a].userName?e.allUsers[a].userName:""))})))}))}t(66);function G(e){var a=e.own,t=e.message,r=e.icon;return n.a.createElement("div",{className:"message ".concat(a&&"own")},n.a.createElement("div",{className:"messageTop"},!a&&n.a.createElement("img",{className:"messageImg",src:r,alt:""}),n.a.createElement("p",{className:"messageText"},t)),n.a.createElement("div",{className:"messageBottom"}))}t(67);function Q(e){return n.a.createElement(f.Consumer,null,(function(a){return n.a.createElement("div",{onClick:function(){return a.onClickUser(e.user.userId)},className:"chatOnline"},n.a.createElement("div",{className:"chatOnlineFriend"},n.a.createElement("div",{className:"chatOnlineImgContainer"},n.a.createElement("img",{className:"chatOnlineImg",src:e.user.icon,alt:""}),n.a.createElement("div",{className:"chatOnlineBadge"})),n.a.createElement("span",{className:"chatOnlineName"},e.user.userName)))}))}function X(){var e=Object(r.useState)(""),a=Object(y.a)(e,2),t=a[0],s=a[1];return n.a.createElement(f.Consumer,null,(function(e){var a=e.currentPerson.followers,r=[];a?a.map((function(a){e.allUsers[a]&&!!e.allUsers[a].online&&r.push(e.allUsers[a])})):r=[];var l=function(){s(""),e.onSendClick(e.currentUser.userId,t)},c=e.currentUser&&e.currentUser.userId?e.currentUser.userId:"",o=e.currentPerson.messages&&e.currentPerson.messages[c]?e.currentPerson.messages[c]:[];return n.a.createElement(n.a.Fragment,null,n.a.createElement(h,null),n.a.createElement("div",{className:"messenger"},n.a.createElement("div",{className:"chatMenu"},n.a.createElement("div",{className:"chatMenuWrapper"},n.a.createElement("input",{placeholder:"Search for friends",className:"chatMenuInput"}),n.a.createElement("div",null,n.a.createElement(z,null)))),n.a.createElement("div",{className:"chatBox"},n.a.createElement("div",{className:"chatBoxWrapper"},n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"chatBoxTop"},n.a.createElement("div",null,o?o.map((function(a){return n.a.createElement(G,{icon:e.currentUser.icon,own:"true"==Object.keys(a)[0],message:Object.values(a)[0]})})):[])),n.a.createElement("div",{className:"chatBoxBottom"},n.a.createElement("textarea",{onKeyPress:function(e){"Enter"==e.key&&l()},value:t,onChange:function(e){return s(e.currentTarget.value)},className:"chatMessageInput",placeholder:"write something..."}),n.a.createElement("button",{onClick:l,className:"chatSubmitButton"},"Send"))))),n.a.createElement("div",{className:"chatOnline"},n.a.createElement("div",{className:"chatOnlineWrapper"},e.allUsers&&r.map((function(e){return n.a.createElement(Q,{key:e.userId,user:e})}))))))}))}t(68),t(69);function Z(e){var a=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"birthdayContainer"},n.a.createElement("img",{className:"birthdayImg",src:"assets/gift.png",alt:""}),n.a.createElement("span",{className:"birthdayText"},n.a.createElement("b",null,"Pola Foster")," and ",n.a.createElement("b",null,"3 other friends")," have a birthday today.")),n.a.createElement("img",{className:"rightbarAd",src:"assets/ad.png",alt:""}),n.a.createElement("h4",{className:"rightbarTitle"},"Online Friends"),n.a.createElement("ul",{className:"rightbarFriendList"}))},t=function(){var a=JSON.parse(localStorage.getItem("currentPerson")),t=e.allUsers[a.userId],s=JSON.parse(localStorage.getItem("currentUser")).userId,l=!(t=(t=t||{}).followers?t:Object(c.a)(Object(c.a)({},t),{},{followers:[]})).followers.includes(s),o=Object(r.useState)(l),i=Object(y.a)(o,2),m=i[0],u=i[1];return n.a.createElement(f.Consumer,null,(function(e){return n.a.createElement("div",{className:"userWrapper"},n.a.createElement("h4",{className:"rightbarTitle"},"User information"),n.a.createElement("div",{className:"rightbarInfo"},n.a.createElement("div",{className:"rightbarInfoItem"},n.a.createElement("span",{className:"rightbarInfoKey"},"City:"),n.a.createElement("span",{className:"rightbarInfoValue"},e.currentUser.city||e.currentUser.userId&&"...")),n.a.createElement("div",{className:"rightbarInfoItem"},n.a.createElement("span",{className:"rightbarInfoKey"},"From:"),n.a.createElement("span",{className:"rightbarInfoValue"},e.currentUser.country||e.currentUser.userId&&"...")),n.a.createElement("div",{className:"rightbarInfoItem"},n.a.createElement("span",{className:"rightbarInfoKey"},"Relationship:"),n.a.createElement("span",{className:"rightbarInfoValue"},e.currentUser.relationship||e.currentUser.userId&&"..."))),n.a.createElement("button",{onClick:function(){u(!m),e.followOnUser()},className:"followBtn ".concat(m?"redFollow":"greenFollow")},m?"FOLLOW":"UNFOLLOW"),n.a.createElement("h4",{className:"rightbarTitle"},"User friends"),n.a.createElement(W,null))}))};return n.a.createElement("div",{className:"rightbar"},n.a.createElement("div",{className:"rightbarWrapper"},e.profile?n.a.createElement(t,null):n.a.createElement(a,null)))}function q(e){return n.a.createElement(f.Consumer,null,(function(a){return n.a.createElement(n.a.Fragment,null,n.a.createElement(h,null),n.a.createElement("div",{className:"profile"},n.a.createElement(B,null),n.a.createElement("div",{className:"profileRight"},n.a.createElement("div",{className:"profileRightTop"},n.a.createElement("div",{className:"profileCover"},n.a.createElement("img",{className:"profileCoverImg",src:a.currentUser.coverUrl||a.currentUser.userId&&"assets/person/noCover.jpg",alt:""}),n.a.createElement("img",{className:"profileUserImg",src:a.currentUser.icon||a.currentUser.userId&&"assets/person/noAvatar.png",alt:""})),n.a.createElement("div",{className:"profileInfo"},n.a.createElement("h4",{className:"profileInfoName"},a.currentUser.userName||a.currentUser.userId&&"unknown"),n.a.createElement("span",{className:"profileInfoDesc"},a.currentUser.status||a.currentUser.userId&&"Your status..."))),n.a.createElement("div",{className:"profileRightBottom"},n.a.createElement(R,{profile:!1,user:!0}),n.a.createElement(Z,{profile:!0,allUsers:e.allUsers})))))}))}var $=t(12),_=t(36),ee=t.n(_),ae=t(37).a.initializeApp({apiKey:"AIzaSyD7Y3vb7mNdWMUZ5OPSKaKoXwos0EMlYSM",authDomain:"very-hot-burgers-c47ca.firebaseapp.com",databaseURL:"https://very-hot-burgers-c47ca-default-rtdb.europe-west1.firebasedatabase.app"}),te=ee.a.createClass(ae.database()),re=function(e){Object(u.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(i.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=a.call.apply(a,[this].concat(n))).state={allUsers:{}},e}return Object(m.a)(t,[{key:"componentDidMount",value:function(){this.ref=te.syncState("MySoc/allUsers",{context:this,state:"allUsers"})}},{key:"componentWillUnmount",value:function(){te.removeBinding(this.ref)}},{key:"componentDidUpdate",value:function(){console.log(this.state)}},{key:"render",value:function(){var e=this,a=function(a,t,r){var n,s=(new Date).valueOf(),l=(n={userName:a,userEmail:t,userPassword:r,userId:s,posts:[]},Object(o.a)(n,"userName",""),Object(o.a)(n,"status",""),Object(o.a)(n,"city",""),Object(o.a)(n,"country",""),Object(o.a)(n,"relationship",""),Object(o.a)(n,"coverUrl",""),Object(o.a)(n,"icon",""),Object(o.a)(n,"online",!0),Object(o.a)(n,"followers",[]),Object(o.a)(n,"messages",[]),n),i=Object(c.a)({},e.state.allUsers);i[s]=l,e.setState({allUsers:i}),localStorage.setItem("currentPerson",JSON.stringify(Object(c.a)({},l)))},t=function(a,t){var r=e.state.allUsers,n=!0;for(var s in r)if(r[s].userEmail==a&&r[s].userPassword==t){n=!1;var l=Object(c.a)({},r[s]);localStorage.setItem("currentPerson",JSON.stringify(l));var o=Object(c.a)({},e.state.allUsers);o[s].online=!0,o[s].flag=!o[s].flag,e.setState({allUsers:o});break}n&&alert("Email \u0438\u043b\u0438 Password \u0432\u0432\u0435\u0434\u0435\u043d \u043d\u0435\u0432\u0435\u0440\u043d\u043e...")},r=function(){var a=JSON.parse(localStorage.getItem("currentPerson")).userId;localStorage.setItem("currentPerson",JSON.stringify({}));var t=Object(c.a)({},e.state.allUsers);t[a].online=!1,e.setState({allUsers:t})},s=Object(c.a)(Object(c.a)({},this.state),{},{currentPerson:JSON.parse(localStorage.getItem("currentPerson")),currentUser:JSON.parse(localStorage.getItem("currentUser")),clickRegisterButton:a,clickLoginButton:t,onClickTopbarImg:r,onClickShare:function(a,t,r){var n=JSON.parse(localStorage.getItem("currentPerson")).userId,s=new Date,l={comment:0,date:s.getMonth()+1+"."+s.getDate()+"."+s.getFullYear()+" "+s.getHours()+":"+s.getMinutes(),desc:a,id:n,like:0,photo:t,userId:n,location:r,posts:[]},o=e.state.allUsers[n].posts;o?o.unshift(l):o=[l];var i=Object(c.a)({},e.state.allUsers);i[n].posts=o,e.setState({allUsers:i});var m=e.state.allUsers[n];localStorage.setItem("currentPerson",JSON.stringify(m))},onClickDelBut:function(a){var t=JSON.parse(localStorage.getItem("currentPerson")),r=t.userId,n=t.posts;n.splice(a.currentTarget.getAttribute("index"),1);var s=Object(c.a)(Object(c.a)({},t),{},{posts:n});localStorage.setItem("currentPerson",JSON.stringify(s));var l=Object(c.a)(Object(c.a)({},e.state.allUsers[r]),{},{posts:n}),i=Object(c.a)(Object(c.a)({},e.state.allUsers),{},Object(o.a)({},r,l));e.setState({allUsers:i})},onClickLike:function(a,t){var r=JSON.parse(localStorage.getItem("currentPerson")),n=r.userId,s=r.posts;s[a.currentTarget.getAttribute("index")].like=t;var l=Object(c.a)(Object(c.a)({},r),{},{posts:s});localStorage.setItem("currentPerson",JSON.stringify(l));var i=Object(c.a)(Object(c.a)({},e.state.allUsers[n]),{},{posts:s}),m=Object(c.a)(Object(c.a)({},e.state.allUsers),{},Object(o.a)({},n,i));e.setState({allUsers:m})},onClickInputButton:function(a,t){if(a){var r=JSON.parse(localStorage.getItem("currentPerson")),n=r.userId,s=Object(c.a)(Object(c.a)({},r),{},Object(o.a)({},t,a));localStorage.setItem("currentPerson",JSON.stringify(s));var l=Object(c.a)(Object(c.a)({},e.state.allUsers[n]),{},Object(o.a)({},t,a)),i=Object(c.a)(Object(c.a)({},e.state.allUsers),{},Object(o.a)({},n,l));e.setState({allUsers:i})}},onClickUser:function(a){var t=Object(c.a)({},e.state.allUsers[a]);localStorage.setItem("currentUser",JSON.stringify(t));var r=JSON.parse(localStorage.getItem("currentPerson")).userId,n=e.state.allUsers[r].flag,s=Object(c.a)(Object(c.a)({},e.state.allUsers[r]),{},{flag:!n}),l=Object(c.a)(Object(c.a)({},e.state.allUsers),{},Object(o.a)({},r,s));e.setState({allUsers:l})},followOnUser:function(){var a=JSON.parse(localStorage.getItem("currentUser")).userId,t=JSON.parse(localStorage.getItem("currentPerson")).userId,r=e.state.allUsers[t].followers;(r=r||[]).includes(a)?r.splice(r.indexOf(a),1):r.unshift(a);var n=Object(c.a)(Object(c.a)({},e.state.allUsers[t]),{},{followers:r}),s=Object(c.a)(Object(c.a)({},e.state.allUsers),{},Object(o.a)({},t,n));localStorage.setItem("currentPerson",JSON.stringify(n)),e.setState({allUsers:s})},onSendClick:function(a,t){var r,n=JSON.parse(localStorage.getItem("currentPerson")).userId,s={true:t},l={false:t},i=Object(c.a)({},e.state.allUsers),m=i[n].messages&&i[n].messages[a]?i[n].messages[a]:[],u=i[a].messages&&i[a].messages[n]?i[a].messages[n]:[];m.push(s),u.push(l);var p=Object(o.a)({},a,m),E=Object(o.a)({},n,u),g=Object(c.a)(Object(c.a)({},i[n]),{},{messages:p}),b=Object(c.a)(Object(c.a)({},i[a]),{},{messages:E}),d=Object(c.a)(Object(c.a)({},i),{},(r={},Object(o.a)(r,n,g),Object(o.a)(r,a,b),r));localStorage.setItem("currentPerson",JSON.stringify(g)),localStorage.setItem("currentUser",JSON.stringify(b)),e.setState({allUsers:d})}});return n.a.createElement(f.Provider,{value:s},n.a.createElement(N.a,null,n.a.createElement($.a,{path:"/timeline"},n.a.createElement(Y,null)),n.a.createElement($.a,{path:"https://loraxavgn.github.io/MySoc/"},n.a.createElement(K,{clickLoginButton:t,currentPerson:localStorage.getItem("currentPerson")?JSON.parse(localStorage.getItem("currentPerson")).userEmail:{}})),n.a.createElement($.a,{path:"/register"},n.a.createElement(H,{clickRegisterButton:a})),n.a.createElement($.a,{path:"/messenger"},n.a.createElement(X,{onClickTopbarImg:r})),n.a.createElement($.a,{path:"/profile"},n.a.createElement(V,null)),n.a.createElement($.a,{path:"/user"},n.a.createElement(q,{allUsers:this.state.allUsers}))))}}]),t}(n.a.Component);l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(re,null)),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.75a0a4db.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports=n(23)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(9),c=n.n(r),l=n(7),i=n(6),u=n(1),s=n(2),m=n(4),d=n(3),f=n(5),b=(n(16),function(e){var t=e.toDo,n=e.done;return o.a.createElement("div",{className:"app-header d-flex"},o.a.createElement("h1",null,"Todo List"),o.a.createElement("h2",null,t," more to do, ",n," done"))}),h=(n(17),function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={term:""},n.onSearchChange=function(e){var t=e.target.value;n.setState({term:t}),n.props.onSearchChange(t)},n}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("input",{type:"text",className:"form-control search-input",placeholder:"search",value:this.state.term,onChange:this.onSearchChange})}}]),t}(a.Component)),p=(n(18),function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.label,n=e.onDeleted,a=e.onToggleImportant,r=e.onToggleDone,c=e.important,l="todo-list-item";return e.done&&(l+=" done"),c&&(l+=" important"),o.a.createElement("span",{className:l},o.a.createElement("span",{className:"todo-list-item-label",onClick:r},t),o.a.createElement("button",{type:"button",className:"btn btn-outline-success btn-sm float-right",onClick:a},o.a.createElement("i",{className:"fa fa-exclamation"})),o.a.createElement("button",{type:"button",className:"btn btn-outline-danger btn-sm float-right",onClick:n},o.a.createElement("i",{className:"fa fa-trash-o"})))}}]),t}(a.Component)),g=(n(19),function(e){var t=e.todos,n=e.onDeleted,a=e.onToggleImportant,r=e.onToggleDone,c=t.map(function(e){return o.a.createElement("li",{className:"list-group-item",key:e.id},o.a.createElement(p,Object.assign({},e,{onDeleted:function(){return n(e.id)},onToggleImportant:function(){return a(e.id)},onToggleDone:function(){return r(e.id)}})))});return o.a.createElement("ul",{className:"list-group todo-list"},c)}),v=(n(20),function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).buttons=[{name:"all",label:"All"},{name:"active",label:"Active"},{name:"done",label:"Done"}],n}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.filter,n=e.onFilterChange,a=this.buttons.map(function(e){var a=e.name,r=e.label,c=t===a?"btn-info":"btn-outline-secondary";return o.a.createElement("button",{type:"button",className:"btn ".concat(c),key:a,onClick:function(){return n(a)}},r)});return o.a.createElement("div",{className:"btn-group"},a)}}]),t}(a.Component)),O=(n(21),function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={label:""},n.onLabelChange=function(e){n.setState({label:e.target.value})},n.onSubmit=function(e){e.preventDefault(),n.props.onItemAdded(n.state.label),n.setState({label:""})},n}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("form",{className:"item-add-form d-flex",onSubmit:this.onSubmit},o.a.createElement("input",{type:"text",className:"form-control",onChange:this.onLabelChange,placeholder:"What needs to be done",value:this.state.label}),o.a.createElement("button",{className:"btn btn-outline-secondary"},"Add"))}}]),t}(a.Component)),j=(n(22),function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).maxId=100,n.state={todoData:[{label:"Drink Coffee",important:!1,id:1},{label:"Make React App",important:!0,id:2},{label:"Have a hunch",important:!1,id:3}],term:"",filter:"all"},n.deleteItem=function(e){n.setState(function(t){var n=t.todoData,a=n.findIndex(function(t){return t.id===e});return{todoData:[].concat(Object(i.a)(n.slice(0,a)),Object(i.a)(n.slice(a+1)))}})},n.addItem=function(e){var t={label:e,important:!1,id:n.maxId++};n.setState(function(e){var n=e.todoData;return{todoData:[].concat(Object(i.a)(n),[t])}})},n.onToggleImportant=function(e){n.setState(function(t){var n=t.todoData,a=n.findIndex(function(t){return t.id===e}),o=n[a],r=Object(l.a)({},o,{important:!o.important});return{todoData:[].concat(Object(i.a)(n.slice(0,a)),[r],Object(i.a)(n.slice(a+1)))}})},n.onToggleDone=function(e){n.setState(function(t){var n=t.todoData,a=n.findIndex(function(t){return t.id===e}),o=n[a],r=Object(l.a)({},o,{done:!o.done});return{todoData:[].concat(Object(i.a)(n.slice(0,a)),[r],Object(i.a)(n.slice(a+1)))}})},n.onSearchChange=function(e){n.setState({term:e})},n.onFilterChange=function(e){n.setState({filter:e})},n}return Object(f.a)(t,e),Object(s.a)(t,[{key:"search",value:function(e,t){return 0===t.length?e:e.filter(function(e){return e.label.toLowerCase().indexOf(t.toLowerCase())>-1})}},{key:"filter",value:function(e,t){switch(t){case"all":return e;case"active":return e.filter(function(e){return!e.done});case"done":return e.filter(function(e){return e.done});default:return e}}},{key:"render",value:function(){var e=this.state,t=e.todoData,n=e.term,a=e.filter,r=this.filter(this.search(t,n),a),c=t.filter(function(e){return e.done}).length,l=t.length-c;return o.a.createElement("div",{className:"todo-app"},o.a.createElement(b,{toDo:l,done:c}),o.a.createElement("div",{className:"top-panel d-flex"},o.a.createElement(h,{onSearchChange:this.onSearchChange}),o.a.createElement(v,{filter:a,onFilterChange:this.onFilterChange})),o.a.createElement(g,{todos:r,onDeleted:this.deleteItem,onToggleImportant:this.onToggleImportant,onToggleDone:this.onToggleDone}),o.a.createElement(O,{onItemAdded:this.addItem}))}}]),t}(a.Component));c.a.render(o.a.createElement(j,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.aec8dbe8.chunk.js.map
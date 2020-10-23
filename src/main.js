const div = dom.create('<div>newDiv</div>')
console.log(div);

dom.after(test,div);

const div2 = dom.create('<div id="parent"></div>')
dom.wrap(test,div2)

dom.attr(test,'title','hello')
const title = dom.attr(test,'title')
console.log('title:${{title}}');

dom.text(test,'new string')

dom.style(test,{border:'1px solid red',color:'blue'})
console.log(dom.style(test, 'border'));

dom.class.add(test,'red')
dom.class.add(test,'blue')
dom.class.remove(test,'red')

const fn = () =>{
    console.log('点击了');
}

dom.on(test,'click',fn)
// dom.off(test,'click',fn)

const testDiv = dom.find('#test')[0]
console.log(testDiv);
const test2 = dom.find('#test2')[0]
console.log(dom.find('.red', test2)[0]);

console.log(dom.parent(test));

const a2 = dom.find('#a2')[0]
console.log(dom.siblings(a2));
console.log(dom.next(a2));
console.log(dom.previous(a2));

const r = dom.find('#travel')[0]
dom.each(dom.children(r),(n)=>dom.style(n,'color','red'))

console.log(dom.index(a2));
export const useFoo = (v)=>{
	let foo = 'foo'
	if(v) foo = v
	return useState('foo',()=>foo)
}
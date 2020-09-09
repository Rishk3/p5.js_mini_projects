
class node{
	constructor (val){
		this.value=val;
		this.left=null;
		this.right=null;
	}
	function tree(){ this.root=null;

	}
	tree.node.prototype.addnode = function(n) {
		if(this.root==null){this.root=n;}
	};
}
function setup() {
node n=new node(5);
node.tree.addnode(n);
console.log(n);
}
function draw(){

}
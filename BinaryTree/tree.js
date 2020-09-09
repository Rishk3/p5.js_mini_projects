function tree() {
this.root=null;
}
tree.prototype.traverse = function() {
	root.visit();
};
tree.prototype.addValue = function(val) {
var n=new Node(val);
if(this.root==null){
this.root=n;
}
else{
	this.root.addNode(n);
}	
}
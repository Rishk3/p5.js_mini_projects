function Node(val) {
	this.value=val;
	this.right=null;
	this.right=null;
}
Node.prototype.addNode = function(n) {
	if(n.value<this.value){
		if(this.left==null){
			this.left=n;

		}
          else{ this.left.addNewnode(n);}
      }
      else
 if(n.value>this.value){
     	if(this.left==null){
			this.left=n;    }
                           else{ this.right.addNewnode(n);}
                     }
      
      }


Node.prototype.visit()=function(){
if(this.left!=null){	this.left.visit();}
	console.log(this.value);
if (this.right!=null){
	this.right.visit();
}


}